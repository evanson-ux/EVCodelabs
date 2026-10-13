/**
 * Lightweight, provider-agnostic event hook. No analytics vendor is configured yet;
 * events are pushed to window.dataLayer (Google Tag Manager convention) and gtag
 * only when one of them has been installed. Never send personal data here.
 */
export type AnalyticsEvent =
  | "services_overview_view"
  | "service_page_view"
  | "service_filter_select"
  | "service_inquiry_click"
  | "email_inquiry_click"
  | "whatsapp_inquiry_click"
  | "related_service_click";

export type AnalyticsParams = {
  service_slug?: string;
  service_pillar?: string;
  inquiry_channel?: "email" | "whatsapp";
  page_path?: string;
  filter?: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (command: "event", name: string, params: Record<string, unknown>) => void;
};

export function trackEvent(name: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  try {
    const w = window as AnalyticsWindow;
    const payload = { page_path: window.location.pathname, ...params };
    if (typeof w.gtag === "function") w.gtag("event", name, payload);
    else if (Array.isArray(w.dataLayer)) w.dataLayer.push({ event: name, ...payload });
  } catch {
    // Tracking must never block navigation or inquiry links.
  }
}
