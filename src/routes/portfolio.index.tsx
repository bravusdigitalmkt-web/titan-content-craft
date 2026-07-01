import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, Sparkles, Lock } from "lucide-react";
import { Navbar } from "@/components/site/navbar";
import { Reveal } from "@/components/site/reveal";
import { listPortfolioVideos } from "@/lib/portfolio.functions";

export const Route = createFileRoute("/portfolio")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Portfólio — Titan Criativos" },
      {
        name: "description",
        content:
          "Veja Reels, Stories e Carrosséis feitos com IA pela Titan Criativos para lojas de moda reais.",
      },
      { property: "og:title", content: "Portfólio — Titan Criativos" },
      {
        property: "og:description",
        content:
          "Reels, Stories e Carrosséis feitos com IA para lojas de moda reais.",
      },
    ],
  }),
  component: PortfolioPage,
});

const CATEGORIES = [
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
  "Stories",
  "Carrosséis",
] as const;
type Category = (typeof CATEGORIES)[number];

const WHATSAPP = `https://wa.me/5561982394985?text=${encodeURIComponent(
  "Olá Titan! Vi o portfólio de vocês e quero criar conteúdo assim pra minha loja.",
)}`;

type VideoRow = {
  id: string;
  title: string;
  description: string | null;
  category: Category;
  storage_path: string;
  created_at: string;
  url: string | null;
};

function PortfolioPage() {
  const [videos, setVideos] = useState<VideoRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"Todos" | Category>("Todos");

  useEffect(() => {
    (async () => {
      try {
        const data = await listPortfolioVideos();
        setVideos(data as VideoRow[]);
      } catch {
        setVideos([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = useMemo(
    () => (filter === "Todos" ? videos : videos.filter((v) => v.category === filter)),
    [videos, filter],
  );

  return (
    <div className="min-h-screen bg-[#09090B] text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pt-32 pb-16 sm:px-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 h-[480px] w-[880px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30,95,255,0.55), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal>
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
              <Sparkles size={14} className="text-[#3B82F6]" /> Portfólio Titan
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-5 font-[Sora] text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
              Veja o que a Titan já criou
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              Reels, Stories e Carrosséis feitos com IA para lojas de moda reais.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {(["Todos", ...CATEGORIES] as const).map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    active
                      ? "border-transparent bg-[#1E5FFF] text-white shadow-[0_8px_30px_-6px_rgba(30,95,255,0.6)]"
                      : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {loading ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-[9/16] animate-pulse rounded-2xl border border-white/10 bg-white/[0.03]"
                />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center text-white/60">
              <PlayCircle className="mx-auto mb-3 text-white/40" size={32} />
              Nenhum vídeo publicado ainda nessa categoria.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filtered.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-[#1E5FFF]/50"
                >
                  <div className="relative aspect-[9/16] w-full bg-black">
                    {v.url ? (
                      <video
                        src={v.url}
                        controls
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-white/40">
                        <PlayCircle size={32} />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="mb-1 inline-block rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wide text-white/60">
                      {v.category}
                    </div>
                    <h3 className="font-[Sora] text-sm font-semibold text-white">
                      {v.title}
                    </h3>
                    {v.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-white/60">
                        {v.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section className="px-5 py-24 sm:px-8">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1330] via-[#0a0f22] to-[#09090B] p-10 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 0%, rgba(30,95,255,0.45), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-[Sora] text-3xl font-bold leading-tight sm:text-4xl">
              Gostou do que viu? <br className="hidden sm:block" />
              Vamos criar isso pra sua loja.
            </h2>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#1E5FFF] px-8 py-4 text-base font-semibold text-white shadow-[0_10px_40px_-8px_rgba(30,95,255,0.7)] transition-transform hover:scale-[1.03]"
            >
              Falar no WhatsApp agora
            </a>
          </div>
        </div>
      </section>

      {/* Discreet admin link */}
      <div className="px-5 pb-10 text-center sm:px-8">
        <Link
          to="/portfolio/adm"
          className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white/60"
        >
          <Lock size={11} /> Área do admin
        </Link>
      </div>
    </div>
  );
}
