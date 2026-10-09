import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Homepage } from "@/components/brand/homepage";
import { SiteFooter, SiteHeader } from "@/components/brand/site-chrome";
import { emailInquiryHref, siteContent } from "@/lib/site-content";

afterEach(cleanup);

function renderHomepage() {
  return render(<><SiteHeader items={siteContent.navigation} projectHref={emailInquiryHref} /><main id="main-content"><Homepage /></main><SiteFooter items={siteContent.navigation} emailHref={emailInquiryHref} /></>);
}

describe("EVCodelabs homepage", () => {
  it("renders the approved page sections in order with one main and one H1", () => {
    const { container } = renderHomepage();
    expect(Array.from(container.querySelectorAll("main > section")).map(section => section.id)).toEqual(["", "services", "approach", "case-studies", "how-we-work", "faqs", "contact"]);
    expect(container.querySelectorAll("main")).toHaveLength(1);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(siteContent.hero.title);
    expect(container.firstElementChild?.tagName).toBe("HEADER");
    expect(container.lastElementChild?.tagName).toBe("FOOTER");
  });
  it("publishes every approved service and process description", () => {
    renderHomepage();
    for (const group of siteContent.services.items) {
      expect(screen.getByRole("heading", { name: group.name })).toBeVisible();
      for (const service of group.services) expect(screen.getByText(service)).toBeVisible();
    }
    for (const stage of siteContent.process.steps) expect(screen.getByText(stage.description)).toBeVisible();
  });
  it("uses prepared email inquiries and keeps WhatsApp inactive", () => {
    const { container } = renderHomepage();
    const [recipient, query] = emailInquiryHref.split("?");
    expect(recipient).toBe(`mailto:${siteContent.email}`);
    const params = new URLSearchParams(query);
    expect(params.get("subject")).toBe("Project inquiry — EVCodelabs");
    expect(params.get("body")).toContain("I'd like to discuss a project.");
    for (const link of container.querySelectorAll('a[href^="mailto:"]')) expect(link).toHaveAttribute("href", emailInquiryHref);
    expect(screen.getByRole("button", { name: "WhatsApp — unavailable" })).toBeDisabled();
    expect(container.querySelector('a[href*="wa.me"], a[href*="whatsapp"]')).toBeNull();
  });
  it("resolves all local navigation anchors and does not fabricate case studies", () => {
    const { container } = renderHomepage();
    for (const link of container.querySelectorAll('a[href^="#"]')) {
      const href = link.getAttribute("href");
      expect(href && container.querySelector(href)).toBeTruthy();
    }
    expect(screen.getByText(siteContent.caseStudies.emptyTitle)).toBeVisible();
    expect(container.querySelector("#case-studies a")).toBeNull();
  });
  it("opens the real mobile menu and closes it after selecting Contact", () => {
    renderHomepage();
    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    const dialog = screen.getByRole("dialog");
    const contactLink = dialog.querySelector('a[href="#contact"]');
    expect(contactLink).toBeTruthy();
    if (contactLink) fireEvent.click(contactLink);
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("renders all six accessible FAQ questions", () => {
    renderHomepage();
    for (const faq of siteContent.faqs) {
      const trigger = screen.getByRole("button", { name: faq.question });
      fireEvent.click(trigger);
      expect(trigger).toHaveAttribute("aria-expanded", "true");
      expect(screen.getByText(faq.answer)).toBeVisible();
    }
  });
});