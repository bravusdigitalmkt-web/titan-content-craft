import { createServerFn } from "@tanstack/react-start";

const BUCKET = "portfolio-videos";
const CATEGORIES = [
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
  "Stories",
  "Carrosséis",
] as const;
type Category = (typeof CATEGORIES)[number];

// ------------- PUBLIC -------------

export const listPortfolioVideos = createServerFn({ method: "GET" }).handler(
  async () => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("portfolio_videos")
      .select("id, title, description, category, storage_path, created_at")
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);

    const rows = data ?? [];
    const withUrls = await Promise.all(
      rows.map(async (v) => {
        const { data: signed } = await supabaseAdmin.storage
          .from(BUCKET)
          .createSignedUrl(v.storage_path, 60 * 60 * 24 * 7);
        return { ...v, url: signed?.signedUrl ?? null };
      }),
    );
    return withUrls;
  },
);

// ------------- ADMIN OPS (sem login) -------------

export const adminCreateUploadUrl = createServerFn({ method: "POST" })
  .inputValidator((data: { filename: string }) => data)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const safe = (data.filename || "video.mp4").replace(/[^\w.-]/g, "_").slice(-60);
    const path = `${Date.now()}-${crypto.randomUUID()}-${safe}`;

    const { data: signed, error } = await supabaseAdmin.storage
      .from(BUCKET)
      .createSignedUploadUrl(path);
    if (error) throw new Error(error.message);
    return { path, token: signed.token, signedUrl: signed.signedUrl };
  });

export const adminInsertVideo = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      title: string;
      description: string | null;
      category: Category;
      storage_path: string;
    }) => data,
  )
  .handler(async ({ data }) => {
    if (!CATEGORIES.includes(data.category)) throw new Error("Categoria inválida");
    const title = String(data.title || "").trim();
    if (title.length < 1 || title.length > 120) throw new Error("Título inválido");
    const description = data.description ? String(data.description).trim().slice(0, 400) : null;

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("portfolio_videos").insert({
      title,
      description,
      category: data.category,
      storage_path: data.storage_path,
    });
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });

export const adminDeleteVideo = createServerFn({ method: "POST" })
  .inputValidator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: row } = await supabaseAdmin
      .from("portfolio_videos")
      .select("storage_path")
      .eq("id", data.id)
      .maybeSingle();

    if (row?.storage_path) {
      await supabaseAdmin.storage.from(BUCKET).remove([row.storage_path]);
    }
    const { error } = await supabaseAdmin
      .from("portfolio_videos")
      .delete()
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { ok: true as const };
  });
