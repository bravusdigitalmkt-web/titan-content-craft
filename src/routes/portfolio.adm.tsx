import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Loader2, Lock, LogOut, Trash2, Upload } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { supabase } from "@/integrations/supabase/client";
import {
  adminCreateUploadUrl,
  adminDeleteVideo,
  adminInsertVideo,
  adminIsAuthed,
  adminLogin,
  adminLogout,
  listPortfolioVideos,
} from "@/lib/portfolio.functions";

export const Route = createFileRoute("/portfolio/adm")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin — Portfólio Titan" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

const BUCKET = "portfolio-videos";
const CATEGORIES = [
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
  "Stories",
  "Carrosséis",
] as const;
type Category = (typeof CATEGORIES)[number];

type VideoRow = {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  storage_path: string;
  created_at: string;
  url: string | null;
};

function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await adminIsAuthed();
        setAuthed(r.authed);
      } finally {
        setChecking(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl px-5 pt-32 pb-20 sm:px-8">
        {checking ? (
          <div className="grid place-items-center py-20 text-white/50">
            <Loader2 className="animate-spin" />
          </div>
        ) : authed ? (
          <Panel onLogout={() => setAuthed(false)} />
        ) : (
          <LoginForm onSuccess={() => setAuthed(true)} />
        )}
      </div>
    </div>
  );
}

