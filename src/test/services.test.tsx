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
  isPillarId,
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
    const seo = getService("seo");
    if (!seo) throw new Error("SEO service is missing");
    const url = new URL(serviceEmailHref(seo));
    expect(url.pathname).toBe("evcodelabs01@gmail.com");
    expect(url.searchParams.get("subject")).toBe("SEO Inquiry — EVCodelabs");
    expect(url.searchParams.get("body")).toContain("discuss SEO services");
    const wa = serviceWhatsappHref(seo);
    if (wa) expect(decodeURIComponent(wa)).toContain("discuss SEO for my business");
  });

  it("accepts only valid pillar filters", () => {
    for (const pillar of ["build", "grow", "automate", "scale"]) expect(isPillarId(pillar)).toBe(true);
    for (const value of [undefined, null, "bogus", "ALL", "toString", ["build"], 1]) expect(isPillarId(value)).toBe(false);
  });

  it("provides complete detail content and distinct inquiries for every service", () => {
    for (const service of services) {
      for (const items of [service.challenges, service.included, service.dependsOnProject, service.process, service.faqs]) {
        expect(items.length, service.slug).toBeGreaterThan(0);
      }
      expect(new Set(service.faqs.map((faq) => faq.question)).size).toBe(service.faqs.length);
      for (const faq of service.faqs) expect(faq.answer.trim().length).toBeGreaterThan(0);
      const email = new URL(serviceEmailHref(service));
      expect(email.searchParams.get("subject")).toBe(`${service.inquiryName} Inquiry — EVCodelabs`);
      expect(email.searchParams.get("body")).toContain(service.inquiryName);
      const whatsapp = serviceWhatsappHref(service);
      if (whatsapp) expect(new URL(whatsapp).searchParams.get("text")).toContain(service.inquiryName);
    }
    expect(getService("not-a-service")).toBeUndefined();
  });
});
