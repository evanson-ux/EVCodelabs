import { createFileRoute } from "@tanstack/react-router";
import { ServicesOverview, type FilterValue } from "@/components/brand/services";
import { isPillarId, type PillarId } from "@/lib/services-catalogue";
import { siteContent } from "@/lib/site-content";

const title = "Digital Services: Build, Grow, Automate, Scale | EVCodelabs";
const description =
  "Explore EVCodelabs services — websites, branding, e-commerce, SEO, automation, AI, analytics, and technical support — grouped by what your business needs next.";

export const Route = createFileRoute("/services/")({
  validateSearch: (search: Record<string, unknown>): { pillar?: PillarId } =>
    isPillarId(search["pillar"]) ? { pillar: search["pillar"] } : {},
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(siteContent.siteUrl ? [{ property: "og:url", content: `${siteContent.siteUrl}/services` }] : []),
    ],
    links: siteContent.siteUrl ? [{ rel: "canonical", href: `${siteContent.siteUrl}/services` }] : [],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { pillar } = Route.useSearch();
  const navigate = Route.useNavigate();
  const filter: FilterValue = pillar ?? "all";
  return (
    <ServicesOverview
      filter={filter}
      onFilterChange={(value) =>
        navigate({ search: value === "all" ? {} : { pillar: value }, replace: true, resetScroll: false })
      }
    />
  );
}
