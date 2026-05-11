"use client";

import { useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const DEFAULT_NAV = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function Logo() {
  const { theme } = useThemeContext();
  return (
    <motion.div
      className="flex h-9 flex-shrink-0 items-center justify-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a href="https://prebuiltui.com?utm_source=landing">
        <Image
          className="h-9 md:h-9.5 w-auto shrink-0"
          src={
            theme === "dark"
              ? "/assets/logo-light.svg"
              : "/assets/logo-dark.svg"
          }
          alt="Logo"
          width={140}
          height={40}
          priority
          fetchPriority="high"
        />
      </a>
    </motion.div>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // '?' ka matlab hai ki ye optional hai
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className="relative rounded-full px-4 py-2 text-sm hover:text-slate-600 dark:hover:text-slate-300 transition-colors duration-200"
      whileHover="hover"
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-white/0"
        variants={{
          hover: { backgroundColor: "rgba(255,255,255,0.08)" },
        }}
        transition={{ duration: 0.15 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <div className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
      <motion.span
        className="block h-[1.5px] w-5 rounded-full bg-white origin-center"
        animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.span
        className="block h-[1.5px] w-5 rounded-full bg-white"
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="block h-[1.5px] w-5 rounded-full bg-white origin-center"
        animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
      />
    </div>
  );
}
type HeaderProps = {
  logo?: React.ReactNode;
  navItems?: { label: string; href: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  scrollThreshold?: number;
  className?: string;
  onOpenDialog: () => void;
};

export function Header({
  logo,
  navItems = DEFAULT_NAV,
  ctaLabel = "Book a Call",
  ctaHref = "",
  scrollThreshold = 60,
  className,
  onOpenDialog,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > scrollThreshold);
  });

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* ── DESKTOP (md and above) ── */}
      <div
        className={cn(
          "pointer-events-none fixed inset-x-0 top-0 z-50 hidden md:block w-full px-6 md:px-16 lg:px-24 xl:px-32",
          className,
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {!scrolled && (
            <motion.div
              key="expanded"
              className="pointer-events-auto flex h-[72px] w-full items-center justify-between px-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
              >
                {logo ?? <Logo />}
              </motion.div>

              <nav className="flex items-center gap-1">
                {navItems.map((item) => (
                  <NavLink key={item.label} href={item.href}>
                    {item.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center gap-[20px]">
                <ThemeToggle />
                <motion.button
                  onClick={onOpenDialog}
                  className="rounded-full px-5 py-2 text-sm whitespace-nowrap transition-colors duration-200 transition-colors dark:bg-white dark:text-black text-white bg-black"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {ctaLabel}
                </motion.button>
              </div>
            </motion.div>
          )}

          {scrolled && (
            <motion.div
              key="pill"
              className="pointer-events-auto mx-auto mt-4 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-[rgba(235, 235, 235, 0.82)] px-2 py-1.5 backdrop-blur-xl"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{ boxShadow: "0 4px 32px rgba(106, 109, 233, 0.36)" }}
            >
              {navItems.map((item) => (
                <NavLink key={item.label} href={item.href}>
                  {item.label}
                </NavLink>
              ))}

              <motion.button
                onClick={onOpenDialog}
                className="ml-1 rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 dark:bg-white dark:text-black text-white bg-black"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: 0.05 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {ctaLabel}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── MOBILE (below md) ── */}
      <div className={cn("fixed inset-x-0 top-0 z-50 md:hidden", className)}>
        {/* Top bar */}
        <div className="flex h-[60px] items-center justify-between px-5">
          {logo ?? <Logo />}

          <motion.button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[rgba(20,20,20,0.75)] backdrop-blur-md"
            whileTap={{ scale: 0.9 }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <MenuIcon open={mobileOpen} />
          </motion.button>
        </div>

        {/* Dropdown menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              key="mobile-menu"
              className="mx-4 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(14,14,14,0.92)] backdrop-blur-xl"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
              style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.5)" }}
            >
              <nav className="flex flex-col px-2 py-3">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.18 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="px-4 pb-4">
                <motion.a
                  href={ctaHref}
                  onClick={closeMenu}
                  className="block w-full rounded-full bg-[#f0ede8] py-2.5 text-center text-sm font-medium text-[#111] hover:bg-white"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {ctaLabel}
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
