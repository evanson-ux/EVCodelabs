import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  ChartNoAxesCombined,
  Code2,
  Mail,
  MessageCircle,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CaseStudyCard,
  FaqList,
  SectionHeading,
  ServiceCard,
} from "@/components/brand/content-components";
import { emailInquiryHref, siteContent, whatsappInquiryHref } from "@/lib/site-content";
import workspaceImage from "@/assets/homepage-workspace.jpg";

const serviceIcons = [Code2, ChartNoAxesCombined, Workflow, Blocks];

export function Homepage() {
  return (
    <>
      <section className="homepage-hero" aria-labelledby="hero-title">
        <img
          src={workspaceImage}
          alt=""
          className="hero-image"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="content-width hero-inner">
          <div className="hero-copy">
            <p className="eyebrow mb-6 flex items-center gap-3 text-primary">
              <span className="eyebrow-rule" aria-hidden="true" />
              {siteContent.hero.eyebrow}
            </p>
            <h1 id="hero-title">{siteContent.hero.title}</h1>
            <p className="mt-6 text-muted-foreground">{siteContent.hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={emailInquiryHref}>
                  {siteContent.hero.primaryAction}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#services">
                  {siteContent.hero.secondaryAction}
                  <ArrowDown aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-space" aria-label="Services">
        <div className="content-width">
          <SectionHeading
            eyebrow="Our Services"
            title={siteContent.services.title}
            description={siteContent.services.description}
          />
          <div className="services-grid mt-10">
            {siteContent.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <ServiceCard
                  key={service.name}
                  {...service}
                  icon={Icon ? <Icon size={25} strokeWidth={1.5} /> : undefined}
                />
              );
            })}
          </div>
          <div className="service-inquiry mt-8 border-t border-border pt-8">
            <p className="font-medium">{siteContent.services.action}</p>
            <Button asChild variant="link">
              <a href={emailInquiryHref}>
                Discuss your needs
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section id="approach" className="section-space inverse-band" aria-label="Our Approach">
        <div className="content-width">
          <div className="approach-heading">
            <p className="eyebrow">Our Approach</p>
            <div className="reading-width">
              <h2>{siteContent.approach.title}</h2>
              <p className="mt-6">{siteContent.approach.description}</p>
            </div>
          </div>
          <ol className="approach-steps mt-12">
            {siteContent.approach.steps.map((step, index) => (
              <li key={step}>
                <span className="step-number" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="case-studies" className="section-space" aria-label="Case Studies">
        <div className="content-width">
          <SectionHeading
            eyebrow="Case Studies"
            title={siteContent.caseStudies.title}
            description={siteContent.caseStudies.description}
          />
          <div className="mt-10">
            <CaseStudyCard />
          </div>
        </div>
      </section>

      <section
        id="how-we-work"
        className="section-space border-y border-border bg-card"
        aria-label="How We Work"
      >
        <div className="content-width">
          <SectionHeading eyebrow="How We Work" title={siteContent.process.title} />
          <ol className="process-grid mt-12">
            {siteContent.process.steps.map((step, index) => (
              <li key={step.title}>
                <span className="process-number mb-6" aria-hidden="true">
                  0{index + 1}
                </span>
                <h3>{step.title}</h3>
                <p className="mt-3 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faqs" className="section-space" aria-label="Frequently Asked Questions">
        <div className="content-width faq-layout">
          <SectionHeading eyebrow="FAQs" title="Your questions, answered." />
          <FaqList items={siteContent.faqs} />
        </div>
      </section>

      <section id="contact" className="section-space contact-band" aria-label="Contact">
        <div className="content-width contact-layout">
          <SectionHeading
            eyebrow="Let's Talk"
            title={siteContent.contact.title}
            description={siteContent.contact.description}
          />
          <div className="contact-actions">
            <Button asChild size="lg">
              <a href={emailInquiryHref}>
                {siteContent.contact.action}
                <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
            <a href={emailInquiryHref} className="nav-link mt-4 gap-2 text-primary">
              <Mail size={18} aria-hidden="true" />
              {siteContent.email}
            </a>
            {whatsappInquiryHref ? (
              <Button asChild variant="ghost" className="mt-2">
                <a href={whatsappInquiryHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            ) : (
              <Button
                disabled
                variant="ghost"
                className="mt-2"
                title="WhatsApp is unavailable until a contact number is supplied"
              >
                <MessageCircle aria-hidden="true" />
                WhatsApp — unavailable
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
