import { createFileRoute, notFound } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/brand/services";
import { getService, pillars } from "@/lib/services-catalogue";
import { siteContent } from "@/lib/site-content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ params, loaderData }) => {
    const service = loaderData ? getService(loaderData.slug) : undefined;
    if (!service) return { meta: [
      { title: "Service unavailable | EVCodelabs" },
      { name: "description", content: "Explore EVCodelabs digital services to find a solution for your business." },
      { property: "og:title", content: "Service unavailable | EVCodelabs" },
      { property: "og:description", content: "Explore EVCodelabs digital services to find a solution for your business." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ] };
    const url = siteContent.siteUrl ? `${siteContent.siteUrl}/services/${params.slug}` : undefined;
    return {
      meta: [
        { title: service.seoTitle },
        { name: "description", content: service.seoDescription },
        { property: "og:title", content: service.seoTitle },
        { property: "og:description", content: service.seoDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(url ? [{ property: "og:url", content: url }] : []),
      ],
      links: url ? [{ rel: "canonical", href: url }] : [],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: service.name,
                serviceType: service.name,
                category: pillars[service.pillar].label,
                description: service.seoDescription,
                provider: { "@type": "Organization", name: siteContent.name, ...(siteContent.siteUrl ? { url: siteContent.siteUrl } : {}) },
                ...(url ? { url } : {}),
              },
              ...(siteContent.siteUrl
                ? [
                    {
                      "@type": "BreadcrumbList",
                      itemListElement: [
                        { "@type": "ListItem", position: 1, name: "Home", item: `${siteContent.siteUrl}/` },
                        { "@type": "ListItem", position: 2, name: "Services", item: `${siteContent.siteUrl}/services` },
                        { "@type": "ListItem", position: 3, name: service.name, item: url },
                      ],
                    },
                  ]
                : []),
            ],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const service = getService(slug);
  if (!service) return null;
  return <ServiceDetail service={service} />;
}
