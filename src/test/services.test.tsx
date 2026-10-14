import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import {
  getService,
  services,
  servicesByPillar,
  serviceEmailHref,
  serviceWhatsappHref,
} from "@/lib/services-catalogue";

describe("service catalogue", () => {
  it("has 13 services split 4/3/3/3 with unique slugs and SEO copy", () => {
    expect(services).toHaveLength(13);
    expect(servicesByPillar("build")).toHaveLength(4);
    expect(servicesByPillar("grow")).toHaveLength(3);
    expect(servicesByPillar("automate")).toHaveLength(3);
    expect(servicesByPillar("scale")).toHaveLength(3);
    for (const key of ["slug", "seoTitle", "seoDescription", "heroTitle", "intro"] as const) {
      expect(new Set(services.map((s) => s[key])).size).toBe(13);
    }
  });

  it("links related services only to existing services", () => {
    for (const s of services) {
      expect(s.related.length).toBeGreaterThan(0);
      for (const slug of s.related) expect(getService(slug), `${s.slug}→${slug}`).toBeDefined();
    }
  });

  it("matches every service route and lists them in the sitemap", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    expect(router.matchRoutes("/services").at(-1)?.routeId).toBe("/services/");
    for (const s of services) {
      expect(router.matchRoutes(`/services/${s.slug}`).at(-1)?.routeId).toBe("/services/$slug");
      expect(sitemap).toContain(`/services/${s.slug}</loc>`);
    }
  });

  it("builds encoded, service-specific inquiry links", () => {
    const seo = getService("seo")!;
    const url = new URL(serviceEmailHref(seo));
    expect(url.pathname).toBe("evcodelabs01@gmail.com");
    expect(url.searchParams.get("subject")).toBe("SEO Inquiry — EVCodelabs");
    expect(url.searchParams.get("body")).toContain("discuss SEO services");
    const wa = serviceWhatsappHref(seo);
    if (wa) expect(decodeURIComponent(wa)).toContain("discuss SEO for my business");
  });
});
