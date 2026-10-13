import { siteContent, type FaqItem } from "@/lib/site-content";

/**
 * Single source of truth for the service platform: pillars, the thirteen services,
 * their slugs, page copy, related links, and FAQs. Routes, cards, metadata, the
 * sitemap test, and inquiry links all derive from this file.
 */

export const pillarIds = ["build", "grow", "automate", "scale"] as const;
export type PillarId = (typeof pillarIds)[number];

export const pillars: Record<PillarId, { label: string; title: string; description: string }> = {
  build: {
    label: "BUILD",
    title: "Establish your digital foundations",
    description:
      "The essentials a business needs to present itself clearly and operate online: a credible identity, a website that explains what you offer, and software where off-the-shelf tools fall short.",
  },
  grow: {
    label: "GROW",
    title: "Improve visibility and attract opportunities",
    description:
      "Help the right people find your business — through search engines, local listings, and a consistent social media presence.",
  },
  automate: {
    label: "AUTOMATE",
    title: "Simplify repetitive work",
    description:
      "Reduce routine manual tasks such as follow-ups, reminders, data entry, and scheduling, so your team can focus on the work that needs a person.",
  },
  scale: {
    label: "SCALE",
    title: "Improve operations and support growth",
    description:
      "Use AI, data, and dependable technical support to make your systems more useful and reliable as your business develops.",
  },
};

export type ServiceStep = { title: string; description: string };

export type Service = {
  slug: string;
  name: string;
  /** Short name used in inquiry subjects and messages. */
  inquiryName: string;
  pillar: PillarId;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  intro: string;
  audience: string;
  challenges: readonly string[];
  included: readonly string[];
  /** Work that is scoped per project rather than included by default. */
  dependsOnProject: readonly string[];
  process: readonly ServiceStep[];
  related: readonly string[];
  faqs: readonly FaqItem[];
};

