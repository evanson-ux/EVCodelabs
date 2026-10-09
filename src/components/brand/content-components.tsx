import type { ReactNode } from "react";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteContent, type FaqItem } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("reading-width", className)}>
      {eyebrow && <p className="eyebrow mb-4 text-primary">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="mt-5 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function ServiceCard({
  name,
  description,
  services,
  icon,
}: {
  name: string;
  description: string;
  services: string;
  icon?: ReactNode;
}) {
  return (
    <article className="service-card">
      {icon && (
        <div className="service-icon mb-6" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3>{name}</h3>
      <p className="mt-3">{description}</p>
      <p className="mt-5 border-t border-border pt-5 text-muted-foreground">{services}</p>
    </article>
  );
}

export type CaseStudy = {
  name: string;
  challenge: string;
  goal: string;
  solution: string;
  technologies?: readonly string[];
  outcomes?: readonly string[];
  href?: string;
};

export function CaseStudyCard({ study }: { study?: CaseStudy }) {
  if (!study)
    return (
      <article className="case-empty">
        <FolderOpen className="mb-5 size-8 text-muted-foreground" aria-hidden="true" />
        <h3>{siteContent.caseStudies.emptyTitle}</h3>
        <p className="mt-3 text-muted-foreground">{siteContent.caseStudies.emptyDescription}</p>
      </article>
    );
  return (
    <article className="service-card">
      <h3>{study.name}</h3>
      <dl className="mt-5 space-y-4">
        {(
          [
            ["Challenge", study.challenge],
            ["Goal", study.goal],
            ["Solution", study.solution],
          ] as const
        ).map(([label, value]) => (
          <div key={label}>
            <dt className="caption font-semibold">{label}</dt>
            <dd className="text-muted-foreground">{value}</dd>
          </div>
        ))}
        {study.technologies?.length ? (
          <div>
            <dt className="caption font-semibold">Technologies</dt>
            <dd className="text-muted-foreground">{study.technologies.join(", ")}</dd>
          </div>
        ) : null}
        {study.outcomes?.length ? (
          <div>
            <dt className="caption font-semibold">Verified outcomes</dt>
            <dd>
              <ul className="list-inside list-disc text-muted-foreground">
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </dd>
          </div>
        ) : null}
      </dl>
      {study.href && (
        <Button variant="link" asChild className="mt-5">
          <a href={study.href}>
            Explore {study.name}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </Button>
      )}
    </article>
  );
}

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="faq-trigger">{item.question}</AccordionTrigger>
          <AccordionContent className="faq-answer">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
