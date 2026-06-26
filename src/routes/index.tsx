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
  Star,
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
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Titan Criativos — Conteúdo com IA para lojas de moda" },
      {
        name: "description",
        content:
          "Transforme fotos dos seus produtos em conteúdo pronto para o Instagram. Reels, criativos, stories e carrosséis com Inteligência Artificial.",
      },
      { property: "og:title", content: "Titan Criativos — Conteúdo com IA para lojas de moda" },
      {
        property: "og:description",
        content:
          "Você envia as fotos. Nós criamos o conteúdo com IA. Sua loja vende mais.",
      },
    ],
  }),
  component: Page,
});

const WHATSAPP = "https://wa.me/5561982394985";
const INSTAGRAM = "https://instagram.com/titan.criativos";
const EMAIL = "contato@titancriativos.com";

function Page() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBar />
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

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 grid-bg" />
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
          Transformamos fotos dos seus produtos em{" "}
          <span className="text-gradient-brand">conteúdo que vende.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Você envia as fotos. Nós criamos o conteúdo. Sua loja vende mais.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white glow-brand transition-transform hover:scale-[1.03]"
          >
            Quero começar
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.06]"
          >
            <Play size={14} /> Ver como funciona
          </a>
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

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="relative mx-auto mt-16 w-full max-w-xs"
        >
          <div className="absolute -inset-10 -z-10 rounded-full bg-[#2563EB]/20 blur-3xl" />
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto aspect-[9/19] w-64 rounded-[2.5rem] border border-white/10 bg-[#0c0c10] p-2 shadow-[0_30px_80px_-20px_rgba(37,99,235,0.45)]">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#09090B]">
        <div className="flex items-center justify-between px-4 pt-6 text-[10px] text-white/80">
          <span>9:41</span>
          <span className="font-semibold">Instagram</span>
          <span>●●●</span>
        </div>
        <div className="mt-3 px-3">
          <div className="flex items-center gap-2 pb-2">
            <div className="h-7 w-7 rounded-full bg-gradient-brand" />
            <div className="text-[10px] font-semibold text-white">sua_loja</div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#111827]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/40 via-[#7C3AED]/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="text-[10px] uppercase tracking-widest text-white/70">Novo Drop</div>
              <div className="font-display text-base font-bold leading-tight text-white">
                Coleção
                <br />
                Verão 25
              </div>
            </div>
            <div className="absolute right-3 top-3 rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur">
              Reels
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3 text-white">
            <Star size={14} />
            <MessageCircle size={14} />
            <Instagram size={14} />
          </div>
          <div className="mt-2 text-[10px] text-white/70">
            <span className="font-semibold text-white">+1.247</span> visualizações
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TRUST BAR ---------------- */
function TrustBar() {
  const stats = [
    { value: 500, suffix: "+", label: "Vídeos criados" },
    { value: 50, suffix: "+", label: "Lojas atendidas" },
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
    { icon: Clock, title: "Falta de tempo" },
    { icon: Users, title: "Sem equipe de criação" },
    { icon: Lightbulb, title: "Falta de criatividade" },
    { icon: Camera, title: "Sem fotógrafo" },
    { icon: PenTool, title: "Sem designer" },
    { icon: TrendingDown, title: "Instagram parado" },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>O problema</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Sua loja está postando <span className="text-gradient-brand">todos os dias</span>?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            A maioria das lojas de moda não consegue produzir conteúdo diariamente.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <RevealItem key={p.title}>
              <div className="group relative h-full rounded-2xl border border-white/[0.08] bg-[#111827] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_20px_60px_-20px_rgba(37,99,235,0.35)]">
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#3B82F6] transition-colors group-hover:text-white group-hover:border-[#2563EB]/40">
                  <p.icon size={20} />
                </div>
                <div className="mt-5 font-display text-lg font-semibold text-white">{p.title}</div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <p className="font-display text-lg text-muted-foreground sm:text-xl">
            Resultado?{" "}
            <span className="text-white">Baixo alcance. Poucas vendas. Oportunidades perdidas.</span>
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
      title: "Envie as fotos",
      desc: "Tire fotos dos seus produtos e envie pelo WhatsApp.",
    },
    {
      icon: Sparkles,
      title: "A Titan cria",
      desc: "Nossa equipe + IA transforma em vídeos, criativos e legendas.",
    },
    {
      icon: Rocket,
      title: "Publique e venda",
      desc: "Receba o conteúdo pronto. Publique. Venda mais.",
    },
  ];
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-[#2563EB]/5 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Como Funciona</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Simples assim.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Três passos para transformar seus produtos em conteúdo profissional.
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
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-white glow-brand transition-transform hover:scale-[1.03]"
          >
            Quero começar agora <ArrowRight size={16} />
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
      title: "Conteúdo todos os dias",
      desc: "Consistência que gera resultado.",
      span: "md:col-span-2 md:row-span-2",
      featured: true,
    },
    { icon: Cpu, title: "Feito com Inteligência Artificial", desc: "Velocidade e qualidade sem igual." },
    { icon: UserX, title: "Sem contratar equipe", desc: "Sem fotógrafo. Sem designer. Sem editor." },
    { icon: Palette, title: "Personalizado para sua loja", desc: "Cada conteúdo é único para sua marca." },
    { icon: RefreshCcw, title: "Entrega recorrente", desc: "Você nunca mais fica sem conteúdo." },
    { icon: MessageCircle, title: "Suporte via WhatsApp", desc: "Atendimento rápido e direto." },
  ];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Por que a Titan?</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Não vendemos vídeos.{" "}
            <span className="text-gradient-brand">Vendemos crescimento.</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Enquanto você vende, a Titan cria.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[180px]">
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
                {it.featured && (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#2563EB]/30 blur-3xl" />
                )}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
