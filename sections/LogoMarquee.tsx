"use client";

import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const brands = [
  {
    name: "HubSpot",
    icon: "/assets/brands/hubspot-svgrepo-com.svg",
  },
  {
    name: "Slack",
    icon: "/assets/brands/slack-svgrepo-com.svg",
  },
  {
    name: "WhatsApp",
    icon: "/assets/brands/whatsapp-svgrepo-com.svg",
  },
  {
    name: "Salesforce",
    icon: "/assets/brands/salesforce-2-logo-svgrepo-com.svg",
  },
  {
    name: "n8n",
    icon: "/assets/brands/n8n-color.svg",
  },
  {
    name: "Notion",
    icon: "/assets/brands/notion-logo-svgrepo-com.svg",
  },
  {
    name: "Google Drive",
    icon: "/assets/brands/google-drive-svgrepo-com.svg",
  },
  {
    name: "Airtable",
    icon: "/assets/brands/airtable-svgrepo-com.svg",
  },
  {
    name: "Stripe",
    icon: "/assets/brands/stripe-svgrepo-com.svg",
  },
  {
    name: "Gmail",
    icon: "/assets/brands/gmail-svgrepo-com.svg",
  },
  {
    name: "Shopify",
    icon: "/assets/brands/shopify-color-svgrepo-com.svg",
  },
  {
    name: "WordPress",
    icon: "/assets/brands/wordpress-svgrepo-com.svg",
  },
  {
    name: "Twilio",
    icon: "/assets/brands/twilio-icon-svgrepo-com.svg",
  },
  {
    name: "OpenAI",
    icon: "/assets/brands/openai-svgrepo-com.svg",
  },
  {
    name: "Discord",
    icon: "/assets/brands/discord-icon-svgrepo-com.svg",
  },
  {
    name: "Instagram",
    icon: "/assets/brands/instagram-1-svgrepo-com.svg",
  },
  { name: "AWS", icon: "/assets/brands/aws-svgrepo-com.svg" },
  {
    name: "Zapier",
    icon: "/assets/brands/zapier-icon-svgrepo-com.svg",
  },
];

function LogoChip({ name, icon }: { name: string; icon: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 px-5 py-2.5 rounded-full",
        "border border-slate-200 dark:border-slate-700/50",
        "bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm",
        "hover:border-[#6A6DE9]/50 transition-all duration-300 cursor-default select-none",
      )}
    >
      <img src={icon} alt={name} className="w-5 h-5" />
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  const half = Math.ceil(brands.length / 2);
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-sm text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase">
          Integrations We Work With
        </p>
        <h3 className="mt-2 text-xl font-semibold text-slate-700 dark:text-slate-200">
          500+ Apps. Seamlessly Connected.
        </h3>
      </div>
      <div className="space-y-4">
        <Marquee pauseOnHover className="[--duration:40s]">
          {brands.slice(0, half).map((l) => (
            <LogoChip key={l.name} {...l} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {brands.slice(half).map((l) => (
            <LogoChip key={l.name} {...l} />
          ))}
        </Marquee>
      </div>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l" />
    </section>
  );
}
