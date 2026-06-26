import { Sparkles } from "lucide-react";

const WORDS = [
  "Reels com IA",
  "Stories Animados",
  "Criativos para Ads",
  "Carrosséis",
  "Legendas Persuasivas",
  "Conteúdo Diário",
  "Entrega em 48h",
  "Moda Feminina",
  "Moda Masculina",
  "Calçados",
];

export function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-[#0a0c14] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0a0c14] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0a0c14] to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {items.map((w, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground"
          >
            <Sparkles size={14} className="text-[#3B82F6]" />
            <span>{w}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
