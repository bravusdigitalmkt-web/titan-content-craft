-- Portfolio videos: only server (service role) can write; public can still read
DROP POLICY IF EXISTS "Public insert portfolio_videos" ON public.portfolio_videos;
DROP POLICY IF EXISTS "Public read portfolio_videos" ON public.portfolio_videos;

CREATE POLICY "Anyone can read portfolio videos"
  ON public.portfolio_videos FOR SELECT
  TO anon, authenticated
  USING (true);

-- No INSERT/UPDATE/DELETE policies for anon/authenticated => blocked.
-- service_role bypasses RLS, so server functions using the admin client still work.

GRANT SELECT ON public.portfolio_videos TO anon, authenticated;
GRANT ALL ON public.portfolio_videos TO service_role;

-- Storage: remove any anon insert on the portfolio-videos bucket
DROP POLICY IF EXISTS "Public upload portfolio-videos" ON storage.objects;
DROP POLICY IF EXISTS "Public read portfolio-videos" ON storage.objects;
DROP POLICY IF EXISTS "Anon can upload portfolio-videos" ON storage.objects;
DROP POLICY IF EXISTS "Anon can read portfolio-videos" ON storage.objects;
-- Bucket stays private; server uses service role for uploads and signed URLs.