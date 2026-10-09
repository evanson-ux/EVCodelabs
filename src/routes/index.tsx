import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "@/components/brand/homepage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Growth & IT Services in Kenya | EVCodelabs" },
      {
        name: "description",
        content:
          "EVCodelabs helps businesses in Kenya and beyond grow online with website development, SEO, digital marketing, automation, AI, and custom software solutions.",
      },
      { property: "og:title", content: "Digital Growth & IT Services in Kenya | EVCodelabs" },
      {
        property: "og:description",
        content: "Practical website development, digital marketing, automation, and software solutions for businesses in Kenya and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Homepage,
});
