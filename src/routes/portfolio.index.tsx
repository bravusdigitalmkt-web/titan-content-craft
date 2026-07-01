import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/site/portfolio-page";

export const Route = createFileRoute("/portfolio/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Portfólio — Titan Criativos" },
      {
        name: "description",
        content:
          "Veja Reels, Stories e Carrosséis feitos com IA pela Titan Criativos para lojas de moda reais.",
      },
      { property: "og:title", content: "Portfólio — Titan Criativos" },
      {
        property: "og:description",
        content:
          "Reels, Stories e Carrosséis feitos com IA para lojas de moda reais.",
      },
    ],
  }),
  component: () => <PortfolioPage />,
});
