import { CheckIcon, XIcon } from "lucide-react";

export const pricingData = [
  {
    title: "Starter",
    price: "499",
    period: "one-time",
    subtitle: "Perfect for automating your first workflow",
    features: [
      {
        name: "1 n8n workflow automation",
        icon: CheckIcon,
      },
      {
        name: "Up to 5 app integrations",
        icon: CheckIcon,
      },
      {
        name: "Basic error monitoring",
        icon: CheckIcon,
      },
      {
        name: "2 weeks of post-launch support",
        icon: CheckIcon,
      },
      {
        name: "Documentation & training",
        icon: CheckIcon,
      },
      {
        name: "AI agent development",
        icon: XIcon,
        disabled: true,
      },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Growth",
    price: "999",
    period: "one-time",
    subtitle: "For businesses ready to scale with AI",
    mostPopular: true,
    features: [
      {
        name: "3 workflow automations",
        icon: CheckIcon,
      },
      {
        name: "Unlimited app integrations",
        icon: CheckIcon,
      },
      {
        name: "1 custom AI agent",
        icon: CheckIcon,
      },
      {
        name: "24/7 monitoring & alerts",
        icon: CheckIcon,
      },
      {
        name: "30 days post-launch support",
        icon: CheckIcon,
      },
      {
        name: "Monthly performance reports",
        icon: CheckIcon,
      },
    ],
    buttonText: "Book a Call",
  },
  {
    title: "Enterprise",
    price: "Custom",
    period: "",
    subtitle: "Full-stack automation for large teams",
    features: [
      {
        name: "Unlimited automations",
        icon: CheckIcon,
      },
      {
        name: "Multiple AI agents",
        icon: CheckIcon,
      },
      {
        name: "Voice AI agent setup",
        icon: CheckIcon,
      },
      {
        name: "Dedicated account manager",
        icon: CheckIcon,
      },
      {
        name: "SLA guarantee (99.9% uptime)",
        icon: CheckIcon,
      },
      {
        name: "Custom integrations & API dev",
        icon: CheckIcon,
      },
    ],
    buttonText: "Contact Us",
  },
];
