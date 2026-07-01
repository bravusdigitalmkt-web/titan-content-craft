import { supabase } from "@/integrations/supabase/client";

const BUCKET = "portfolio-videos";
const CATEGORIES = [
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
  "Stories",
  "Carrosséis",
] as const;
type Category = (typeof CATEGORIES)[number];

export async function listPortfolioVideos() {
  const { data, error } = await supabase
    .from("portfolio_videos")
    .select("id, title, description, category, storage_path, created_at")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);

  const rows = data ?? [];
  const withUrls = await Promise.all(
    rows.map(async (v) => {
      const { data: signed } = await supabase.storage
        .from(BUCKET)
        .createSignedUrl(v.storage_path, 60 * 60 * 24 * 7);
      return { ...v, url: signed?.signedUrl ?? null };
    }),
  );
  return withUrls;
}

export async function adminCreateUploadUrl({ data }: { data: { filename: string } }) {
  const safe = (data.filename || "video.mp4").replace(/[^\w.-]/g, "_").slice(-60);
  const path = `${Date.now()}-${crypto.randomUUID()}-${safe}`;
  const { data: signed, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUploadUrl(path);
  if (error) throw new Error(error.message);
  return { path, token: signed.token, signedUrl: signed.signedUrl };
}

export async function adminInsertVideo({
  data,
}: {
  data: {
    title: string;
    description: string | null;
    category: Category;
    storage_path: string;
  };
}) {
  if (!CATEGORIES.includes(data.category)) throw new Error("Categoria inválida");
  const title = String(data.title || "").trim();
  if (title.length < 1 || title.length > 120) throw new Error("Título inválido");
  const description = data.description
    ? String(data.description).trim().slice(0, 400)
    : null;

  const { error } = await supabase.from("portfolio_videos").insert({
    title,
    description,
    category: data.category,
    storage_path: data.storage_path,
  });
  if (error) throw new Error(error.message);
  return { ok: true as const };
}

export async function adminDeleteVideo({ data }: { data: { id: string } }) {
  const { data: row } = await supabase
    .from("portfolio_videos")
    .select("storage_path")
    .eq("id", data.id)
    .maybeSingle();

  if (row?.storage_path) {
    await supabase.storage.from(BUCKET).remove([row.storage_path]);
  }
  const { error } = await supabase
    .from("portfolio_videos")
    .delete()
    .eq("id", data.id);
  if (error) throw new Error(error.message);
  return { ok: true as const };
}