export const services: readonly Service[] = [
  {
    slug: "website-development",
    name: "Website Design & Development",
    inquiryName: "Website Design & Development",
    pillar: "build",
    summary:
      "Professional, responsive websites that explain what you offer, build trust, and help visitors take the next step.",
    seoTitle: "Website Design & Development in Kenya | EVCodelabs",
    seoDescription:
      "Responsive business websites designed to explain your services clearly, work well on mobile, and guide visitors toward an inquiry. Talk to EVCodelabs.",
    heroTitle: "Websites that explain your business and help visitors take the next step.",
    intro:
      "We design and build websites that present your business clearly, load well on phones and computers, and make it easy for visitors to contact you, book, or buy.",
    audience:
      "Suitable for new businesses that need their first website and established businesses whose current site no longer reflects what they do.",
    challenges: [
      "Your website looks outdated or no longer matches how your business has grown.",
      "Visitors cannot quickly tell what you offer, who it is for, or how to get in touch.",
      "Pages are difficult to read or use on a mobile phone.",
      "You rely on social media alone and have no website you control.",
      "Updating content is slow or depends on someone else every time.",
    ],
    included: [
      "Planning the pages, structure, and main messages around your goals",
      "Responsive page design that follows your brand",
      "Development of the agreed pages with clear calls to action",
      "Contact options such as email or WhatsApp links where you have them",
      "Basic on-page search foundations: page titles, descriptions, and headings",
      "Testing on common screen sizes before launch",
    ],
    dependsOnProject: [
      "Copywriting, photography, or illustrations",
      "Domain and hosting setup",
      "Booking, payment, or other third-party integrations",
      "Content management so your team can edit pages",
    ],
    process: [
      { title: "Discuss your goals", description: "We learn what your business offers, who your customers are, and what the website needs to achieve." },
      { title: "Plan the structure", description: "We agree on the pages, the key message for each, and what visitors should be able to do." },
      { title: "Design and build", description: "We design the pages and develop the site, sharing progress for your feedback." },
      { title: "Test and launch", description: "We check the site on phones, tablets, and computers, fix issues, and publish it." },
      { title: "Handover and support", description: "We show you how things work and agree on any ongoing updates or maintenance." },
    ],
    related: ["branding", "seo", "ecommerce-development", "technical-support"],
    faqs: [
      { question: "I already have a website. Can you improve it instead of starting over?", answer: "Often, yes. We first review what you have. If the structure and platform are sound, improving key pages may be enough; if not, we will explain why a rebuild may be more practical." },
      { question: "What do I need to prepare before we start?", answer: "A basic idea of your services, your customers, and any existing logo, photos, or text. If you do not have content yet, we can discuss how to prepare it." },
      { question: "Will my website appear on Google?", answer: "We build in the technical foundations search engines need, but no one can guarantee rankings. For ongoing visibility work, see our SEO service." },
      { question: "Can I update the website myself after launch?", answer: "That depends on how the site is built. If editing content yourself matters to you, tell us early so we can plan for it." },
    ],
  },
  {
    slug: "branding",
    name: "Brand Identity & Design",
    inquiryName: "Brand Identity & Design",
    pillar: "build",
    summary:
      "A consistent visual identity that communicates your personality and presents your business professionally everywhere.",
    seoTitle: "Brand Identity & Logo Design | EVCodelabs",
    seoDescription:
      "Create a consistent visual identity — logo, colours, typography, and usage guidance — so your business looks professional across your website and social channels.",
    heroTitle: "A consistent identity that makes your business recognisable.",
    intro:
      "We help you define how your business looks and feels — logo, colours, and typography — so customers see a professional, consistent presence wherever they find you.",
    audience:
      "Useful for new businesses choosing their first identity and for businesses whose visuals have become inconsistent across channels.",
    challenges: [
      "Your logo, colours, and fonts change from one post or document to the next.",
      "Your business looks less established than the quality of your work.",
      "You are launching and need an identity before building a website.",
      "Team members or designers have no shared guidance to follow.",
    ],
    included: [
      "A conversation about your business, audience, and personality",
      "Logo design concepts and agreed refinements",
      "A colour palette and typography selection",
      "Simple usage guidance so the identity is applied consistently",
      "Logo files prepared for web and social media use",
    ],
    dependsOnProject: [
      "Print materials such as business cards or signage",
      "Social media templates",
      "Refreshing an existing identity rather than creating a new one",
    ],
    process: [
      { title: "Understand your brand", description: "We discuss your business, the customers you want to reach, and how you want to be perceived." },
      { title: "Explore directions", description: "We prepare initial design directions based on that conversation." },
      { title: "Refine", description: "We develop the chosen direction with your feedback." },
      { title: "Deliver the identity", description: "We prepare the final files and usage guidance for your team." },
    ],
    related: ["website-development", "social-media-management", "ecommerce-development"],
    faqs: [
      { question: "Can you refresh my existing logo instead of replacing it?", answer: "Yes. If your current logo has recognition worth keeping, we can refine it and build a more consistent system around it." },
      { question: "Is branding only a logo?", answer: "No. A logo is one part. Consistent colours, typography, and how they are used together are what make a business recognisable." },
      { question: "Should I do branding before my website?", answer: "Ideally, yes — a defined identity makes the website faster to design and more consistent. We can also plan both together." },
    ],
  },
  {
    slug: "ecommerce-development",
    name: "E-commerce Development",
    inquiryName: "E-commerce Development",
    pillar: "build",
    summary:
      "Online stores that present your products clearly, guide customers through buying, and make online sales easier to manage.",
    seoTitle: "E-commerce Website Development | EVCodelabs",
    seoDescription:
      "Online stores built to present products clearly, guide customers through checkout, and help you manage orders. Discuss your e-commerce project with EVCodelabs.",
    heroTitle: "Online stores that make buying straightforward.",
    intro:
      "We build online stores that show your products clearly, make checkout simple for customers, and give you a practical way to manage products and orders.",
    audience:
      "For businesses selling physical or digital products that want to sell online, or move beyond taking orders through chat and social media.",
    challenges: [
      "Orders arrive through chat messages and are hard to track.",
      "Customers cannot easily browse your full range or see prices and availability.",
      "Your current store is slow, confusing, or difficult to use on a phone.",
      "Managing products, stock, and orders takes too much manual effort.",
    ],
    included: [
      "Planning product categories, store structure, and the buying journey",
      "Product listing and product page design",
      "Cart and checkout flow set up with your chosen payment options",
      "Order notifications for you and your customers",
      "Mobile testing of the full purchase journey",
      "Guidance on adding products and managing orders",
    ],
    dependsOnProject: [
      "Payment gateway choice and account setup (requires your business accounts)",
      "Delivery options, shipping zones, and tax configuration",
      "Inventory or accounting system integrations",
      "Bulk product import and product photography",
    ],
    process: [
      { title: "Understand what you sell", description: "We discuss your products, customers, payments, and how you currently fulfil orders." },
      { title: "Choose the approach", description: "We recommend a suitable store platform and plan the structure." },
      { title: "Build the store", description: "We design and develop the store and configure products, checkout, and notifications." },
      { title: "Test purchases", description: "We run test orders end to end before going live." },
      { title: "Launch and handover", description: "We publish the store and show you how to manage it, with ongoing support if agreed." },
    ],
    related: ["seo", "business-analytics", "business-automation", "technical-support"],
    faqs: [
      { question: "Which payment methods can my store accept?", answer: "That depends on the payment providers available for your business and country. We will discuss options during planning; you will need your own merchant accounts." },
      { question: "Can I manage products myself?", answer: "Yes, stores are normally set up so you can add products, update prices, and process orders, and we show you how." },
      { question: "Can you connect the store to my existing systems?", answer: "Possibly. Integrations with inventory, accounting, or delivery tools are assessed per project depending on what those systems support." },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    inquiryName: "Custom Software Development",
    pillar: "build",
    summary:
      "Software tailored to your workflows and requirements when off-the-shelf tools are not enough.",
    seoTitle: "Custom Software & Web App Development | EVCodelabs",
    seoDescription:
      "Custom web and mobile software built around your workflows when standard tools do not fit. Discuss your requirements with EVCodelabs.",
    heroTitle: "Software built around how your business actually works.",
    intro:
      "When spreadsheets and ready-made tools no longer fit, we design and develop web or mobile applications tailored to your processes, users, and requirements.",
    audience:
      "For businesses with specific operational needs — internal tools, customer portals, or industry workflows — that standard software does not handle well.",
    challenges: [
      "Your team works around tools that do not match your process.",
      "Critical information lives in spreadsheets that are hard to share and keep accurate.",
      "You are paying for several tools that each solve part of the problem.",
      "You have an idea for a product or platform and need it built properly.",
    ],
    included: [
      "Requirements discovery and documenting what the software must do",
      "User flows and interface design",
      "Development of the agreed features in stages",
      "Testing of each stage before release",
      "Deployment and documentation for handover",
    ],
    dependsOnProject: [
      "Mobile apps for app stores",
      "Integrations with existing systems or third-party services",
      "Data migration from current tools",
      "Hosting, monitoring, and long-term maintenance",
    ],
    process: [
      { title: "Discover requirements", description: "We map how your work happens today and what the software needs to do." },
      { title: "Define the first version", description: "We agree on a focused first release so you get value sooner." },
      { title: "Design and develop in stages", description: "We build in steps and review each one with you." },
      { title: "Test and release", description: "We test with realistic scenarios and deploy the agreed version." },
      { title: "Support and improve", description: "We agree on maintenance and plan further improvements based on real use." },
    ],
    related: ["business-automation", "business-analytics", "ai-solutions", "technical-support"],
    faqs: [
      { question: "How do I know if I need custom software?", answer: "If existing tools force workarounds that cost time or cause errors, custom software may help. We will also tell you if an existing product would serve you better." },
      { question: "Do you build the whole system at once?", answer: "We usually recommend starting with a focused first version, then improving it based on how it is used." },
      { question: "Who owns the software?", answer: "Ownership and licensing are agreed in the project agreement before work starts." },
    ],
  },
  {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    inquiryName: "SEO",
    pillar: "grow",
    summary:
      "Improve your website's technical foundations, content relevance, and search visibility for people looking for what you offer.",
    seoTitle: "SEO Services for Businesses in Kenya | EVCodelabs",
    seoDescription:
      "Practical SEO: technical fixes, content aligned with what people search for, and clear on-page structure. No ranking guarantees — just sound, measurable work.",
    heroTitle: "Help the right people find your website through search.",
    intro:
      "SEO (search engine optimization) is the work of making your website easier for search engines to understand and more useful for people searching for your products or services.",
    audience:
      "For businesses with a website that receives little search traffic, or that are planning new pages and want them built with search in mind.",
    challenges: [
      "Your pages rarely appear when people search for what you offer.",
      "Pages do not clearly match what potential customers are searching for.",
      "Technical issues — slow pages, missing titles, broken links — make your site harder to understand.",
      "You are unsure which pages bring visitors and which do not.",
    ],
    included: [
      "A review of your website's technical health and on-page structure",
      "Research into the terms your potential customers use",
      "Improvements to page titles, descriptions, headings, and internal links",
      "Recommendations for new or improved content",
      "Setup guidance for Google Search Console where you have access",
    ],
    dependsOnProject: [
      "Ongoing content writing",
      "Website development changes needed to fix deeper technical issues",
      "Regular monitoring and reporting",
    ],
    process: [
      { title: "Understand your goals", description: "We discuss your services, customers, and which searches matter most to your business." },
      { title: "Review the website", description: "We assess technical issues, content, and how well pages match search intent." },
      { title: "Prioritise", description: "We agree on the changes most likely to help, in a practical order." },
      { title: "Implement", description: "We carry out the agreed improvements or work alongside your developer." },
      { title: "Monitor and refine", description: "Where agreed, we review search data over time and adjust the plan." },
    ],
    related: ["local-seo", "website-development", "social-media-management", "business-analytics"],
    faqs: [
      { question: "Can you guarantee first-page rankings?", answer: "No. Search engines decide rankings, and anyone guaranteeing them is overpromising. We focus on improvements that make your site easier to find and more useful." },
      { question: "How long does SEO take to show results?", answer: "It varies with your website, competition, and the work done. Changes typically take time to be reflected in search, which is why we track progress rather than promise dates." },
      { question: "Do I need a new website for SEO?", answer: "Not necessarily. Many improvements can be made to an existing site. If the platform limits what is possible, we will explain the trade-offs." },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    inquiryName: "Social Media Management",
    pillar: "grow",
    summary:
      "Plan and manage your social media presence with relevant content, consistent communication, and audience engagement.",
    seoTitle: "Social Media Management for Businesses | EVCodelabs",
    seoDescription:
      "Plan, create, and manage consistent social media content for your business. EVCodelabs helps you communicate clearly and engage the right audience.",
    heroTitle: "A consistent social media presence without the daily scramble.",
    intro:
      "We help you plan what to post, prepare content that reflects your brand, and keep your social channels active and consistent.",
    audience:
      "For businesses that know social media matters but struggle to post consistently or are unsure what to share.",
    challenges: [
      "Posting happens only when someone remembers.",
      "Content does not reflect your brand or explain what you offer.",
      "You are on several platforms without a clear purpose for each.",
      "Messages and comments go unanswered for too long.",
    ],
    included: [
      "Choosing the platforms that suit your audience",
      "A content plan and posting calendar",
      "Content preparation aligned with your brand",
      "Scheduling and publishing agreed posts",
      "Periodic review of what is working",
    ],
    dependsOnProject: [
      "Paid advertising campaigns",
      "Photography or video production",
      "Responding to messages and comments on your behalf",
    ],
    process: [
      { title: "Understand your audience", description: "We discuss who you want to reach and what you want them to know." },
      { title: "Plan content", description: "We agree on platforms, themes, and a realistic posting rhythm." },
      { title: "Create and schedule", description: "We prepare posts for your approval and schedule them." },
      { title: "Review", description: "We look at engagement and adjust the plan where useful." },
    ],
    related: ["branding", "seo", "local-seo"],
    faqs: [
      { question: "Which platforms should my business be on?", answer: "The ones your customers actually use. We will recommend a focused set rather than every platform." },
      { question: "Do I approve posts before they go out?", answer: "Yes. We agree on an approval process at the start." },
      { question: "Will this increase my sales?", answer: "Consistent, relevant content can help people discover and trust your business, but we cannot guarantee sales outcomes." },
    ],
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Business Profile",
    inquiryName: "Local SEO & Google Business Profile",
    pillar: "grow",
    summary:
      "Improve your local search presence and keep your business information accurate so nearby customers can find you.",
    seoTitle: "Local SEO & Google Business Profile Setup | EVCodelabs",
    seoDescription:
      "Set up and improve your Google Business Profile and local search presence so nearby customers find accurate information about your business.",
    heroTitle: "Make it easier for nearby customers to find you.",
    intro:
      "Local SEO helps eligible businesses with a physical location or service area appear in local searches and on maps, with accurate, up-to-date information.",
    audience:
      "For shops, clinics, restaurants, service providers, and other businesses that serve customers in a specific area.",
    challenges: [
      "Your business does not appear on maps or local searches.",
      "Opening hours, phone numbers, or addresses are wrong or inconsistent online.",
      "You have a Google Business Profile but it is incomplete or unmanaged.",
      "Customers struggle to find directions or contact details.",
    ],
    included: [
      "Setting up or claiming your Google Business Profile (you must be eligible and have access)",
      "Completing categories, services, hours, and descriptions accurately",
      "Checking business information is consistent across key listings",
      "Local relevance improvements to your website pages",
      "Guidance on asking real customers for reviews — we never create reviews",
    ],
    dependsOnProject: [
      "Regular profile posts and updates",
      "Managing multiple locations",
      "Website changes for location or service-area pages",
    ],
    process: [
      { title: "Check eligibility and access", description: "We confirm your business qualifies for a profile and who controls existing listings." },
      { title: "Audit current listings", description: "We review your profile and other listings for missing or inconsistent details." },
      { title: "Update and optimise", description: "We complete and correct your information and improve local relevance." },
      { title: "Maintain", description: "Where agreed, we keep information current and review local search activity." },
    ],
    related: ["seo", "website-development", "social-media-management"],
    faqs: [
      { question: "Can every business have a Google Business Profile?", answer: "Not every business is eligible. Google requires in-person contact with customers at a location or within a service area. We will check before starting." },
      { question: "Can you get us more reviews?", answer: "We can help you set up an easy, honest way to ask real customers for reviews. We do not write, buy, or fake reviews." },
      { question: "Do I need a website for local SEO?", answer: "A profile can exist without one, but a website with accurate, relevant information usually strengthens your local presence." },
    ],
  },
  {
    slug: "whatsapp-email-automation",
    name: "WhatsApp & Email Automation",
    inquiryName: "WhatsApp & Email Automation",
    pillar: "automate",
    summary:
      "Streamline customer messages, follow-ups, and notifications using suitable WhatsApp and email tools.",
    seoTitle: "WhatsApp & Email Automation for Businesses | EVCodelabs",
    seoDescription:
      "Automate routine customer messages, follow-ups, and notifications through WhatsApp and email — set up responsibly and within each platform's rules.",
    heroTitle: "Timely customer messages without sending each one by hand.",
    intro:
      "We help you automate routine communication — confirmations, reminders, follow-ups, and updates — through WhatsApp and email, so customers hear from you consistently.",
    audience:
      "For businesses that send the same kinds of messages repeatedly and want them to be faster, consistent, and less dependent on memory.",
    challenges: [
      "Follow-ups are missed because they depend on someone remembering.",
      "Your team types the same replies and updates many times a day.",
      "Customers do not receive confirmations or reminders consistently.",
      "Enquiries from your website are not acknowledged quickly.",
    ],
    included: [
      "Identifying which messages are suitable to automate",
      "Writing clear message templates with you",
      "Setting up automated email sequences or notifications",
      "Connecting triggers such as form submissions or bookings to messages",
      "Testing each message flow before it goes live",
    ],
    dependsOnProject: [
      "WhatsApp Business Platform access, which requires approval and may carry provider fees",
      "Email service provider selection and domain configuration",
      "Integration with your CRM, store, or booking system",
    ],
    process: [
      { title: "Map your messages", description: "We list the messages you send, when, and to whom." },
      { title: "Choose suitable tools", description: "We recommend tools that fit your volume, budget, and platform rules." },
      { title: "Set up flows", description: "We build templates and triggers for the agreed messages." },
      { title: "Test", description: "We test every flow with real scenarios before switching it on." },
      { title: "Review", description: "We check results and adjust wording or timing where needed." },
    ],
    related: ["business-automation", "booking-automation", "ai-solutions"],
    faqs: [
      { question: "Can you send bulk WhatsApp messages to any number?", answer: "No. WhatsApp has strict rules on consent and message types. We set up automation that follows the platform's policies." },
      { question: "Will customers know messages are automated?", answer: "Messages are written to be clear and helpful. We recommend always giving customers an easy way to reach a person." },
      { question: "Are there ongoing costs?", answer: "Messaging and email platforms may charge their own fees depending on volume. We will explain these before setup." },
    ],
  },
  {
    slug: "business-automation",
    name: "Business Process Automation",
    inquiryName: "Business Process Automation",
    pillar: "automate",
    summary:
      "Connect your systems and automate suitable repetitive workflows to reduce manual work and improve consistency.",
    seoTitle: "Business Process & Workflow Automation | EVCodelabs",
    seoDescription:
      "Identify repetitive workflows and connect your tools to reduce manual data entry, improve consistency, and save your team time. Discuss automation with EVCodelabs.",
    heroTitle: "Less copying, pasting, and chasing — more consistent operations.",
    intro:
      "We look at how work moves through your business, find the repetitive steps that tools can handle reliably, and connect your systems so information flows without manual re-entry.",
    audience:
      "For teams spending noticeable time on data entry, status updates, or moving information between tools.",
    challenges: [
      "The same information is typed into several systems.",
      "Tasks fall through the cracks between people or tools.",
      "Processes work differently depending on who handles them.",
      "Reports take hours to assemble by hand.",
    ],
    included: [
      "Reviewing current workflows and identifying automation opportunities",
      "Recommending which steps are worth automating — and which are not",
      "Connecting your existing tools where they support it",
      "Setting up CRM pipelines or task workflows where relevant",
      "Documentation of each automation and how to adjust it",
    ],
    dependsOnProject: [
      "Custom integrations for tools without ready connections",
      "New CRM or platform setup",
      "Data clean-up before automation",
    ],
    process: [
      { title: "Map the workflow", description: "We walk through the process step by step with the people who do it." },
      { title: "Choose what to automate", description: "We prioritise steps that are repetitive, rule-based, and worth the effort." },
      { title: "Build and connect", description: "We configure the automation and connect the relevant tools." },
      { title: "Test with real cases", description: "We run realistic examples and fix edge cases." },
      { title: "Hand over", description: "We document the automation and agree on who maintains it." },
    ],
    related: ["whatsapp-email-automation", "booking-automation", "custom-software-development", "ai-solutions"],
    faqs: [
      { question: "Which processes can be automated?", answer: "Usually those that are repetitive and follow clear rules. Work that needs judgement often benefits more from better tools than full automation." },
      { question: "Do I need new software?", answer: "Not always. We start with the tools you already use and only recommend new ones when they clearly help." },
      { question: "What happens if an automation fails?", answer: "We build in sensible checks and notifications where possible and document how to resolve common issues." },
    ],
  },
  {
    slug: "booking-automation",
    name: "Booking & Scheduling Automation",
    inquiryName: "Booking & Scheduling Automation",
    pillar: "automate",
    summary:
      "Organise appointments, availability, confirmations, and reminders in one dependable booking workflow.",
    seoTitle: "Online Booking & Scheduling Automation | EVCodelabs",
    seoDescription:
      "Let customers book online, receive confirmations and reminders automatically, and keep your calendar organised. EVCodelabs sets up practical booking systems.",
    heroTitle: "Let customers book without the back-and-forth.",
    intro:
      "We set up booking systems that show your real availability, let customers book online, and send confirmations and reminders automatically.",
    audience:
      "For salons, clinics, consultants, trainers, and other appointment-based businesses.",
    challenges: [
      "Booking appointments takes several messages or calls.",
      "Double bookings or missed appointments happen regularly.",
      "Customers forget appointments because reminders are not sent.",
      "Staff calendars are managed in different places.",
    ],
    included: [
      "Defining your services, durations, and availability rules",
      "Setting up an online booking page or website booking",
      "Automated confirmations and reminders",
      "Calendar syncing for you or your team",
      "Testing the full booking journey",
    ],
    dependsOnProject: [
      "Online deposits or payments at booking",
      "WhatsApp reminders (subject to platform approval)",
      "Multi-location or large team scheduling",
    ],
    process: [
      { title: "Understand your bookings", description: "We discuss your services, staff, hours, and cancellation needs." },
      { title: "Select the tool", description: "We recommend a suitable booking platform or custom option." },
      { title: "Configure", description: "We set up services, availability, notifications, and calendars." },
      { title: "Test and launch", description: "We make test bookings and then publish the booking page." },
    ],
    related: ["whatsapp-email-automation", "business-automation", "website-development"],
    faqs: [
      { question: "Can booking be added to my existing website?", answer: "In most cases, yes — either embedded on a page or linked from clear booking buttons." },
      { question: "Can customers reschedule or cancel themselves?", answer: "Most booking tools support this. We set it up according to your policies." },
      { question: "Can I take deposits when customers book?", answer: "It depends on the tool and payment providers available to you. We assess this during planning." },
    ],
  },
  {
    slug: "ai-solutions",
    name: "AI Solutions & Integrations",
    inquiryName: "AI Solutions & Integrations",
    pillar: "scale",
    summary:
      "Find practical, responsible ways to use AI in your workflows, information handling, and customer interactions.",
    seoTitle: "AI Solutions & Integrations for Business | EVCodelabs",
    seoDescription:
      "Practical AI integrations for business workflows — document processing, assistants, and content support — assessed for real usefulness, accuracy, and privacy.",
    heroTitle: "Practical AI that supports your team, not hype.",
    intro:
      "We help you identify where AI can genuinely help — summarising information, drafting responses, sorting requests — and integrate it into your workflows with appropriate checks.",
    audience:
      "For businesses curious about AI that want a grounded assessment of what is useful for their situation.",
    challenges: [
      "You hear about AI but are unsure where it fits in your business.",
      "Your team spends time reading, sorting, or summarising large amounts of information.",
      "Customers ask similar questions that could be answered faster.",
      "You are concerned about accuracy and data privacy when using AI tools.",
    ],
    included: [
      "Identifying realistic AI use cases for your workflows",
      "Assessing risks around accuracy, privacy, and data handling",
      "Building or integrating AI features into existing tools or software",
      "Human review steps where accuracy matters",
      "Testing with realistic examples before rollout",
    ],
    dependsOnProject: [
      "AI provider usage costs, which vary with volume",
      "Custom assistants trained on your business documents",
      "Integration with customer-facing channels",
    ],
    process: [
      { title: "Explore use cases", description: "We discuss where time is spent and where AI could realistically help." },
      { title: "Assess suitability", description: "We consider accuracy needs, data sensitivity, and cost before recommending anything." },
      { title: "Prototype", description: "We build a small version to test usefulness with real examples." },
      { title: "Integrate and review", description: "If it proves useful, we integrate it properly with appropriate oversight." },
    ],
    related: ["business-automation", "business-analytics", "custom-software-development"],
    faqs: [
      { question: "Will AI replace my staff?", answer: "That is not our approach. We focus on helping your team spend less time on repetitive information work." },
      { question: "Is my business data safe with AI tools?", answer: "Data handling depends on the provider and setup. We discuss what data is used, where it goes, and choose options suited to its sensitivity." },
      { question: "Is AI always accurate?", answer: "No. AI can make mistakes, which is why we include human review where errors would matter." },
    ],
  },
  {
    slug: "business-analytics",
    name: "Business Analytics & Dashboards",
    inquiryName: "Business Analytics & Dashboards",
    pillar: "scale",
    summary:
      "Turn scattered business data into clear reports and dashboards that support better-informed decisions.",
    seoTitle: "Business Analytics & Dashboard Development | EVCodelabs",
    seoDescription:
      "Bring business data from different tools into clear dashboards and reports so your team can monitor key measures and make better-informed decisions.",
    heroTitle: "See what is happening in your business at a glance.",
    intro:
      "We organise data from your sales, website, and operational tools into clear dashboards and reports focused on the measures that matter to you.",
    audience:
      "For owners and teams who make decisions from scattered spreadsheets or have data they never have time to analyse.",
    challenges: [
      "Information is spread across spreadsheets, apps, and inboxes.",
      "Preparing reports takes hours each week or month.",
      "Different people report different numbers for the same thing.",
      "You are unsure which numbers actually indicate how the business is doing.",
    ],
    included: [
      "Agreeing on the key questions and measures that matter",
      "Identifying and connecting the relevant data sources",
      "Building dashboards and recurring reports",
      "Website analytics setup and review where relevant",
      "Guidance on reading and using the dashboards",
    ],
    dependsOnProject: [
      "Data clean-up or restructuring",
      "Integrations with systems that lack export options",
      "Automated scheduled reports",
    ],
    process: [
      { title: "Define the questions", description: "We start with what you need to know, not with the data." },
      { title: "Locate the data", description: "We identify where the information lives and how reliable it is." },
      { title: "Build the dashboard", description: "We connect sources and design clear, readable views." },
      { title: "Review together", description: "We walk through the results and refine what is shown." },
    ],
    related: ["custom-software-development", "ai-solutions", "business-automation", "seo"],
    faqs: [
      { question: "What data sources can you connect?", answer: "Common sources include spreadsheets, online stores, accounting tools, and website analytics. Others are assessed per project." },
      { question: "Do I need a lot of data to benefit?", answer: "No. Even a few well-chosen measures, presented clearly, can be more useful than large unused datasets." },
      { question: "Can my team update the dashboard?", answer: "Dashboards are typically set up to refresh from your data automatically or with simple steps we document." },
    ],
  },
  {
    slug: "technical-support",
    name: "Technical Support & Maintenance",
    inquiryName: "Technical Support & Maintenance",
    pillar: "scale",
    summary:
      "Keep your websites, software, and digital systems secure, working, and improving with dependable support.",
    seoTitle: "Website & Software Maintenance and Support | EVCodelabs",
    seoDescription:
      "Ongoing maintenance, troubleshooting, and improvements for your website, store, or software — with support arrangements agreed to fit your needs.",
    heroTitle: "Dependable support for the systems your business relies on.",
    intro:
      "We help keep your website, online store, or software up to date, troubleshoot problems, and make improvements, under a support arrangement agreed with you.",
    audience:
      "For businesses that depend on digital systems but do not have in-house technical staff to maintain them.",
    challenges: [
      "Your site or software has not been updated in a long time.",
      "Something breaks and there is no one to call.",
      "Small improvements pile up because no one has time to make them.",
      "You are unsure whether backups and security updates are in place.",
    ],
    included: [
      "A review of the current state of your system",
      "Agreed updates, fixes, and small improvements",
      "Troubleshooting reported issues",
      "Backup and update checks where we have access",
      "Clear communication about what was done",
    ],
    dependsOnProject: [
      "Support for systems built by others (assessed after review)",
      "Response times and support hours, agreed per arrangement",
      "Larger new features, scoped separately",
    ],
    process: [
      { title: "Review your system", description: "We assess how it was built, its current condition, and any urgent issues." },
      { title: "Agree the arrangement", description: "We agree what support covers, how to request help, and associated costs." },
      { title: "Maintain and fix", description: "We carry out updates and resolve issues as agreed." },
      { title: "Recommend improvements", description: "We highlight risks and opportunities as we work on your system." },
    ],
    related: ["website-development", "ecommerce-development", "custom-software-development"],
    faqs: [
      { question: "Can you support a website you did not build?", answer: "Often, yes. We review it first to understand how it was built before agreeing what support is realistic." },
      { question: "Is support a monthly arrangement?", answer: "It can be ongoing or as-needed. We agree on the arrangement that suits your system and budget." },
      { question: "Do you offer guaranteed response times?", answer: "Any response commitments are agreed explicitly in the support arrangement; we do not assume them by default." },
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesByPillar(pillar: PillarId) {
  return services.filter((service) => service.pillar === pillar);
}

export function isPillarId(value: unknown): value is PillarId {
  return typeof value === "string" && (pillarIds as readonly string[]).includes(value);
}

export function serviceEmailHref(service: Service) {
  const subject = `${service.inquiryName} Inquiry — EVCodelabs`;
  const body = [
    "Hello EVCodelabs,",
    "",
    `I would like to discuss ${service.inquiryName} services for my business.`,
    "",
    "Business name:",
    "Website (if available):",
    "Main goal or challenge:",
    "",
    "I would appreciate learning more about the suitable next steps.",
    "",
    "Thank you.",
  ].join("\n");
  return `mailto:${siteContent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Undefined when no verified WhatsApp number is configured — callers must render nothing. */
export function serviceWhatsappHref(service: Service): string | undefined {
  if (!siteContent.whatsapp) return undefined;
  const text = `Hello EVCodelabs, I would like to discuss ${service.inquiryName} for my business. My main goal is...`;
  return `https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent(text)}`;
}
