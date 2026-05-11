"use client";

import { motion } from "framer-motion";
import {
  WorkflowIcon,
  BrainCircuitIcon,
  MicIcon,
  ArrowRight,
  Zap,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { Asset } from "next/font/google";
import { url } from "inspector";
import { image } from "framer-motion/client";

const services = [
  {
    icon: WorkflowIcon,
    title: "n8n Workflow Automation",
    subtitle: "Connect Everything. Automate Anything.",
    description:
      "We design and deploy custom n8n workflows that connect your entire business stack — from CRM to communication, payments to project management.",
    highlights: [
      "500+ app integrations",
      "Self-hosted for data privacy",
      "Unlimited executions",
      "Complex branching logic",
    ],
    visual: <WorkflowVisual />,
  },
  {
    icon: BrainCircuitIcon,
    title: "AI Agent Development",
    subtitle: "Your 24/7 Digital Workforce.",
    description:
      "Custom AI agents powered by GPT-4, Claude, and open-source models — trained on your business data for autonomous lead qualification and support.",
    highlights: [
      "Custom-trained on your data",
      "Multi-channel deployment",
      "Human handoff when needed",
      "Real-time learning",
    ],
    visual: <AgentVisual />,
  },
  {
    icon: MicIcon,
    title: "Voice AI Agents",
    subtitle: "Conversations That Convert.",
    description:
      "Human-like voice agents for inbound/outbound calls, appointment booking, and FAQ handling — in English, Hindi, and 20+ languages.",
    highlights: [
      "Natural human-like speech",
      "Multi-language support",
      "Real-time call transfer",
      "Call analytics & transcripts",
    ],
    visual: <VoiceVisual />,
  },
];

function WorkflowVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 200 100" className="w-full max-w-[220px]" fill="none">
        <motion.line
          x1="30"
          y1="50"
          x2="80"
          y2="30"
          stroke="#6A6DE9"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.line
          x1="30"
          y1="50"
          x2="80"
          y2="70"
          stroke="#6A6DE9"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
        <motion.line
          x1="80"
          y1="30"
          x2="130"
          y2="50"
          stroke="#8B8EF0"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.line
          x1="80"
          y1="70"
          x2="130"
          y2="50"
          stroke="#8B8EF0"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.line
          x1="130"
          y1="50"
          x2="175"
          y2="50"
          stroke="#A78BFA"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
        />
        {[
          { cx: 30, cy: 50, delay: 0, label: "▶" },
          { cx: 80, cy: 30, delay: 0.3, label: "⚡" },
          { cx: 80, cy: 70, delay: 0.5, label: "🔗" },
          { cx: 130, cy: 50, delay: 0.7, label: "🤖" },
          { cx: 175, cy: 50, delay: 1.0, label: "✓" },
        ].map((node, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: node.delay, duration: 0.4, type: "spring" }}
          >
            <circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="rgba(106,109,233,0.15)"
              stroke="#6A6DE9"
              strokeWidth="1.5"
            />
            <text
              x={node.cx}
              y={node.cy + 4}
              textAnchor="middle"
              fontSize="8"
              fill="#A78BFA"
            >
              {node.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

function AgentVisual() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-2">
      {[
        { text: "New lead from website", delay: 0, align: "left" },
        { text: "Qualifying... Score: 85/100", delay: 0.8, align: "right" },
        { text: "Meeting booked ✓", delay: 1.6, align: "right" },
      ].map((msg, i) => (
        <motion.div
          key={i}
          className={`px-3 py-1.5 rounded-lg text-[10px] max-w-[160px] ${msg.align === "right" ? "bg-[#6A6DE9]/20 text-[#A78BFA] self-end mr-2" : "bg-white/10 text-slate-300 self-start ml-2"}`}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: msg.delay, duration: 0.4 } as any}
        >
          {msg.text}
        </motion.div>
      ))}
    </div>
  );
}

function VoiceVisual() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-1 h-[40px]">
        {[20, 45, 70, 100, 80, 55, 90, 65, 35, 50, 75, 40].map((h, i) => (
          <motion.div
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-[#6A6DE9] to-[#A78BFA]"
            animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.3}%`] }}
            transition={{
              duration: 1.3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6A6DE9] opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6A6DE9]" />
        </span>
        <span className="text-[10px] text-[#A78BFA] font-mono tracking-wider">
          LIVE CALL
        </span>
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any },
  },
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-10">
      <SectionTitle
        text1="SERVICES"
        text2="What We Build For You"
        text3="End-to-end automation solutions that save time, cut costs, and scale your business operations."
      />
      <motion.div
        className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 md:px-16 lg:px-24 xl:px-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 overflow-hidden transition-all duration-500 hover:border-[#6A6DE9]/50 hover:shadow-[0_0_40px_rgba(106,109,233,0.15)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#6A6DE9] to-[#A78BFA]" />
            <div className="h-32 flex items-center justify-center px-4 pt-4">
              {service.visual}
            </div>
            <div className="p-6 pt-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#6A6DE9] to-[#A78BFA]">
                  <service.icon
                    className="h-5 w-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
              <p className="text-xs font-medium text-[#6A6DE9] mb-2">
                {service.subtitle}
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="space-y-2">
                {service.highlights.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Zap className="h-3 w-3 text-[#6A6DE9] flex-shrink-0" />
                    <span className="text-xs text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <motion.button
                className="mt-6 flex items-center gap-2 text-sm font-medium text-[#6A6DE9] group/btn"
                whileHover={{ x: 4 }}
              >
                Learn more{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
