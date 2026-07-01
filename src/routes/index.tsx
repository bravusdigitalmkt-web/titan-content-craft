import { createFileRoute } from "@tanstack/react-router";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/site/navbar";
import { BackgroundOrbs } from "@/components/site/orbs";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/reveal";
import { Counter } from "@/components/site/counter";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { Marquee } from "@/components/site/marquee";
import titanLogo from "@/assets/titan-logo.png.asset.json";


import {
  ArrowRight,
  Sparkles,
  Upload,
  Rocket,
  Clock,
  Users,
  Lightbulb,
  Camera,
  PenTool,
  TrendingDown,
  Check,
  CalendarClock,
  Cpu,
  UserX,
  Palette,
  RefreshCcw,
  MessageCircle,
  Instagram,
  Video,
  Megaphone,
  Image as ImageIcon,
  LayoutGrid,
  Type,
  PenLine,
  Target,
  CalendarRange,
  Play,
  Star,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agência de Vídeos para Moda | Reels com IA | Titan Criativos" },
      {
        name: "description",
        content:
          "Sua loja vende mais com Reels profissionais. +40% alcance em 30 dias. 48h entrega. Teste grátis.",
      },
      { name: "keywords", content: "agência de vídeos para moda, reels com IA, conteúdo para loja de moda, vídeos para Instagram, marketing de moda, reels profissionais" },
      { property: "og:title", content: "Agência de Vídeos para Moda | Reels com IA | Titan Criativos" },
      {
        property: "og:description",
        content:
          "Sua loja vende mais com Reels profissionais. +40% alcance em 30 dias. 48h entrega. Teste grátis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://titan-content-craft.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Agência de Vídeos para Moda | Reels com IA | Titan Criativos" },
      { name: "twitter:description", content: "Sua loja vende mais com Reels profissionais. +40% alcance em 30 dias. 48h entrega. Teste grátis." },
    ],
    links: [{ rel: "canonical", href: "https://titan-content-craft.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Titan Criativos",
          url: "https://titan-content-craft.lovable.app/",
          description: "Agência de vídeos para moda com IA. Reels profissionais para lojas de moda em 48h.",
          sameAs: ["https://instagram.com/titan.criativos"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+55-61-98239-4985",
            contactType: "sales",
            email: "contato@titancriativos.com",
            areaServed: "BR",
            availableLanguage: ["Portuguese"],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Fica óbvio que é IA?", acceptedAnswer: { "@type": "Answer", text: "Não. Usamos IA para criar movimento, som e efeitos profissionais. O resultado é indistinguível de um vídeo feito por editor caro." } },
            { "@type": "Question", name: "Quanto tempo leva a entrega?", acceptedAnswer: { "@type": "Answer", text: "48-72 horas em dias úteis. Você manda na sexta, recebe na segunda." } },
            { "@type": "Question", name: "Tem fidelidade ou contrato?", acceptedAnswer: { "@type": "Answer", text: "Zero contrato. Zero fidelidade. Cancele quando quiser, sem taxa." } },
            { "@type": "Question", name: "Funciona para qual tipo de loja?", acceptedAnswer: { "@type": "Answer", text: "Moda feminina, masculina, calçados e acessórios — qualquer loja que vende por imagem no Instagram." } },
          ],
        }),
      },
    ],
  }),
  component: Page,
});

