import { createFileRoute } from "@tanstack/react-router";
import { FoundationPreview } from "@/components/brand/foundation-preview";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Design Foundation Preview | EVCodelabs" },
      { name: "description", content: "Review the EVCodelabs brand typography, color palette, and shared design foundation." },
      { property: "og:title", content: "Design Foundation Preview | EVCodelabs" },
      { property: "og:description", content: "EVCodelabs brand typography, color palette, and shared design foundation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FoundationPreview,
});
