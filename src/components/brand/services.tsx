import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ChevronRight, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaqList, SectionHeading } from "@/components/brand/content-components";
import {
  getService,
  pillarIds,
  pillars,
  serviceEmailHref,
  servicesByPillar,
  serviceWhatsappHref,
  type PillarId,
  type Service,
} from "@/lib/services-catalogue";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function ServiceSummaryCard({ service }: { service: Service }) {
  return (
    <article className="service-card service-summary">
      <p className="eyebrow text-primary">{pillars[service.pillar].label}</p>
      <h3 className="mt-3">{service.name}</h3>
      <p className="mt-3 text-muted-foreground">{service.summary}</p>
      <Button variant="link" asChild className="mt-auto self-start px-0 pt-5">
        <Link to="/services/$slug" params={{ slug: service.slug }}>
          Explore Service<span className="sr-only">: {service.name}</span>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}

const filterOptions = ["all", ...pillarIds] as const;
export type FilterValue = (typeof filterOptions)[number];

export function PillarFilter({
  value,
  onChange,
}: {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
}) {
  return (
    <div role="group" aria-label="Filter services by pillar" className="pillar-filter">
      {filterOptions.map((option) => {
        const selected = option === value;
        return (
          <Button
            key={option}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            aria-pressed={selected}
            onClick={() => onChange(option)}
          >
            {option === "all" ? "ALL" : pillars[option].label}
          </Button>
        );
      })}
    </div>
  );
}

function PillarGroup({ pillar }: { pillar: PillarId }) {
  const info = pillars[pillar];
  return (
    <section aria-labelledby={`pillar-${pillar}`} className="pillar-group">
      <div className="reading-width">
        <p className="eyebrow text-primary">{info.label}</p>
        <h2 id={`pillar-${pillar}`} className="pillar-title mt-2">
          {info.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{info.description}</p>
      </div>
      <div className="service-summary-grid mt-8">
        {servicesByPillar(pillar).map((service) => (
          <ServiceSummaryCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

export function ServicesOverview({
  filter,
  onFilterChange,
}: {
  filter: FilterValue;
  onFilterChange: (value: FilterValue) => void;
}) {
  useEffect(() => trackEvent("services_overview_view"), []);
  const visible = filter === "all" ? pillarIds : [filter];

  return (
    <>
      <section className="section-space border-b border-border" aria-labelledby="services-title">
        <div className="content-width">
          <p className="eyebrow mb-4 text-primary">Our Services</p>
          <h1 id="services-title" className="reading-width">
            Digital solutions built around your business goals.
          </h1>
          <p className="reading-width mt-6 text-muted-foreground">
            EVCodelabs offers practical digital services to help businesses establish their online
            presence, attract customers, improve how they operate, and grow. Explore the services
            below by pillar, or tell us about your goals and we will help you decide where to start.
          </p>
          <div className="mt-8">
            <PillarFilter
              value={filter}
              onChange={(value) => {
                trackEvent("service_filter_select", { filter: value });
                onFilterChange(value);
              }}
            />
          </div>
        </div>
      </section>
      <div className="section-space">
        <div className="content-width pillar-stack" aria-live="polite">
          {visible.map((pillar) => (
            <PillarGroup key={pillar} pillar={pillar} />
          ))}
        </div>
      </div>
      <section className="section-space contact-band" aria-labelledby="unsure-title">
        <div className="content-width contact-layout">
          <div className="reading-width">
            <h2 id="unsure-title">Not sure which service you need?</h2>
            <p className="mt-5 text-muted-foreground">
              You do not need to know the exact technical solution before contacting us. Describe
              your business, your goals, or the challenge you are facing, and we will help you
              identify suitable next steps.
            </p>
          </div>
          <div className="contact-actions">
            <Button asChild size="lg">
              <Link to="/" hash="contact">
                Start a Conversation
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export function Breadcrumbs({ service }: { service: Service }) {
  return (
    <nav aria-label="Breadcrumb" className="caption text-muted-foreground">
      <ol className="breadcrumb">
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li>
          <Link to="/services" className="nav-link">Services</Link>
        </li>
        <li aria-hidden="true"><ChevronRight size={14} /></li>
        <li aria-current="page" className="font-semibold text-foreground">{service.name}</li>
      </ol>
    </nav>
  );
}

export function ServiceInquiryActions({ service, inverse }: { service: Service; inverse?: boolean }) {
  const params = { service_slug: service.slug, service_pillar: service.pillar };
  const whatsapp = serviceWhatsappHref(service);
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg">
        <a
          href={serviceEmailHref(service)}
          onClick={() => {
            trackEvent("service_inquiry_click", { ...params, inquiry_channel: "email" });
            trackEvent("email_inquiry_click", { ...params, inquiry_channel: "email" });
          }}
        >
          <Mail aria-hidden="true" />
          Email about {service.inquiryName}
        </a>
      </Button>
      {whatsapp && (
        <Button asChild size="lg" variant="outline" className={cn(inverse && "bg-transparent")}>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("service_inquiry_click", { ...params, inquiry_channel: "whatsapp" });
              trackEvent("whatsapp_inquiry_click", { ...params, inquiry_channel: "whatsapp" });
            }}
          >
            <MessageCircle aria-hidden="true" />
            WhatsApp us<span className="sr-only"> about {service.inquiryName} (opens in a new tab)</span>
          </a>
        </Button>
      )}
    </div>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  useEffect(
    () => trackEvent("service_page_view", { service_slug: service.slug, service_pillar: service.pillar }),
    [service.slug, service.pillar],
  );
  const related = service.related.map(getService).filter((s): s is Service => Boolean(s));
  const pillar = pillars[service.pillar];

  return (
    <>
      <section className="section-space border-b border-border" aria-labelledby="service-title">
        <div className="content-width">
          <Breadcrumbs service={service} />
          <p className="eyebrow mt-8 text-primary">{pillar.label} · {service.name}</p>
          <h1 id="service-title" className="reading-width mt-3">{service.heroTitle}</h1>
          <p className="reading-width mt-6">{service.intro}</p>
          <p className="reading-width mt-4 text-muted-foreground">{service.audience}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ServiceInquiryActions service={service} />
            <Button asChild variant="link">
              <Link to="/services" search={{ pillar: service.pillar }}>
                <ArrowLeft aria-hidden="true" />
                All {pillar.label} services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="challenges-title">
        <div className="content-width detail-split">
          <SectionHeading eyebrow="Challenges" title="Problems this service can help with" />
          <div>
            <h2 id="challenges-title" className="sr-only">Common business challenges</h2>
            <ul className="service-list detail-list">
              {service.challenges.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space border-y border-border bg-card" aria-labelledby="included-title">
        <div className="content-width">
          <h2 id="included-title">What's included</h2>
          <div className="detail-columns mt-10">
            <div>
              <h3>Core work</h3>
              <ul className="service-list detail-list mt-5">
                {service.included.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div>
              <h3>Depends on your project</h3>
              <p className="mt-3 text-muted-foreground">Scoped and agreed separately where needed.</p>
              <ul className="service-list detail-list mt-5 text-muted-foreground">
                {service.dependsOnProject.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space inverse-band" aria-labelledby="process-title">
        <div className="content-width">
          <p className="eyebrow">How it works</p>
          <h2 id="process-title" className="mt-3 reading-width">How we approach {service.name}</h2>
          <ol className="approach-steps detail-steps mt-12">
            {service.process.map((step, index) => (
              <li key={step.title}>
                <span className="step-number" aria-hidden="true">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p className="mt-3">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-space" aria-labelledby="related-title">
          <div className="content-width">
            <h2 id="related-title">Related services</h2>
            <ul className="service-summary-grid mt-8">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="service-card related-link"
                    onClick={() =>
                      trackEvent("related_service_click", {
                        service_slug: item.slug,
                        service_pillar: item.pillar,
                      })
                    }
                  >
                    <span className="eyebrow text-primary">{pillars[item.pillar].label}</span>
                    <span className="related-name">{item.name}</span>
                    <span className="text-muted-foreground">{item.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section-space border-t border-border" aria-labelledby="service-faq-title">
        <div className="content-width faq-layout">
          <div className="reading-width">
            <p className="eyebrow mb-4 text-primary">FAQs</p>
            <h2 id="service-faq-title">Questions about {service.name}</h2>
          </div>
          <FaqList items={service.faqs} />
        </div>
      </section>

      <section className="section-space contact-band" aria-labelledby="service-cta-title">
        <div className="content-width">
          <h2 id="service-cta-title" className="reading-width">
            Let's discuss {service.inquiryName} for your business.
          </h2>
          <p className="reading-width mt-5 text-muted-foreground">
            Tell us about your business and what you want to achieve. We will reply to discuss
            whether this service fits and what sensible next steps could look like.
          </p>
          <div className="mt-8">
            <ServiceInquiryActions service={service} />
          </div>
        </div>
      </section>
    </>
  );
}
