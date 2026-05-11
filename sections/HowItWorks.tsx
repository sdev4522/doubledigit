"use client";

import { motion } from "framer-motion";
import { PhoneCallIcon, PenToolIcon, CodeIcon, RocketIcon } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const steps = [
  {
    icon: PhoneCallIcon,
    step: "01",
    title: "Discovery Call",
    description:
      "We audit your current workflows, identify bottlenecks, and map out every manual task that's costing you time and money.",
  },
  {
    icon: PenToolIcon,
    step: "02",
    title: "Strategy & Design",
    description:
      "Our team creates a custom automation blueprint — choosing the right tools, AI models, and integration points for your needs.",
  },
  {
    icon: CodeIcon,
    step: "03",
    title: "Build & Test",
    description:
      "We develop your automations with rigorous testing. Weekly demos keep you in the loop, and we iterate based on feedback.",
  },
  {
    icon: RocketIcon,
    step: "04",
    title: "Launch & Optimize",
    description:
      "Your automations go live with 24/7 monitoring. We continuously optimize performance and scale as your business grows.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-10">
      <SectionTitle
        text1="HOW IT WORKS"
        text2="From Idea to Automation in 4 Steps"
        text3="A proven process that delivers results — on time, every time."
      />
      <div className="mt-16 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#6A6DE9]/20 via-[#8B8EF0]/20 to-[#A78BFA]/20" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative group"
              >
                <div className="relative z-10 mb-6">
                  <motion.div
                    className="w-[72px] h-[72px] rounded-2xl bg-gradient-to-br from-[#6A6DE9] to-[#A78BFA] flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, rotate: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon
                      className="h-7 w-7 text-white"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <div className="hidden lg:block absolute top-[36px] -right-4 w-2 h-2 rounded-full bg-[#6A6DE9]" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#6A6DE9] to-[#A78BFA] bg-clip-text text-transparent">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
