"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarIcon } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6A6DE9]/[0.03] to-transparent dark:via-[#6A6DE9]/[0.05]" />
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 lg:px-24 xl:px-32">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Currently accepting new projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#6A6DE9] to-[#A78BFA] bg-clip-text text-transparent">Automate Your Business?</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-8">
            Book a free 30-minute strategy call. We&apos;ll audit your workflows and show you exactly where automation can save you 20+ hours per week.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.button className="flex items-center gap-2 bg-[#6A6DE9] hover:bg-[#5B5ED8] text-white rounded-lg px-6 py-3 font-medium transition-colors cursor-pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <CalendarIcon className="h-4 w-4" /> Book a Free Strategy Call
            </motion.button>
            <motion.button className="flex items-center gap-2 border border-[#6A6DE9]/40 hover:border-[#6A6DE9] text-slate-700 dark:text-white rounded-lg px-6 py-3 font-medium transition-colors cursor-pointer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              See Our Work <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
