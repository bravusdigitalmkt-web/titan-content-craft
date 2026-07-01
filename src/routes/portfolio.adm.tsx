import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio/adm")({
  beforeLoad: () => {
    throw redirect({ to: "/portfolio", search: { adm: "1" } as never });
  },
  component: () => null,
});