function LoginForm({ onSuccess }: { onSuccess: () => void }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      const r = await adminLogin({ data: { user, password } });
      if (!r.ok) setErr("Usuário ou senha inválidos.");
      else onSuccess();
    } catch {
      setErr("Erro ao entrar. Tente de novo.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8"
    >
      <div className="mb-6 flex items-center gap-2">
        <Lock size={16} className="text-[#3B82F6]" />
        <h1 className="font-[Sora] text-lg font-semibold">Área do admin</h1>
      </div>

      <label className="mb-3 block">
        <span className="mb-1 block text-xs uppercase tracking-wide text-white/60">
          Usuário
        </span>
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          autoComplete="username"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm focus:border-[#1E5FFF] focus:outline-none"
        />
      </label>

      <label className="mb-5 block">
        <span className="mb-1 block text-xs uppercase tracking-wide text-white/60">
          Senha
        </span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm focus:border-[#1E5FFF] focus:outline-none"
        />
      </label>

      {err && (
        <div className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {err}
        </div>
      )}

      <button
        type="submit"
        disabled={busy}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1E5FFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(30,95,255,0.6)] transition-all hover:scale-[1.01] disabled:opacity-60"
      >
        {busy ? <Loader2 size={16} className="animate-spin" /> : "Entrar"}
      </button>
    </form>
  );
}

function Panel({ onLogout }: { onLogout: () => void }) {
  const [videos, setVideos] = useState<VideoRow[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await listPortfolioVideos();
      setVideos(data as VideoRow[]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleLogout = async () => {
    await adminLogout();
    onLogout();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar esse vídeo? Essa ação não pode ser desfeita.")) return;
    await adminDeleteVideo({ data: { id } });
    load();
  };

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="font-[Sora] text-2xl font-bold sm:text-3xl">
            Painel do admin
          </h1>
          <p className="text-sm text-white/60">
            Suba novos vídeos e gerencie o portfólio.
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:border-white/20 hover:text-white"
        >
          <LogOut size={14} /> Sair
        </button>
      </div>

      <UploadForm onUploaded={load} />

      <div className="mt-12">
        <h2 className="mb-4 font-[Sora] text-lg font-semibold">
          Seus vídeos ({videos.length})
        </h2>
        {loading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[9/16] animate-pulse rounded-xl border border-white/10 bg-white/[0.03]"
              />
            ))}
          </div>
        ) : videos.length === 0 ? (
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-10 text-center text-sm text-white/60">
            Nenhum vídeo ainda. Suba o primeiro acima.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {videos.map((v) => (
              <div
                key={v.id}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[9/16] bg-black">
                  {v.url && (
                    <video
                      src={v.url}
                      controls
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <div className="p-3">
                  <div className="mb-1 inline-block rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/60">
                    {v.category}
                  </div>
                  <h3 className="truncate text-sm font-semibold">{v.title}</h3>
                  {v.description && (
                    <p className="mt-1 line-clamp-2 text-xs text-white/50">
                      {v.description}
                    </p>
                  )}
                  <button
                    onClick={() => handleDelete(v.id)}
                    className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-200 hover:bg-red-500/20"
                  >
                    <Trash2 size={12} /> Apagar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function UploadForm({ onUploaded }: { onUploaded: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Category>("Moda Feminina");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [progress, setProgress] = useState(0);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMsg(null);
    if (!file) return setMsg({ kind: "err", text: "Selecione um arquivo .mp4." });
    if (!file.type.includes("mp4") && !file.name.toLowerCase().endsWith(".mp4")) {
      return setMsg({ kind: "err", text: "O arquivo precisa ser .mp4." });
    }
    if (file.size > 200 * 1024 * 1024) {
      return setMsg({ kind: "err", text: "Arquivo muito grande (máx 200MB)." });
    }
    if (!title.trim()) return setMsg({ kind: "err", text: "Adicione um título." });

    setBusy(true);
    setProgress(10);
    try {
      const { path, token } = await adminCreateUploadUrl({
        data: { filename: file.name },
      });
      setProgress(30);

      const up = await supabase.storage
        .from(BUCKET)
        .uploadToSignedUrl(path, token, file, { contentType: "video/mp4" });
      if (up.error) throw new Error(up.error.message);
      setProgress(75);

      await adminInsertVideo({
        data: {
          title: title.trim(),
          description: description.trim() || null,
          category,
          storage_path: path,
        },
      });
      setProgress(100);

      setFile(null);
      setTitle("");
      setDescription("");
      setCategory("Moda Feminina");
      setMsg({ kind: "ok", text: "Vídeo publicado com sucesso!" });
      onUploaded();
    } catch (e: unknown) {
      const text = e instanceof Error ? e.message : "Erro ao publicar.";
      setMsg({ kind: "err", text });
    } finally {
      setBusy(false);
      setTimeout(() => setProgress(0), 800);
    }
  };

  return (
    <form
      onSubmit={submit}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
    >
      <div className="mb-5 flex items-center gap-2">
        <Upload size={16} className="text-[#3B82F6]" />
        <h2 className="font-[Sora] text-lg font-semibold">Publicar novo vídeo</h2>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-wide text-white/60">
            Arquivo (.mp4)
          </span>
          <input
            type="file"
            accept="video/mp4"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="block w-full cursor-pointer rounded-lg border border-white/10 bg-black/40 p-3 text-sm file:mr-3 file:cursor-pointer file:rounded-md file:border-0 file:bg-[#1E5FFF] file:px-3 file:py-1.5 file:text-xs file:font-medium file:text-white hover:file:bg-[#3B82F6]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-wide text-white/60">Título</span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={120}
            placeholder="Ex: Look verão — vestido midi"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-[#1E5FFF] focus:outline-none"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-wide text-white/60">
            Descrição curta
          </span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={400}
            rows={2}
            placeholder="Uma frase que resume o vídeo"
            className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm placeholder:text-white/30 focus:border-[#1E5FFF] focus:outline-none"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-xs uppercase tracking-wide text-white/60">Categoria</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-sm focus:border-[#1E5FFF] focus:outline-none"
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} className="bg-[#09090B]">
                {c}
              </option>
            ))}
          </select>
        </label>

        {progress > 0 && (
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-[#1E5FFF] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={busy}
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#1E5FFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-6px_rgba(30,95,255,0.6)] transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Enviando...
            </>
          ) : (
            <>Publicar vídeo</>
          )}
        </button>

        {msg && (
          <div
            className={`rounded-lg border px-3 py-2 text-sm ${
              msg.kind === "ok"
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                : "border-red-500/30 bg-red-500/10 text-red-200"
            }`}
          >
            {msg.text}
          </div>
        )}
      </div>
    </form>
  );
}
