// Illustrative, generated imagery for service pages. These are concept visuals only —
// they do not depict real EVCodelabs client projects or real results.
import websiteDevelopment from "@/assets/services/website-development.jpg";
import branding from "@/assets/services/branding.jpg";
import ecommerce from "@/assets/services/ecommerce-development.jpg";
import customSoftware from "@/assets/services/custom-software-development.jpg";
import seo from "@/assets/services/seo.jpg";
import social from "@/assets/services/social-media-management.jpg";
import localSeo from "@/assets/services/local-seo.jpg";
import messaging from "@/assets/services/whatsapp-email-automation.jpg";
import automation from "@/assets/services/business-automation.jpg";
import booking from "@/assets/services/booking-automation.jpg";
import ai from "@/assets/services/ai-solutions.jpg";
import analytics from "@/assets/services/business-analytics.jpg";
import support from "@/assets/services/technical-support.jpg";

export type ServiceImage = { src: string; alt: string };

export const serviceImages: Record<string, ServiceImage> = {
  "website-development": {
    src: websiteDevelopment,
    alt: "Laptop and phone on a desk showing the same simple website layout on both screens",
  },
  branding: {
    src: branding,
    alt: "Brand identity flat lay with business cards, colour swatches and typography sheets",
  },
  "ecommerce-development": {
    src: ecommerce,
    alt: "Tablet showing an online store layout with product tiles beside a shopping bag and parcel",
  },
  "custom-software-development": {
    src: customSoftware,
    alt: "Desktop monitor showing a simple business application layout with tables and panels",
  },
  seo: {
    src: seo,
    alt: "Laptop showing a search results layout next to a website checklist and sketched site structure",
  },
  "social-media-management": {
    src: social,
    alt: "Phone showing a grid of posts next to a paper content calendar with sticky notes",
  },
  "local-seo": {
    src: localSeo,
    alt: "Hand holding a phone with a local map and business listing on a café street",
  },
  "whatsapp-email-automation": {
    src: messaging,
    alt: "Illustration of chat and email messages flowing through connected automated steps",
  },
  "business-automation": {
    src: automation,
    alt: "Laptop showing a workflow builder with connected steps and arrows",
  },
  "booking-automation": {
    src: booking,
    alt: "Tablet on a reception counter showing a weekly booking calendar with appointments",
  },
  "ai-solutions": {
    src: ai,
    alt: "Person at a laptop using an assistant panel alongside a document draft",
  },
  "business-analytics": {
    src: analytics,
    alt: "Desktop monitor showing a dashboard with simple bar, line and donut charts",
  },
  "technical-support": {
    src: support,
    alt: "Laptop showing a system checklist with ticks beside a small toolkit and cable organiser",
  },
};
