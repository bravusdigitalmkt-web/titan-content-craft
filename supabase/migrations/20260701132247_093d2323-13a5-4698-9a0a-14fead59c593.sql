
-- Table grants + policies
GRANT SELECT, INSERT, UPDATE, DELETE ON public.portfolio_videos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.portfolio_videos TO authenticated;

DROP POLICY IF EXISTS "public read portfolio_videos" ON public.portfolio_videos;
DROP POLICY IF EXISTS "anon insert portfolio_videos" ON public.portfolio_videos;
DROP POLICY IF EXISTS "anon update portfolio_videos" ON public.portfolio_videos;
DROP POLICY IF EXISTS "anon delete portfolio_videos" ON public.portfolio_videos;

CREATE POLICY "public read portfolio_videos" ON public.portfolio_videos FOR SELECT USING (true);
CREATE POLICY "anon insert portfolio_videos" ON public.portfolio_videos FOR INSERT WITH CHECK (true);
CREATE POLICY "anon update portfolio_videos" ON public.portfolio_videos FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "anon delete portfolio_videos" ON public.portfolio_videos FOR DELETE USING (true);

-- Storage policies for portfolio-videos bucket (bucket stays private; access via policies + signed URLs)
DROP POLICY IF EXISTS "portfolio-videos read" ON storage.objects;
DROP POLICY IF EXISTS "portfolio-videos insert" ON storage.objects;
DROP POLICY IF EXISTS "portfolio-videos update" ON storage.objects;
DROP POLICY IF EXISTS "portfolio-videos delete" ON storage.objects;

CREATE POLICY "portfolio-videos read" ON storage.objects FOR SELECT USING (bucket_id = 'portfolio-videos');
CREATE POLICY "portfolio-videos insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'portfolio-videos');
CREATE POLICY "portfolio-videos update" ON storage.objects FOR UPDATE USING (bucket_id = 'portfolio-videos') WITH CHECK (bucket_id = 'portfolio-videos');
CREATE POLICY "portfolio-videos delete" ON storage.objects FOR DELETE USING (bucket_id = 'portfolio-videos');
