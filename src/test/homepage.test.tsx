import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Homepage } from "@/components/brand/homepage";
import { SiteFooter, SiteHeader } from "@/components/brand/site-chrome";
import { emailInquiryHref, siteContent } from "@/lib/site-content";
import { ContactModalProvider } from "@/components/brand/contact-modal-context";
import { ContactModal } from "@/components/brand/contact-modal";

afterEach(cleanup);

function renderHomepage() {
  return render(
    <ContactModalProvider>
      <SiteHeader items={siteContent.navigation} />
      <main id="main-content">
        <Homepage />
      </main>
      <SiteFooter items={siteContent.navigation} emailHref={emailInquiryHref} />
      <ContactModal />
    </ContactModalProvider>,
  );
}

function openContactModal() {
  const discussButtons = screen.getAllByRole("button", {
    name: "Discuss a Project",
  });

  fireEvent.click(discussButtons[0]);

  return screen.getByRole("dialog");
}

describe("EVCodelabs homepage", () => {
  it("renders the approved page sections in order with one main and one H1", () => {
    const { container } = renderHomepage();

    expect(
      Array.from(container.querySelectorAll("main > section")).map((section) => section.id),
    ).toEqual(["", "services", "approach", "case-studies", "how-we-work", "faqs", "contact"]);

    expect(container.querySelectorAll("main")).toHaveLength(1);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(siteContent.hero.title);

    expect(container.firstElementChild?.tagName).toBe("HEADER");
    expect(container.lastElementChild?.tagName).toBe("FOOTER");
  });

  it("publishes every approved service and process description", () => {
    renderHomepage();

    for (const group of siteContent.services.items) {
      expect(screen.getByRole("heading", { name: group.name })).toBeVisible();

      for (const service of group.services) {
        expect(screen.getByText(service)).toBeVisible();
      }
    }

    for (const stage of siteContent.process.steps) {
      expect(screen.getByText(stage.description)).toBeVisible();
    }
  });

  it("uses contact modal for project inquiries and has active WhatsApp", () => {
    renderHomepage();

    const discussButtons = screen.getAllByRole("button", {
      name: "Discuss a Project",
    });

    expect(discussButtons.length).toBeGreaterThanOrEqual(2);

    const emailLink = screen.getByRole("link", {
      name: siteContent.email,
    });

    expect(emailLink).toHaveAttribute("href", emailInquiryHref);

    expect(screen.getByRole("link", { name: "Chat on WhatsApp" })).toBeInTheDocument();

    expect(
      screen.queryByRole("button", { name: "WhatsApp — unavailable" }),
    ).not.toBeInTheDocument();
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

  it("opens the real mobile menu and closes it after selecting a nav link", () => {
    renderHomepage();

    fireEvent.click(screen.getByRole("button", { name: "Open navigation" }));

    const dialog = screen.getByRole("dialog");
    const contactLink = dialog.querySelector('a[href="#contact"]');

    expect(contactLink).toBeTruthy();

    if (contactLink) {
      fireEvent.click(contactLink);
    }

    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("renders all six accessible FAQ questions", () => {
    renderHomepage();

    for (const faq of siteContent.faqs) {
      const trigger = screen.getByRole("button", {
        name: faq.question,
      });

      fireEvent.click(trigger);

      expect(trigger).toHaveAttribute("aria-expanded", "true");

      expect(screen.getByText(faq.answer)).toBeVisible();
    }
  });

  it("modal has no send button and provides mobile and desktop email links", () => {
    renderHomepage();

    const dialog = openContactModal();

    expect(dialog).toBeInTheDocument();

    expect(screen.queryByRole("button", { name: "Send Message" })).not.toBeInTheDocument();

    expect(screen.queryByText("Message Sent")).not.toBeInTheDocument();

    expect(screen.queryByText("Something Went Wrong")).not.toBeInTheDocument();

    const emailLinks = within(dialog).getAllByRole("link", {
      name: "Email Us Directly",
      hidden: true,
    });

    expect(emailLinks).toHaveLength(2);

    const mobileLink = emailLinks.find((link) => link.getAttribute("href")?.startsWith("mailto:"));

    const desktopLink = emailLinks.find((link) =>
      link.getAttribute("href")?.startsWith("https://mail.google.com/"),
    );

    expect(mobileLink).toBeDefined();
    expect(desktopLink).toBeDefined();

    expect(mobileLink).not.toHaveAttribute("target");

    expect(desktopLink).toHaveAttribute("target", "_blank");
    expect(desktopLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(mobileLink).toHaveClass("sm:hidden");
    expect(desktopLink).toHaveClass("hidden");
    expect(desktopLink).toHaveClass("sm:inline-flex");
  });

  it("mobile email link uses mailto with prepared inquiry details", () => {
    renderHomepage();

    const dialog = openContactModal();

    fireEvent.change(within(dialog).getByLabelText("Your Name"), {
      target: { value: "Jane Doe" },
    });

    fireEvent.change(within(dialog).getByLabelText("Work Email"), {
      target: { value: "jane@example.com" },
    });

    fireEvent.change(within(dialog).getByLabelText("Project Details"), {
      target: { value: "I need a business website." },
    });

    const mobileLink = dialog.querySelector<HTMLAnchorElement>(
      'a[href^="mailto:evcodelabs01@gmail.com"]',
    );

    expect(mobileLink).not.toBeNull();

    const href = mobileLink?.getAttribute("href") ?? "";

    expect(href).toContain("mailto:evcodelabs01@gmail.com");

    const query = href.split("?")[1] ?? "";
    const params = new URLSearchParams(query);

    expect(params.get("subject")).toBe("Business Inquiry — EVCodelabs");

    expect(params.get("body")).toContain("Name: Jane Doe");
    expect(params.get("body")).toContain("Email: jane@example.com");
    expect(params.get("body")).toContain("Message:\nI need a business website.");

    expect(mobileLink).not.toHaveAttribute("target", "_blank");
  });

  it("desktop email link opens Gmail Compose with prepared inquiry details", () => {
    renderHomepage();

    const dialog = openContactModal();

    fireEvent.change(within(dialog).getByLabelText("Your Name"), {
      target: { value: "Jane Doe" },
    });

    fireEvent.change(within(dialog).getByLabelText("Work Email"), {
      target: { value: "jane@example.com" },
    });

    fireEvent.change(within(dialog).getByLabelText("Project Details"), {
      target: { value: "I need a business website." },
    });

    const desktopLink = dialog.querySelector<HTMLAnchorElement>(
      'a[href^="https://mail.google.com/mail/"]',
    );

    expect(desktopLink).not.toBeNull();

    expect(desktopLink).toHaveAttribute("target", "_blank");
    expect(desktopLink).toHaveAttribute("rel", "noopener noreferrer");

    const url = new URL(desktopLink?.href ?? "");

    expect(url.hostname).toBe("mail.google.com");
    expect(url.searchParams.get("view")).toBe("cm");
    expect(url.searchParams.get("fs")).toBe("1");
    expect(url.searchParams.get("to")).toBe("evcodelabs01@gmail.com");
    expect(url.searchParams.get("su")).toBe("Business Inquiry — EVCodelabs");

    expect(url.searchParams.get("body")).toContain("Name: Jane Doe");
    expect(url.searchParams.get("body")).toContain("Email: jane@example.com");
    expect(url.searchParams.get("body")).toContain("Message:\nI need a business website.");
  });
});