function Portfolio() {
  const items = [
    { label: "Reels", icon: Video, h: "h-72" },
    { label: "Carrossel", icon: LayoutGrid, h: "h-56" },
    { label: "Stories", icon: ImageIcon, h: "h-64" },
    { label: "Criativo", icon: Megaphone, h: "h-60" },
    { label: "Reels", icon: Video, h: "h-56" },
    { label: "Carrossel", icon: LayoutGrid, h: "h-72" },
    { label: "Stories", icon: ImageIcon, h: "h-52" },
    { label: "Criativo", icon: Megaphone, h: "h-64" },
  ];
  const gradients = [
    "from-[#2563EB]/40 via-[#7C3AED]/30 to-transparent",
    "from-[#3B82F6]/40 via-[#2563EB]/20 to-transparent",
    "from-[#7C3AED]/40 via-[#2563EB]/20 to-transparent",
    "from-[#22C55E]/30 via-[#3B82F6]/30 to-transparent",
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Nosso Trabalho</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Veja o que a Titan cria.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Conteúdo real criado para lojas de moda.
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
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${gradients[i % gradients.length]}`}
                />
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur">
                  <it.icon size={11} /> {it.label}
                </div>
                <div className="absolute inset-0 grid place-items-center text-white/20 transition-colors group-hover:text-white/40">
                  <it.icon size={40} />
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 text-center">
          <p className="text-muted-foreground">Quer ver mais? Fale com a gente.</p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/[0.06]"
          >
            Ver portfólio completo <ArrowRight size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    { icon: Video, title: "Vídeos para Instagram (Reels)", desc: "Vídeos curtos editados para alta retenção." },
    { icon: Megaphone, title: "Criativos Publicitários", desc: "Peças prontas para tráfego pago." },
    { icon: ImageIcon, title: "Stories Animados", desc: "Stories dinâmicos para engajar o público." },
    { icon: LayoutGrid, title: "Carrosséis", desc: "Conteúdo de alto tempo de tela no feed." },
    { icon: Type, title: "Legendas Prontas", desc: "Texto otimizado para cada publicação." },
    { icon: PenLine, title: "Copy Persuasiva", desc: "Frases que despertam desejo de compra." },
    { icon: Target, title: "Conteúdo Estratégico", desc: "Direcionado para o seu objetivo de venda." },
    { icon: CalendarRange, title: "Conteúdo Recorrente Mensal", desc: "Você recebe conteúdo todo mês, sempre." },
  ];
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Tudo que sua loja precisa para o Instagram.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <RevealItem key={s.title}>
              <div className="group h-full bg-[#0c1018] p-6 transition-colors hover:bg-[#111827]">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/[0.04] text-[#3B82F6] transition-colors group-hover:text-white">
                  <s.icon size={18} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
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
      tagline: "Para começar com consistência.",
      features: [
        "8 vídeos por mês",
        "Conteúdo personalizado",
        "Entrega recorrente",
        "Suporte via WhatsApp",
      ],
      featured: false,
    },
    {
      name: "TITAN",
      price: "R$ 697",
      tagline: "O equilíbrio perfeito para escalar.",
      features: [
        "12 vídeos por mês",
        "Conteúdo personalizado",
        "Entrega recorrente",
        "Suporte via WhatsApp",
        "Prioridade na entrega",
      ],
      featured: true,
    },
    {
      name: "SCALE",
      price: "R$ 997",
      tagline: "Para lojas que querem dominar.",
      features: [
        "20 vídeos por mês",
        "Conteúdo personalizado",
        "Entrega recorrente",
        "Suporte via WhatsApp",
        "Prioridade na entrega",
        "Conteúdo estratégico",
      ],
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
            Escolha o plano ideal para sua loja.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Sem fidelidade. Cancele quando quiser.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.1}>
          {plans.map((p) => (
            <RevealItem key={p.name}>
              <div
                className={`relative h-full rounded-3xl p-px ${
                  p.featured
                    ? "bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#7C3AED]"
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
                      Mais popular
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

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      p.featured
                        ? "bg-gradient-brand text-white glow-brand"
                        : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.07]"
                    }`}
                  >
                    Começar agora <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-10 text-center text-xs text-muted-foreground">
          Todos os planos incluem: Sem fidelidade · Conteúdo personalizado · Suporte via WhatsApp
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Como funciona o processo?",
      a: "Você envia as fotos dos produtos pelo WhatsApp. Nossa equipe cria o conteúdo usando IA e entrega pronto para publicar.",
    },
    {
      q: "Preciso ter um fotógrafo?",
      a: "Não. Basta tirar fotos simples dos seus produtos com o celular. Nós cuidamos de todo o resto.",
    },
    {
      q: "Quanto tempo leva a entrega?",
      a: "O conteúdo é entregue em até 48 horas após o envio das fotos.",
    },
    {
      q: "Tem fidelidade ou contrato?",
      a: "Não. Nossos planos são mensais e você pode cancelar quando quiser.",
    },
    {
      q: "Vocês fazem gestão de Instagram?",
      a: "Não. A Titan é focada exclusivamente em produção de conteúdo. Nós criamos, você publica.",
    },
    {
      q: "Posso pedir alterações?",
      a: "Sim. Você pode solicitar ajustes no conteúdo entregue sem custo adicional.",
    },
    {
      q: "Para quais nichos vocês atendem?",
      a: "Atendemos lojas de moda feminina, moda masculina, calçados, bolsas e acessórios.",
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
          <Accordion type="single" collapsible className="space-y-3">
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
            Pronto para transformar o{" "}
            <span className="text-gradient-brand">Instagram</span> da sua loja?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Envie as fotos. Receba o conteúdo. Venda mais.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-gradient-brand px-7 py-4 text-base font-semibold text-white glow-brand transition-transform hover:scale-[1.03]"
          >
            <MessageCircle size={18} /> Falar com a Titan pelo WhatsApp
          </a>
          <p className="mt-4 text-xs text-muted-foreground">Resposta em menos de 1 hora</p>
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
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand">
              <span className="font-display text-sm font-bold text-white">T</span>
            </span>
            <span className="font-display text-base font-bold text-white">Titan Criativos</span>
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
