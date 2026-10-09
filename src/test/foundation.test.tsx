import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CaseStudyCard, FaqList } from "@/components/brand/content-components";
import { SiteHeader, MobileNavigation, SiteFooter } from "@/components/brand/site-chrome";
import { Button } from "@/components/ui/button";
import { siteContent, type NavigationItem } from "@/lib/site-content";

afterEach(cleanup);
const items: readonly NavigationItem[] = [{ label: "Typography", href: "#typography" }];

describe("EVCodelabs foundation", () => {
  it("uses truthful empty case studies with no detail link", () => {
    render(<CaseStudyCard />);
    expect(screen.getByText("No approved case studies yet")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
  it("keeps project contacts inactive without approved destinations", () => {
    render(<SiteHeader items={items} />);
    expect(screen.getByRole("button", { name: "Discuss a Project" })).toBeDisabled();
    expect(document.querySelector('a[href^="mailto:"], a[href*="wa.me"]')).toBeNull();
  });
  it("opens and closes mobile navigation", () => {
    render(<MobileNavigation items={items} />);
    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", { name: "Typography" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
  it("expands and collapses FAQ answers", () => {
    render(<FaqList items={siteContent.faqs.slice(0, 1)} />);
    const trigger = screen.getByRole("button", { name: siteContent.faqs[0].question });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(siteContent.faqs[0].answer)).toBeVisible();
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });
  it("renders current copyright year and inactive WhatsApp", () => {
    render(<SiteFooter items={items} />);
    expect(screen.getByText(`© ${new Date().getFullYear()} EVCodelabs.`)).toBeInTheDocument();
    expect(screen.getByText("WhatsApp — not configured")).toBeInTheDocument();
  });
  it("preserves button disabled semantics and accessible labels", () => {
    render(<Button disabled>Contact inactive</Button>);
    expect(screen.getByRole("button", { name: "Contact inactive" })).toBeDisabled();
  });
});