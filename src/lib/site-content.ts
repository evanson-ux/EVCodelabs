export const siteContent = {
  name: "EVCodelabs",
  email: "evcodelabs01@gmail.com",
  whatsapp: null,
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "YOUR DIGITAL GROWTH PARTNER",
    title: "Turn your digital potential into business growth.",
    description: "We help businesses build a strong online presence, reach more customers, automate everyday work, and grow with practical digital solutions tailored to their goals.",
    primaryAction: "Discuss a Project",
    secondaryAction: "Explore Our Services",
  },
  services: {
    title: "Everything you need to move your business forward.",
    description: "Whether you're starting out, improving an existing business, or preparing to scale, we help you identify and implement the digital solutions that make sense for your goals.",
    action: "Not sure what your business needs? Let's work it out together.",
    items: [
      { name: "BUILD", description: "Create the digital foundations your business needs to stand out and operate online.", services: "Branding, website design and development, e-commerce, web and mobile applications, custom software, and UI/UX design." },
      { name: "GROW", description: "Help more of the right people discover your business and take action.", services: "SEO, local SEO, Google Business Profile, social media management, content, paid advertising, and lead generation." },
      { name: "AUTOMATE", description: "Reduce repetitive tasks and make everyday business processes more efficient.", services: "Workflow automation, CRM systems, WhatsApp and email automation, booking systems, notifications, and reporting." },
      { name: "SCALE", description: "Improve your digital systems as your business, customers, and needs grow.", services: "AI integrations, business analytics, system integrations, performance optimization, advanced software, and ongoing technical support." },
    ],
  },
  approach: {
    title: "Technology should simplify business, not complicate it.",
    description: "Every business has different goals, challenges, and opportunities. We start by understanding yours, then identify the right digital solutions to help you move forward.",
    steps: ["Understand your business.", "Find the right solution.", "Build and improve."],
  },
  caseStudies: {
    title: "Real challenges. Practical solutions. Meaningful progress.",
    description: "Explore how we approach business challenges, turn ideas into digital solutions, and improve the way businesses work online.",
    emptyTitle: "No approved case studies yet",
    emptyDescription: "Case studies will appear here when project details are approved for sharing.",
  },
  process: {
    title: "From your idea to a practical solution.",
    steps: [
      { title: "Let's Talk", description: "understand the business, goals, and challenges." },
      { title: "Plan the Solution", description: "agree on scope, priorities, timeline, and cost." },
      { title: "Build and Deliver", description: "create and review the agreed solution." },
      { title: "Improve and Grow", description: "offer ongoing improvements and support where agreed." },
    ],
  },
  faqs: [
    { question: "What services does EVCodelabs provide?", answer: "We help businesses build their online presence, attract customers, improve processes, and grow using services such as website development, SEO, branding, software development, automation, AI integration, and digital marketing." },
    { question: "Who do you work with?", answer: "We work with startups, small businesses, service providers, personal brands, e-commerce businesses, and established organizations." },
    { question: "Do I need to know exactly what service I need?", answer: "No. Tell us about your goals or challenges, and we can discuss which solutions may be suitable for your business." },
    { question: "Can you work with businesses outside Kenya?", answer: "Yes. EVCodelabs aims to serve businesses in Kenya and international markets. Delivery arrangements depend on the project and service required." },
    { question: "How much do your services cost?", answer: "Pricing depends on the work involved, required features, and project scope. Contact us to discuss your needs and receive a proposal." },
    { question: "Do you provide support after a project is completed?", answer: "Support and maintenance can be discussed and included in the project agreement where required." },
  ],
  contact: {
    title: "Ready to move your business forward?",
    description: "Whether you need to establish your online presence, reach more customers, improve your systems, or explore a new idea, let's talk about what your business needs.",
    action: "Start a Conversation",
  },
} as const;

export type NavigationItem = { label: string; href: `#${string}` };
export type FaqItem = { question: string; answer: string };

// Contacts are deliberately not linked in the foundation preview.
// Phase 2 can supply approved destinations to the shared presentation controls.