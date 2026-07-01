import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { createHash, timingSafeEqual } from "node:crypto";

const BUCKET = "portfolio-videos";
const CATEGORIES = [
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
  "Stories",
  "Carrosséis",
] as const;
type Category = (typeof CATEGORIES)[number];

type AdminSession = { ok?: boolean };

function sessionConfig() {
  const password = process.env.ADMIN_SESSION_SECRET;
  if (!password) throw new Error("ADMIN_SESSION_SECRET not configured");
  return {
    password,
    name: "titan-admin",
    maxAge: 60 * 60 * 24 * 30, // 30 dias
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: "lax" as const,
      path: "/",
    },
  };
}

function eq(a: string, b: string) {
  const ah = createHash("sha256").update(a, "utf8").digest();
  const bh = createHash("sha256").update(b, "utf8").digest();
  return timingSafeEqual(ah, bh);
}

async function requireAdmin() {
  const session = await useSession<AdminSession>(sessionConfig());
  if (!session.data.ok) throw new Error("Unauthorized");
  return session;
}

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

// ------------- ADMIN AUTH -------------

export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((data: { user: string; password: string }) => data)
  .handler(async ({ data }) => {
    const user = process.env.ADMIN_USER;
    const pass = process.env.ADMIN_PASSWORD;
    if (!user || !pass) throw new Error("Admin credentials not configured");

    const ok =
      typeof data.user === "string" &&
      typeof data.password === "string" &&
      data.user.length > 0 &&
      data.password.length > 0 &&
      eq(data.user, user) &&
      eq(data.password, pass);

    if (!ok) return { ok: false as const };

    const session = await useSession<AdminSession>(sessionConfig());
    await session.update({ ok: true });
    return { ok: true as const };
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  await session.clear();
  return { ok: true as const };
});

export const adminIsAuthed = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useSession<AdminSession>(sessionConfig());
  return { authed: !!session.data.ok };
});

// ------------- ADMIN OPS -------------

export const adminCreateUploadUrl = createServerFn({ method: "POST" })
  .inputValidator((data: { filename: string }) => data)
  .handler(async ({ data }) => {
    // no auth — public admin panel
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
    // no auth — public admin panel

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
    // no auth — public admin panel
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
