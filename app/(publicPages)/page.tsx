"use client";
import "./style.css";
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { featuresData } from "@/data/featuresData";
import { FaqSection } from "@/sections/FaqSection";
import Pricing from "@/sections/Pricing";
import ServicesSection from "@/sections/ServicesSection";
import HowItWorks from "@/sections/HowItWorks";
import StatsSection from "@/sections/StatsSection";
import LogoMarquee from "@/sections/LogoMarquee";
import CTASection from "@/sections/CTASection";
import { VideoIcon, CalendarIcon } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Testimonials } from "@/components/testimonials";
import { ContactModel } from "@/components/contact-model";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/sections/hero";

export default function Page() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();
  return (
    <>
      <Header onOpenDialog={() => setOpen(true)} />
      <ContactModel open={open} onOpenChange={setOpen} />
      {/* ─── Hero Section ─── */}
      <Hero onOpenDialog={() => setOpen(true)} />

      {/* ─── Integration Logos Marquee ─── */}
      <LogoMarquee />

      {/* ─── Services Deep Dive ─── */}
      <ServicesSection />

      {/* ─── Features Grid ─── */}
      <SectionTitle
        text1="CAPABILITIES"
        text2="Everything You Need to Automate"
        text3="From workflow design to voice AI deployment — we handle the full stack."
      />
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-4 mt-10 px-6 md:px-16 lg:px-24 xl:px-32">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66"
          >
            <feature.icon
              className="text-[#6A6DE9] size-8 mt-4"
              strokeWidth={1.3}
            />
            <h3 className="text-base font-medium">{feature.title}</h3>
            <p className="text-slate-400 line-clamp-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* ─── How It Works ─── */}
      <HowItWorks />

      {/* ─── Stats / Results ─── */}
      <StatsSection />

      {/* ─── Testimonials ─── */}
      <Testimonials />

      {/* ─── Pricing ─── */}
      <Pricing />

      {/* ─── FAQ ─── */}
      <FaqSection />

      {/* ─── Final CTA ─── */}
      <CTASection />
    </>
  );
}
