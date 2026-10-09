import { ArrowUpRight, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CaseStudyCard, FaqList, SectionHeading, ServiceCard } from "./content-components";
import { SiteFooter, SiteHeader } from "./site-chrome";
import { siteContent, type NavigationItem } from "@/lib/site-content";

const previewNavigation: readonly NavigationItem[] = [
  { label: "Typography", href: "#typography" },
  { label: "Palette", href: "#palette" },
  { label: "Components", href: "#components" },
];

export function FoundationHeader() {
  return <SiteHeader items={previewNavigation} />;
}

export function FoundationFooter() {
  return <SiteFooter items={previewNavigation} />;
}

export function FoundationPreview() {
  const firstService = siteContent.services.items[0];
  return (
    <>
      <section id="typography" className="content-width section-space">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
          <p className="eyebrow text-primary">EVCodelabs / Design foundation</p>
          <span className="caption text-muted-foreground">Phase 01 · Review preview</span>
        </div>
        <div className="mt-10 specimen-heading">
          <p className="eyebrow mb-5 text-primary">{siteContent.hero.eyebrow}</p>
          <h1>{siteContent.hero.title}</h1>
          <p className="reading-width mt-6 text-muted-foreground">{siteContent.hero.description}</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button size="lg" asChild>
            <a href="#components">
              Inspect shared components
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#palette">View brand palette</a>
          </Button>
        </div>
        <div className="specimen-grid specimen-rule mt-12 pt-8">
          <div>
            <p className="specimen-label mb-3">Heading 2 · 600</p>
            <h2>{siteContent.services.title}</h2>
          </div>
          <div>
            <p className="specimen-label mb-3">Heading 3 · 600</p>
            <h3>From your idea to a practical solution.</h3>
            <p className="caption mt-5 text-muted-foreground">
              Manrope · Regular 400 / Medium 500 / Semi-bold 600 / Bold 700
            </p>
          </div>
        </div>
      </section>
      <section id="palette" className="border-y border-border bg-card">
        <div className="content-width py-10">
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
            <h2>Brand palette</h2>
            <p className="caption text-muted-foreground">Four colors. One clear identity.</p>
          </div>
          <div className="palette-grid">
            {[
              { name: "Royal blue", value: "#243F8F", className: "swatch-blue" },
              { name: "Sage green", value: "#9DC183", className: "swatch-sage" },
              { name: "Charcoal", value: "#292D32", className: "swatch-charcoal" },
              { name: "Alabaster", value: "#F8F7F2", className: "swatch-alabaster" },
            ].map((color) => (
              <div key={color.name}>
                <div className={`palette-swatch ${color.className}`} aria-hidden="true" />
                <p className="mt-3 font-semibold">{color.name}</p>
                <p className="caption text-muted-foreground">{color.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="components" className="content-width section-space">
        <SectionHeading eyebrow="Shared components" title="Practical by design." />
        <div className="specimen-grid mt-8">
          <div>
            <p className="specimen-label mb-4">Service card</p>
            <ServiceCard {...firstService} icon={<Code2 />} />
          </div>
          <div>
            <p className="specimen-label mb-4">Case study · empty state</p>
            <CaseStudyCard />
            <p className="specimen-label mb-3 mt-6">Button states</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" asChild>
                <a href="#typography">Back to typography</a>
              </Button>
              <Button disabled>Contact inactive</Button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <p className="specimen-label mb-4">FAQ · keyboard-accessible</p>
          <FaqList items={siteContent.faqs.slice(0, 2)} />
        </div>
      </section>
      <section className="inverse-band py-12">
        <div className="content-width">
          <span className="eyebrow text-brand-sage">Our Approach · color specimen</span>
          <h2 className="reading-width mt-4">{siteContent.approach.title}</h2>
          <p className="reading-width mt-5">{siteContent.approach.description}</p>
        </div>
      </section>
    </>
  );
}
