// import { useState } from 'react';
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const cn = (...classes) => classes.filter(Boolean).join(" ");
// ─── Config ───────────────────────────────────────────────────────────────────

const NAV_COLS = [
  {
    heading: "Services",
    links: [
      { label: "n8n Automations", href: "#services" },
      { label: "AI Agents", href: "#services" },
      { label: "Voice AI", href: "#services" },
      { label: "Chatbot Development", href: "#services" },
      { label: "Custom Integrations", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  {
    label: "Twitter / X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.21 10.21 0 0 0 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.017-8.04 6.39a10.161 10.161 0 0 0 6.29 2.166c1.42 0 2.77-.29 4.006-.806zm-9.84-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12a28.5 28.5 0 0 0-.535-1.24c-5.18 1.55-10.195 1.49-10.61 1.48a10.207 10.207 0 0 0 2.408 6.645zm-2.172-8.145c.42.012 4.735.025 9.345-1.19A68.47 68.47 0 0 0 12.18 2.37c-2.97 1.4-5.11 4.073-5.18 7.355zM14.07 2.96a66.88 66.88 0 0 1 2.87 4.862 19.772 19.772 0 0 0 5.94-2.504A10.17 10.17 0 0 0 14.07 2.96zm8.33 5.836a21.4 21.4 0 0 1-6.4 2.72 30.27 30.27 0 0 1 .34 1.568c3.386-.43 6.73.26 7.08.34a10.19 10.19 0 0 0-1.02-4.628z" />
      </svg>
    ),
  },
];

// ─── Animated gradient border input ──────────────────────────────────────────

function NewsletterInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => setStatus("done"), 1200);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col gap-3 sm:flex-row"
    >
      {/* Gradient-border wrapper */}
      <div
        className={cn(
          "relative flex-1 rounded-xl p-px transition-all duration-300",
          focused
            ? "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500"
            : "bg-white/10",
        )}
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full rounded-[11px] bg-[#0e0e0e] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none"
        />
      </div>

      <motion.button
        type="submit"
        disabled={status !== "idle"}
        className={cn(
          "rounded-xl px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all",
          status === "done"
            ? "bg-emerald-500 text-white"
            : "bg-white text-black hover:bg-white/90",
        )}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-3.5 w-3.5 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending…
          </span>
        ) : status === "done" ? (
          "✓ Subscribed!"
        ) : (
          "Subscribe"
        )}
      </motion.button>
    </form>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

export function Footer() {
  const year = new Date().getFullYear();
  const AgencyName = "InfinexWeb";
  const createdBy = "InfinexWeb";

  return (
    <footer className="relative overflow-hidden">
      {/* Top glow */}

      {/* Large ghost agency name — decorative */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center overflow-hidden select-none">
        <span
          id="ghostName"
          className="text-[clamp(60px,12vw,160px)] leading-none font-black tracking-tighter whitespace-nowrap text-white/[0.03] uppercase clip-text bg-clip-text"
          aria-hidden
        >
          {AgencyName}
        </span>
      </div>

      {/* Main content */}
      <div className="relative mx-auto w-full px-6 md:px-16 lg:px-24 xl:px-32 py-4 pt-[116px]">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.8fr_repeat(3,1fr)_1.6fr]">
          {/* Brand col */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <Link href="/" className="flex w-fit items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl text-base font-black text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #6A6DE9 0%, #A78BFA 100%)",
                }}
              >
                I
              </div>
              <span className="text-base font-semibold text-white">
                {AgencyName}
              </span>
            </Link>

            <p className="max-w-[220px] text-sm leading-relaxed hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
              We build AI-powered automations, custom agents, and voice AI systems that transform how businesses operate.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-white/20 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs text-emerald-400">
                Available for projects
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <span className="text-xs font-semibold tracking-widest dark:text-slate-300 transition-colors duration-200 uppercase">
                {col.heading}
              </span>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-1.5 text-sm hover:text-[#6A6DE9] dark:hover:text-[#A78BFA] transition-colors duration-200"
                    >
                      <span className="h-px w-0 bg-[#6A6DE9] transition-all duration-200 group-hover:w-3" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter col */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold tracking-widest hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200 uppercase">
              Stay in the loop
            </span>
            <p className="text-sm leading-relaxed hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
              Get case studies, design insights and industry news — no spam,
              ever.
            </p>
            <NewsletterInput />
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/[0.06]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
            © {year} {AgencyName}. All rights reserved.
          </p>

          <div className="flex items-center gap-1 text-xs hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200">
            Crafted with
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              className="mx-0.5 text-pink-500"
            >
              ♥
            </motion.span>
            by {createdBy}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-xs hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
