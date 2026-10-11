export const siteContent = {
  name: "EVCodelabs",
  email: "evcodelabs01@gmail.com",
  /** Verified WhatsApp number in international digits only, e.g. "2547XXXXXXXX". null = inactive. */
  whatsapp: "254740507511" as string | null,
  /** Confirmed production origin. null = no canonical/sitemap URLs. */
  siteUrl: "https://www.evcodelabs.co.ke",
  navigation: [
    { label: "Services", href: "#services" },
    { label: "Our Approach", href: "#approach" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "YOUR DIGITAL GROWTH PARTNER",
    title: "Turn your digital potential into business growth.",
    description:
      "We help businesses build a strong online presence, reach more customers, automate everyday work, and grow with practical digital solutions tailored to their goals.",
    primaryAction: "Discuss a Project",
    secondaryAction: "Explore Our Services",
  },
  services: {
    title: "Everything you need to move your business forward.",
    description:
      "Whether you're starting out, improving an existing business, or preparing to scale, we help you identify and implement the digital solutions that make sense for your goals.",
    action: "Not sure what your business needs? Let's work it out together.",
    items: [
      {
        name: "BUILD",
        description:
          "Create the digital foundations your business needs to stand out and operate online.",
        services: [
          "Branding",
          "Website design and development",
          "E-commerce",
          "Web and mobile apps",
          "Custom software",
          "UI/UX design",
        ],
      },
      {
        name: "GROW",
        description: "Help more of the right people discover your business and take action.",
        services: [
          "SEO",
          "Local SEO",
          "Google Business Profile",
          "Social media management",
          "Content creation",
          "Paid advertising",
          "Lead generation",
        ],
      },
      {
        name: "AUTOMATE",
        description: "Reduce repetitive tasks and make everyday business processes more efficient.",
        services: [
          "Workflow automation",
          "CRM systems",
          "WhatsApp and email automation",
          "Booking systems",
          "Notifications",
          "Reporting",
        ],
      },
      {
        name: "SCALE",
        description: "Improve your digital systems as your business, customers, and needs grow.",
        services: [
          "AI integrations",
          "Business analytics",
          "System integrations",
          "Performance optimization",
          "Advanced software",
          "Ongoing technical support",
        ],
      },
    ],
  },
  approach: {
    title: "Technology should simplify business, not complicate it.",
    description:
      "Every business has different goals, challenges, and opportunities. We start by understanding yours, then identify the right digital solutions to help you move forward.",
    steps: ["Understand your business", "Find the right solution", "Build and improve"],
  },
  caseStudies: {
    title: "Real challenges. Practical solutions. Meaningful progress.",
    description:
      "Explore how we approach business challenges, turn ideas into digital solutions, and improve the way businesses work online.",
    emptyTitle: "No approved case studies yet",
    emptyDescription:
      "Case studies will appear here when project details are approved for sharing.",
  },
  process: {
    title: "From your idea to a practical solution.",
    steps: [
      {
        title: "Let's Talk",
        description: "Understand your business, goals, challenges, and ideas.",
      },
      {
        title: "Plan the Solution",
        description: "Identify a practical approach that fits your needs.",
      },
      {
        title: "Build and Deliver",
        description: "Develop and implement the agreed solution.",
      },
      {
        title: "Improve and Grow",
        description: "Provide appropriate follow-up support and identify opportunities to improve.",
      },
    ],
  },
  faqs: [
    {
      question: "What services does EVCodelabs provide?",
      answer:
        "We help businesses build their online presence, attract customers, improve processes, and grow using services such as website development, SEO, branding, software development, automation, AI integration, and digital marketing.",
    },
    {
      question: "Who do you work with?",
      answer:
        "We work with startups, small businesses, service providers, personal brands, e-commerce businesses, agencies, and established organizations.",
    },
    {
      question: "Do I need to know exactly what service I need?",
      answer:
        "No. Tell us about your goals or challenges, and we can discuss which solutions may be suitable for your business.",
    },
    {
      question: "Can you work with businesses outside Kenya?",
      answer:
        "Yes. EVCodelabs aims to serve businesses in Kenya and international markets. Delivery arrangements depend on the project and service required.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Pricing depends on the work involved, required features, and project scope. Contact us to discuss your needs and receive a proposal.",
    },
    {
      question: "Do you provide support after a project is completed?",
      answer:
        "Support and maintenance can be discussed and included in the project agreement where required.",
    },
  ],
  contact: {
    title: "Ready to move your business forward?",
    description:
      "Whether you need to establish your online presence, reach more customers, improve your systems, or explore a new idea, let's talk about what your business needs.",
    action: "Start a Conversation",
  },
  contactModal: {
    title: "Discuss a Project",
    description: "Tell us about your project and we'll get back to you within one business day.",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Work Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Project Details",
    messagePlaceholder: "Hello EVCodelabs, I'd like to discuss a project for my business.",
    submitLabel: "Send Message",
    submittingLabel: "Sending…",
    successTitle: "Message Sent",
    successDescription:
      "Thanks for reaching out. We'll review your project details and respond soon.",
    errorTitle: "Something Went Wrong",
    errorDescription: "Please try again Email Us Directly at evcodelabs01@gmail.com.",
    mailtoFallback: "Email Us Directly",
    validation: {
      nameRequired: "Please enter your name",
      emailRequired: "Please enter your email",
      emailInvalid: "Please enter a valid email address",
      messageRequired: "Please describe your project",
    },
  },
} as const;

export type NavigationItem = { label: string; href: `#${string}` };
export type FaqItem = { question: string; answer: string };

export const emailInquiryHref = `mailto:${siteContent.email}?subject=${encodeURIComponent("Project inquiry — EVCodelabs")}&body=${encodeURIComponent("Hello EVCodelabs,\n\nI'd like to discuss a project.\n\nMy business:\nMy goals or challenges:\nThe solution I have in mind (if any):\n\nThank you.")}`;

/** Becomes a working WhatsApp link only once siteContent.whatsapp holds a verified number. */
export const whatsappInquiryHref: string | undefined = siteContent.whatsapp
  ? `https://wa.me/${siteContent.whatsapp}?text=${encodeURIComponent("Hello EVCodelabs, I'd like to discuss a project for my business.")}`
  : undefined;
