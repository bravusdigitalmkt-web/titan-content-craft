
CREATE TABLE public.portfolio_videos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.portfolio_videos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.portfolio_videos TO authenticated;
GRANT ALL ON public.portfolio_videos TO service_role;

ALTER TABLE public.portfolio_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read portfolio_videos"
  ON public.portfolio_videos FOR SELECT
  USING (true);

CREATE POLICY "Public insert portfolio_videos"
  ON public.portfolio_videos FOR INSERT
  WITH CHECK (
    category IN ('Moda Feminina','Moda Masculina','Calçados','Stories','Carrosséis')
    AND char_length(title) BETWEEN 1 AND 120
    AND (description IS NULL OR char_length(description) <= 400)
    AND char_length(storage_path) BETWEEN 1 AND 400
  );

CREATE INDEX portfolio_videos_created_at_idx ON public.portfolio_videos (created_at DESC);
CREATE INDEX portfolio_videos_category_idx ON public.portfolio_videos (category);

-- Storage policies for portfolio-videos bucket (private bucket, but allow public read + public upload)
CREATE POLICY "Public read portfolio-videos objects"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'portfolio-videos');

CREATE POLICY "Public upload portfolio-videos objects"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'portfolio-videos');
