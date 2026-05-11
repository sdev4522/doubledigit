"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 500, suffix: "+", label: "Automations Deployed", description: "Across 50+ industries" },
  { value: 39100, suffix: "+", label: "Hours Saved", description: "For our clients annually" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Based on post-project surveys" },
  { value: 3, suffix: "x", label: "Average ROI", description: "Within first 3 months" },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6A6DE9]/[0.03] to-transparent dark:via-[#6A6DE9]/[0.05]" />
      <div className="relative px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-sm font-medium text-[#6A6DE9] tracking-wider uppercase mb-3">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Numbers That Speak{" "}
              <span className="bg-gradient-to-r from-[#6A6DE9] to-[#A78BFA] bg-clip-text text-transparent">For Themselves</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative group text-center p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm transition-all duration-300 hover:border-[#6A6DE9]/30 hover:shadow-[0_0_30px_rgba(106,109,233,0.1)]"
              >
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                  <NumberTicker value={stat.value} delay={0.3 + index * 0.15} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">{stat.label}</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">{stat.description}</p>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gradient-to-br from-[#6A6DE9] to-[#A78BFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
