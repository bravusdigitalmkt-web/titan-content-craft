import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/site/portfolio-page";

export const Route = createFileRoute("/portfolio/adm")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin Portfólio — Titan Criativos" },
      {
        name: "description",
        content: "Painel para publicar e gerenciar vídeos do portfólio Titan Criativos.",
      },
    ],
  }),
  component: () => <PortfolioPage forceAdmin />,
});