const WHATSAPP_NUMBER = "5561982394985";
const wa = (msg: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const WHATSAPP = wa("Olá! Vim pelo site da Titan Criativos e quero saber mais sobre os Reels feitos por IA pra minha loja.");
const WA_DEMO = wa("Olá Titan! Quero meu vídeo demo GRÁTIS. Vou mandar uma foto do meu produto pra vocês criarem o Reel.");
const WA_EXEMPLO = wa("Oi! Vim pelo site e quero ver um exemplo de Reel em 60s pra minha loja de moda.");
const WA_TESTE = wa("Olá! Quero começar o teste grátis dos Reels com IA da Titan Criativos.");
const WA_PORTFOLIO = wa("Oi! Quero ver o portfólio completo e depoimentos de outras lojas de moda que usam a Titan.");
const WA_CALL = wa("Olá! Quero agendar uma call de 15 min pra entender como a Titan pode ajudar minha loja.");
const WA_PLANO = (plano: string) => wa(`Olá Titan! Tenho interesse no plano ${plano}. Pode me passar mais detalhes e como começar?`);
const INSTAGRAM = "https://instagram.com/titan.criativos";
const EMAIL = "contato@titancriativos.com";

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <TrustBar />
      <SocialProof />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Portfolio />

      <Services />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------------- SOCIAL PROOF (client strip) ---------------- */
function SocialProof() {
  const stores = [
    "LUME ATELIÊ",
    "NOIR STUDIO",
    "AURORA MODA",
    "CASA MARÉ",
    "VERONA CO.",
    "ZAHRA BOUTIQUE",
    "OFICINA 34",
    "LINHA FINA",
  ];
  return (
    <section aria-label="Lojas que confiam na Titan" className="relative border-b border-white/[0.06] bg-[#0a0c14]/60">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
          Lojas que já trocaram freelancer pela Titan
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4 lg:grid-cols-8">
          {stores.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 0.75, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ opacity: 1, scale: 1.04 }}
              className="text-center font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-28 sm:pt-44 sm:pb-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="aurora-bg" aria-hidden />
      <div className="aurora-bg-2" aria-hidden />
      <BackgroundOrbs />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
          </span>
          Tecnologia + Inteligência Artificial
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-7 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Agência de Vídeos para Moda com{" "}
          <span className="text-gradient-brand-animated">Reels feitos por IA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Sua loja vende mais com Reels profissionais — 48h de entrega, sem fotógrafo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <motion.a
            href={WA_EXEMPLO}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="shimmer-hover animate-pulse-glow group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white"
          >
            Ver exemplo em 60s
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </motion.a>
          <a
            href={WA_TESTE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.06]"
          >
            <Play size={14} /> Começar teste grátis
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-8 flex flex-col items-center justify-center gap-2"
        >
          <div className="inline-flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.7 + i * 0.08, type: "spring", stiffness: 260, damping: 14 }}
              >
                <Star size={18} className="fill-[#FACC15] text-[#FACC15] drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </motion.span>
            ))}
            <span className="ml-2 text-sm font-semibold text-white">4.9</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Lojistas que trocaram freelancer por Titan
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
        >
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Sem fidelidade</span>
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Conteúdo personalizado</span>
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Entrega recorrente</span>
        </motion.p>

      </div>
    </section>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const stats = [
    { value: 1240, suffix: "+", label: "Vídeos criados" },
    { value: 42, suffix: "", label: "Lojas crescendo" },
    { value: 98, suffix: "%", label: "Satisfação" },
    { value: 48, suffix: "h", label: "Entrega" },
  ];
  return (
    <section className="relative border-y border-white/[0.08] bg-[#0b0d14]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/[0.08] px-6 py-10 sm:grid-cols-4 sm:divide-x">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="px-2 text-center">
            <div className="font-display text-3xl font-bold text-white sm:text-4xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PROBLEM ---------------- */
function Problem() {
  const pains = [
    {
      icon: TrendingDown,
      title: "Instagram parado = Loja invisível",
      desc: "Algoritmo só premia consistência. Lojas que postam 5+ vezes por semana aparecem 8x mais.",
    },
    {
      icon: Users,
      title: "Freelancer caro = Resultado fraco",
      desc: "R$ 5-8k/mês em fotógrafo, designer, editor. E mesmo assim não acompanha sua velocidade.",
    },
    {
      icon: Camera,
      title: "Enquanto você dorme, concorrente vende",
      desc: "Seu estoque não é pior. Suas fotos é que não aparecem. Aí seu cliente compra no Insta da outra.",
    },
    {
      icon: Clock,
      title: "Produção de conteúdo = Tempo que não tá vendendo",
      desc: "4+ horas por dia nisso. A Titan faz tudo em 48h. Você fica focado em vender.",
    },
  ];
  return (
    <section id="problema" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Por Que Sua Loja Não Cresce No <span className="text-gradient-brand">Instagram Como Deveria</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Instagram parado = loja invisível. Enquanto você posta 2x por semana, sua concorrente publica todo dia — e vende mais.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <RevealItem key={p.title}>
              <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#3B82F6] transition-colors group-hover:text-white group-hover:border-[#2563EB]/40">
                  <p.icon size={20} />
                </div>
                <div className="mt-5 font-display text-lg font-semibold text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-lg text-muted-foreground sm:text-xl">
            A maioria das lojas que chegam aqui tiveram uma epifania:{" "}
            <span className="text-white">Instagram parado mata loja. Vamos resolver isso.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Manda a foto pelo WhatsApp",
      desc: "Qualquer foto. Sua câmera, seu celular, seu estoque. Não precisa ser profissional. A gente cuida do resto.",
      tag: "HOJE · 5 min do seu tempo",
    },
    {
      icon: Sparkles,
      title: "Você recebe 1 vídeo profissional pronto pra vender",
      desc: "Reel com IA. Som. Efeitos. Legendas. Tudo otimizado pro algoritmo. Não fica óbvio que é IA. Fica óbvio que é profissional.",
      tag: "48H DEPOIS · 0 min do seu tempo",
    },
    {
      icon: Rocket,
      title: "Publica e vende mais",
      desc: "Clica em publicar. Seu alcance cresce. Suas vendas crescem. Consistência = crescimento.",
      tag: "SEGUNDA · 2 min do seu tempo",
    },
  ];
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-[#2563EB]/5 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Como Funciona</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Como você passa de 3 posts/semana para <span className="text-gradient-brand">5+ em 2 semanas</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            De 3 posts/semana com lacunas → 5+ posts/semana sem stress. Sem contratação. Sem freelancer folgado.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.12}>
            {steps.map((s, i) => (
              <RevealItem key={s.title}>
                <div className="relative h-full rounded-2xl border border-white/[0.08] bg-[#111827] p-7">
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand text-white glow-brand">
                      <s.icon size={20} />
                    </div>
                    <div className="font-display text-5xl font-bold text-white/5">0{i + 1}</div>
                  </div>
                  <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3B82F6]">{s.tag}</div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={WA_DEMO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white glow-brand transition-transform hover:scale-[1.03]"
          >
            Quero meu vídeo demo grátis <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS (Bento) ---------------- */
function Benefits() {
  const items = [
    {
      icon: CalendarClock,
      title: "De 3 posts/semana para 5+ (sem ficar louco)",
      desc: "Algoritmo te recompensa. Você aparece mais. Vende mais.",
      tag: "+40% de alcance em 30 dias",
      span: "md:col-span-2 md:row-span-2",
      featured: true,
    },
    { icon: Cpu, title: "48 horas vs. 1 semana de freelancer", desc: "Tendência morre em 3 dias. Você vira ágil.", tag: "10x mais rápido" },
    { icon: UserX, title: "Economiza R$ 4-5k/mês em freelancer", desc: "Grana que ia pro designer volta pro marketing.", tag: "R$ 697 vs R$ 5-8k" },
    { icon: Palette, title: "IA que cria como profissional (porque é)", desc: "Não parece IA. Parece que você tem equipe grande.", tag: "4.9/5 em avaliações" },
    { icon: RefreshCcw, title: "Novo vídeo todo mês. Nunca mais fica vazio.", desc: "Zero risco de ficar com Instagram vazio.", tag: "48+ vídeos por ano" },
    { icon: MessageCircle, title: "Resposta em menos de 1 hora", desc: "Não é ticket. É conversa com quem cria mesmo.", tag: "<1h de resposta" },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Por que a Titan?</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Não vendemos vídeos.{" "}
            <span className="text-gradient-brand">Vendemos crescimento que você vê na conta.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Aqui tá o que te impede de crescer — e como a gente resolve.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[200px]">
          {items.map((it) => (
            <RevealItem key={it.title} className={it.span ?? ""}>
              <div
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 ${
                  it.featured
                    ? "bg-[#0e1424] [background-image:radial-gradient(circle_at_top_right,rgba(37,99,235,0.25),transparent_60%)]"
                    : "bg-[#111827]"
                }`}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#3B82F6] transition-colors group-hover:text-white">
                  <it.icon size={20} />
                </div>
                <h3 className="mt-auto font-display text-lg font-semibold text-white">
                  {it.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                <div className="mt-3 inline-flex w-fit items-center rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#3B82F6]">
                  {it.tag}
                </div>
                {it.featured && (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563EB]/30 blur-3xl" />
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Tudo isso por menos do que você gasta em 1 freelancer chato.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
import fashion1 from "@/assets/fashion-1.jpg";
import fashion2 from "@/assets/fashion-2.jpg";
import fashion3 from "@/assets/fashion-3.jpg";
import fashion4 from "@/assets/fashion-4.jpg";
import fashion5 from "@/assets/fashion-5.jpg";
import fashion6 from "@/assets/fashion-6.jpg";
import fashion7 from "@/assets/fashion-7.jpg";
import fashion8 from "@/assets/fashion-8.jpg";

function Portfolio() {
  const items = [
    { label: "Reels", icon: Video, src: fashion1, h: "h-80", alt: "Reels de moda feminina criado com IA pela Titan Criativos para loja de roupas" },
    { label: "Carrossel", icon: LayoutGrid, src: fashion2, h: "h-64", alt: "Carrossel de produto de moda em ambiente boutique editado profissionalmente" },
    { label: "Stories", icon: ImageIcon, src: fashion3, h: "h-72", alt: "Story de Instagram com modelo em provador de loja de moda feminina" },
    { label: "Criativo", icon: Megaphone, src: fashion4, h: "h-64", alt: "Criativo de anúncio para loja de moda com tratamento de imagem por IA" },
    { label: "Reels", icon: Video, src: fashion5, h: "h-64", alt: "Reel de lançamento de coleção em boutique de moda feminina" },
    { label: "Carrossel", icon: LayoutGrid, src: fashion6, h: "h-80", alt: "Carrossel editorial de moda feminina com múltiplos ângulos do produto" },
    { label: "Stories", icon: ImageIcon, src: fashion7, h: "h-60", alt: "Story promocional de loja de moda com modelo em ambiente de boutique" },
    { label: "Criativo", icon: Megaphone, src: fashion8, h: "h-72", alt: "Criativo de Instagram Ads para e-commerce de moda com IA generativa" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Nosso Trabalho</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Aqui tá <span className="text-gradient-brand">criado no último mês</span> por clientes da Titan
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Esses vídeos geraram de 500 a 2000 visualizações cada um. Vendas diretas rastreadas.
          </p>
        </Reveal>

        <RevealGroup
          className="mt-14 columns-2 gap-4 md:columns-4 [&>*]:mb-4"
          stagger={0.05}
        >
          {items.map((it, i) => (
            <RevealItem key={i} className="break-inside-avoid">
              <div
                className={`group relative ${it.h} overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111827] transition-transform duration-500 hover:-translate-y-1`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  loading="lazy"
                  width={704}
                  height={1216}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                  <it.icon size={11} /> {it.label}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <p className="text-muted-foreground">Quer saber quanto vendeu com esses? Fale com a gente.</p>
          <a
            href={WA_PORTFOLIO}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.06]"
          >
            Ver portfólio completo + depoimentos <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}


/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Video, title: "Reel (o formato que mais vende)", desc: "Vídeo 15-30s, som otimizado, editing profissional. Algoritmo adora. Seu público compra.", freq: "4-5 por semana (plano TITAN)" },
    { icon: LayoutGrid, title: "Carrossel (alto tempo de tela)", desc: "5-7 slides do mesmo produto em ângulos diferentes. Pessoas scrollam. Veem bem. Compartilham.", freq: "2-3 por semana (plano TITAN)" },
    { icon: ImageIcon, title: "Stories (mantém quem já segue)", desc: "1-2 stories por dia com promoção, curiosidade ou urgência. Conversa com quem já tá no funnel.", freq: "Diariamente (automático)" },
    { icon: PenLine, title: "Legendas que vendem (a venda acontece no texto)", desc: "Não é descrição. É estímulo psicológico. CTA clara. Urgência. Desejo. Tudo pronto.", freq: "Em cada publicação (automático)" },
  ];
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Você precisa de 4 coisas no Instagram. <span className="text-gradient-brand">A gente faz as 4.</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-2">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <div className="group h-full bg-[#0c1018] p-7 transition-colors hover:bg-[#111827]">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.04] text-[#3B82F6] transition-colors group-hover:text-white">
                  <s.icon size={18} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#3B82F6]">
                  <CalendarRange size={11} /> {s.freq}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Esses 4 pilares = loja que vende. Loja sem nenhum = Instagram vazio e vendas fracas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const plans = [
    {
      name: "START",
      price: "R$ 497",
      tagline: "Pra quem quer testar se funciona (e funciona).",
      features: [
        "8 vídeos/mês (2 por semana)",
        "Conteúdo personalizado",
        "Suporte via WhatsApp",
        "Sem contrato",
      ],
      ideal: "Lojas que vendem R$ 20-50k/mês",
      cta: "Começar com START",
      featured: false,
    },
    {
      name: "TITAN",
      price: "R$ 697",
      tagline: "O equilíbrio. Consistência + crescimento. (A maioria escolhe essa.)",
      features: [
        "12 vídeos/mês (3+ por semana)",
        "Conteúdo personalizado",
        "Prioridade na entrega (48-72h)",
        "Suporte via WhatsApp",
        "1 call mensal de estratégia",
      ],
      ideal: "Lojas que vendem R$ 50-150k/mês",
      cta: "Começar com TITAN",
      featured: true,
    },
    {
      name: "SCALE",
      price: "R$ 997",
      tagline: "Pra loja que quer ficar famosa no feed.",
      features: [
        "20 vídeos/mês (5+ por semana)",
        "Conteúdo estratégico (direcionado pro objetivo)",
        "Prioridade máxima (entrega 48h)",
        "1 call mensal de estratégia",
        "Suporte via WhatsApp + email",
      ],
      ideal: "Lojas que vendem R$ 150k+/mês",
      cta: "Começar com SCALE",
      featured: false,
    },
  ];
  return (
    <section id="planos" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 -z-10 mx-auto h-96 max-w-3xl bg-[#2563EB]/10 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Planos</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Escolha quanto você quer crescer. <span className="text-gradient-brand">Sem fidelidade. Sem risco.</span>
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
          {plans.map((p) => (
            <RevealItem key={p.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`relative h-full rounded-3xl p-px ${
                  p.featured
                    ? "bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#7C3AED] animate-float-y"
                    : "bg-white/[0.08]"
                }`}
              >
                <div
                  className={`relative flex h-full flex-col rounded-[calc(theme(borderRadius.3xl)-1px)] p-8 ${
                    p.featured
                      ? "bg-[#0e1424] shadow-[0_30px_80px_-20px_rgba(37,99,235,0.55)]"
                      : "bg-[#111827]"
                  }`}
                >
                  {p.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                      Mais escolhida
                    </div>
                  )}

                  <div className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {p.name}
                  </div>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-display text-5xl font-bold text-white">{p.price}</span>
                    <span className="text-sm text-muted-foreground">/mês</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>

                  <ul className="mt-8 space-y-3.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-white/90">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#22C55E]/15 text-[#22C55E]">
                          <Check size={12} />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11px] text-muted-foreground">
                    <span className="font-semibold text-white/80">Ideal para:</span> {p.ideal}
                  </div>

                  <a
                    href={WA_PLANO(p.name)}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      p.featured
                        ? "bg-gradient-brand text-white glow-brand"
                        : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07]"
                    }`}
                  >
                    {p.cta} <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Sem fidelidade. Cancela quando quiser.</span>
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Teste 1 mês. Se não gostar, cancela. (Ninguém cancela.)</span>
          <span className="inline-flex items-center gap-1.5"><Check size={14} className="text-[#22C55E]" /> Resposta em menos de 1 hora.</span>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Fica óbvio que é IA?",
      a: "NÃO. A gente usa IA pra criar movimento, som e efeitos profissionais. Resultado é indistinguível de um vídeo feito por editor caro. Quer prova? Mostra 3 vídeos nossos pra amigos. A maioria erra.",
    },
    {
      q: "Quanto tempo leva entre eu mandar foto e receber?",
      a: "48-72 horas em dias úteis. Você manda sexta, recebe segunda. Freelancer caro tira 1 semana. A gente tira 2 dias.",
    },
    {
      q: "Posso pedir alterações infinitas?",
      a: "Até 2 ajustes pequenos por vídeo: mudança de cor, som, velocidade. Mudanças drásticas contam como novo vídeo. Por quê? Porque a gente quer entregar rápido, não ficar nessa trocação.",
    },
    {
      q: "Tem fidelidade ou contrato?",
      a: "Zero contrato. Zero fidelidade. Você cancela quando quiser. Sem aviso. Sem taxa. (A real: ninguém cancela depois do mês 1. Quando vê resultado, vira cliente pro resto da vida.)",
    },
    {
      q: "Vocês fazem gestão de Instagram inteira?",
      a: "Não. A gente cria o conteúdo. Você publica no horário certo (a gente dá recomendação). Porque você conhece seu público melhor que ninguém. Gestão de Instagram é outra coisa (ads, DM, etc).",
    },
    {
      q: "Se eu não gostar, consigo devolver?",
      a: "Teste 1 mês. Se não vender mais no mês 1, a gente refaz a estratégia no mês 2 de graça. Se mesmo assim não gostar, cancela. (Mas raramente perdemos por qualidade. Perdemos porque loja fechou — cresceu demais.)",
    },
    {
      q: "Funciona pra qual tipo de loja?",
      a: "Moda feminina, masculina, calçados, acessórios. Qualquer coisa que se venda por imagem. NÃO funciona bem pra: eletrônicos complexos, B2B. A Titan é pra loja que vende por feed. Seu caso?",
    },
    {
      q: "Qual o valor mínimo por mês pra ficar interessante?",
      a: "Comece com START (R$ 497) e testa 1 mês. Se vender 10-15 camisetas extras com os vídeos (lucro = R$ 300-500), já tá pagando. Na maioria das vezes, cliente sobe pra TITAN no mês 2.",
    },
  ];
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Dúvidas? <span className="text-gradient-brand">A gente responde.</span>
          </h2>
        </Reveal>

        <Reveal className="mt-14">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#111827] px-5 data-[state=open]:border-[#2563EB]/30"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-semibold text-white hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#0c1226] to-transparent" />
      <BackgroundOrbs />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Parou de ler. <span className="text-gradient-brand">Quer testar?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            A gente entende. Você quer ver funcionando na sua loja. Manda WhatsApp. Manda uma foto de um produto seu. A gente cria 1 vídeo de demo <span className="text-white font-semibold">GRÁTIS</span> pra você. Publica. Vê se vende. Depois decide.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={WA_DEMO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-white glow-brand transition-transform hover:scale-[1.03]"
            >
              <MessageCircle size={18} /> Mandar foto pelo WhatsApp
            </a>
            <a
              href={WA_CALL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.02] px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.06]"
            >
              Agendar call de 15 min
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Resposta em menos de 1 hora. De verdade.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="font-display text-lg font-bold text-white">Titan Criativos</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Tecnologia em conteúdo para moda.
          </p>
          <div className="mt-4 space-y-1 text-sm text-muted-foreground">
            <a href={`mailto:${EMAIL}`} className="block hover:text-white">{EMAIL}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="block hover:text-white">WhatsApp: +55 61 98239-4985</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="block hover:text-white">@titan.criativos</a>
          </div>
        </div>

        <nav className="flex flex-wrap items-start gap-x-8 gap-y-3 text-sm text-muted-foreground md:justify-center">
          <a href="#como-funciona" className="hover:text-white">Como Funciona</a>
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#planos" className="hover:text-white">Planos</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>

        <div className="flex items-start gap-3 md:justify-end">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white transition-colors hover:bg-white/[0.06]"
          >
            <Instagram size={16} />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.02] text-white transition-colors hover:bg-white/[0.06]"
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-muted-foreground">
          © 2025 Titan Criativos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-1 w-1 rounded-full bg-[#3B82F6]" />
      {children}
    </div>
  );
}
