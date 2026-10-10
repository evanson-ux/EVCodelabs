import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "@/components/brand/homepage";
import { siteContent } from "@/lib/site-content";

const title = "Digital Growth & IT Services in Kenya | EVCodelabs";
const description =
  "EVCodelabs helps businesses in Kenya and beyond grow online with website development, SEO, digital marketing, automation, AI, and custom software solutions.";

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteContent.name,
  email: siteContent.email,
  description,
  ...(siteContent.siteUrl ? { url: siteContent.siteUrl } : {}),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content:
          "Practical website development, digital marketing, automation, and software solutions for businesses in Kenya and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(siteContent.siteUrl ? [{ property: "og:url", content: `${siteContent.siteUrl}/` }] : []),
    ],
    links: siteContent.siteUrl ? [{ rel: "canonical", href: `${siteContent.siteUrl}/` }] : [],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(organization) }],
  }),
  component: Homepage,
});
