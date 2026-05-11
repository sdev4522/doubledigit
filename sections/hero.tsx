import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { CalendarIcon, VideoIcon } from "lucide-react";
import React from "react";

export function Hero({ onOpenDialog }: { onOpenDialog: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 bg-[url('/assets/light-hero-gradient.svg')] dark:bg-[url('/assets/dark-hero-gradient.svg')] bg-no-repeat bg-center bg-contain">
      <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 pr-4 mt-46 rounded-full border border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-slate-600/20">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
        </div>
        <p className="text-xs">
          <AnimatedShinyText>
            Now accepting new automation projects
          </AnimatedShinyText>
        </p>
      </div>

      <h1 className="mt-4 text-4xl/12 md:text-[56px]/16 font-semibold max-w-3xl">
        We Build{" "}
        <span className="bg-gradient-to-r from-[#6A6DE9] to-[#A78BFA] bg-clip-text text-transparent">
          AI Automations
        </span>{" "}
        That Work While You Sleep
      </h1>
      <p className="text-base dark:text-slate-300 max-w-xl mt-3">
        n8n workflow automations, custom AI agents, and voice AI systems that
        save your team 20+ hours per week — so you can focus on growth.
      </p>
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={onOpenDialog}
          className="flex items-center gap-2 bg-[#6A6DE9] hover:bg-[#5B5ED8] transition text-white rounded-md px-6 h-11 cursor-pointer"
        >
          <CalendarIcon size={18} />
          Book a Free Call
        </button>
        <button className="flex items-center gap-2 border border-[#6A6DE9]/40 hover:border-[#6A6DE9] transition text-slate-600 dark:text-white rounded-md px-6 h-11 cursor-pointer">
          <VideoIcon strokeWidth={1} />
          <span>Watch Demo</span>
        </button>
      </div>
      <h3 className="text-base text-center text-slate-400 mt-28 pb-14 font-medium">
        Trusted by innovative businesses across India & beyond
      </h3>
    </div>
  );
}
