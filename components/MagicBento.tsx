import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";
import "./css/MagicBento.css";
import { Globe } from "./ui/globe";
import { GlobeDemo } from "./globeDemo";

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
}

export interface BentoProps {
  className?: string;
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "106, 109, 233";
const MOBILE_BREAKPOINT = 768;

// ─── Card Data ────────────────────────────────────────────────────────────────
const cardData: BentoCardProps[] = [
  {
    color: "transparent",
    title: "n8n Workflow Automation",
    description:
      "Custom multi-step workflows that connect your entire business stack — from CRM to communication.",
    label: "Automation",
  },
  {
    color: "transparent",
    title: "24/7 AI Agents",
    description: "Always-on agents for lead gen, support & tasks",
    label: "AI Agents",
  },
  {
    color: "transparent",
    title: "Voice AI Agents",
    description:
      "Human-like voice bots for calls, bookings & support — in Hindi & English",
    label: "Voice",
  },
  {
    color: "transparent",
    title: "Proven ROI, Real Results",
    description:
      "Measurable time & cost savings tracked across every automation we deploy",
    label: "Results",
  },
  {
    color: "transparent",
    title: "100+ Integrations",
    description: "All your favourite tools, seamlessly connected",
    label: "Integrations",
  },
  {
    color: "transparent",
    title: "Lightning Fast",
    description: "Sub-2s average agent response time",
    label: "Performance",
  },
];

// ─── Visual Areas per card ────────────────────────────────────────────────────

/** Card 1 — Animated n8n node graph */
const WorkflowVisual: React.FC = () => {
  return (
    <svg
      className="mbc-workflow-svg"
      viewBox="0 0 260 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connector lines */}
      <line
        className="mbc-node-line"
        x1="40"
        y1="65"
        x2="88"
        y2="38"
        stroke="#6A6DE9"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <line
        className="mbc-node-line"
        x1="40"
        y1="65"
        x2="88"
        y2="92"
        stroke="#6A6DE9"
        strokeWidth="1.5"
        opacity="0.6"
        style={{ animationDelay: "0.3s" }}
      />
      <line
        className="mbc-node-line"
        x1="88"
        y1="38"
        x2="158"
        y2="65"
        stroke="#8B8EF0"
        strokeWidth="1.5"
        opacity="0.5"
        style={{ animationDelay: "0.6s" }}
      />
      <line
        className="mbc-node-line"
        x1="88"
        y1="92"
        x2="158"
        y2="65"
        stroke="#8B8EF0"
        strokeWidth="1.5"
        opacity="0.5"
        style={{ animationDelay: "0.9s" }}
      />
      <line
        className="mbc-node-line"
        x1="158"
        y1="65"
        x2="220"
        y2="65"
        stroke="#A78BFA"
        strokeWidth="1.5"
        opacity="0.4"
        style={{ animationDelay: "1.2s" }}
      />

      {/* Nodes */}
      <circle
        className="mbc-node-circle"
        cx="40"
        cy="65"
        r="16"
        fill="#131340"
        stroke="#6A6DE9"
        strokeWidth="2"
      />
      <text
        x="40"
        y="70"
        textAnchor="middle"
        fill="#6A6DE9"
        fontSize="11"
        fontFamily="monospace"
      >
        ▶
      </text>

      <rect
        className="mbc-node-circle"
        x="74"
        y="24"
        width="28"
        height="28"
        rx="7"
        fill="#131340"
        stroke="#8B8EF0"
        strokeWidth="1.5"
        style={{ animationDelay: "0.5s" }}
      />
      <text
        x="88"
        y="42"
        textAnchor="middle"
        fill="#8B8EF0"
        fontSize="9"
        fontFamily="monospace"
      >
        n8n
      </text>

      <rect
        className="mbc-node-circle"
        x="74"
        y="78"
        width="28"
        height="28"
        rx="7"
        fill="#131340"
        stroke="#8B8EF0"
        strokeWidth="1.5"
        style={{ animationDelay: "0.8s" }}
      />
      <text
        x="88"
        y="96"
        textAnchor="middle"
        fill="#8B8EF0"
        fontSize="9"
        fontFamily="monospace"
      >
        AI
      </text>

      <circle
        className="mbc-node-circle"
        cx="158"
        cy="65"
        r="18"
        fill="#131340"
        stroke="#A78BFA"
        strokeWidth="2"
        style={{ animationDelay: "1.1s" }}
      />
      <text
        x="158"
        y="70"
        textAnchor="middle"
        fill="#A78BFA"
        fontSize="12"
        fontFamily="monospace"
      >
        ⚡
      </text>

      <rect
        className="mbc-node-circle"
        x="206"
        y="51"
        width="28"
        height="28"
        rx="7"
        fill="#131340"
        stroke="#6A6DE9"
        strokeWidth="2"
        style={{ animationDelay: "1.4s" }}
      />
      <text
        x="220"
        y="69"
        textAnchor="middle"
        fill="#6A6DE9"
        fontSize="10"
        fontFamily="monospace"
      >
        ✓
      </text>

      {/* Animated flow dot */}
      <circle r="3" fill="#6A6DE9" opacity="0.9">
        <animateMotion dur="2.2s" repeatCount="indefinite" begin="1.6s">
          <mpath href="#mbc-flow-path" />
        </animateMotion>
      </circle>
      <path id="mbc-flow-path" d="M40,65 L88,38 L158,65 L220,65" fill="none" />
    </svg>
  );
};

/** Card 2 — AI thinking dots */
const AgentVisual: React.FC = () => <GlobeDemo />;

/** Card 3 — Voice waveform bars */
const VoiceVisual: React.FC = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <div className="mbc-wave-bars">
      {[20, 50, 80, 100, 70, 40, 90, 55, 30, 15].map((h, i) => (
        <div
          key={i}
          className="mbc-bar"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
    <span
      style={{
        fontSize: "10px",
        color: "#8400ff",
        fontFamily: "monospace",
        letterSpacing: "0.1em",
      }}
    >
      LIVE ●
    </span>
  </div>
);

/** Card 4 — Counter + mini bar chart */
const ResultsVisual: React.FC = () => {
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const target = 39100;
    let current = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      if (counterRef.current) {
        const val =
          current >= 1000
            ? (current / 1000).toFixed(1) + "K"
            : Math.floor(current).toString();
        counterRef.current.textContent = val;
      }
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, []);

  const barHeights = [30, 45, 55, 70, 60, 80, 90, 100];

  return (
    <div className="mbc-results-visual">
      <span className="mbc-counter-big" ref={counterRef}>
        0
      </span>
      <span className="mbc-counter-sub">hours saved for clients</span>
      <div className="mbc-mini-chart">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="mbc-mc-bar"
            style={{
              height: `${h}%`,
              animationDelay: `${0.1 + i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

/** Card 5 — Integration chips */
const IntegrationsVisual: React.FC = () => {
  const apps = [
    "Slack",
    "WhatsApp",
    "Gmail",
    "HubSpot",
    "Notion",
    "Sheets",
    "Airtable",
    "+100 more",
  ];
  return (
    <div className="mbc-logo-grid">
      {apps.map((name, i) => (
        <span
          key={name}
          className={`mbc-logo-chip${name === "+100 more" ? " mbc-logo-chip--accent" : ""}`}
          style={{ animationDelay: `${0.1 + i * 0.08}s` }}
        >
          {name}
        </span>
      ))}
    </div>
  );
};

/** Card 6 — Speed pulse ring */
const SpeedVisual: React.FC = () => (
  <div className="mbc-speed-ring">
    <span className="mbc-speed-text">&lt;2s</span>
  </div>
);

const CARD_VISUALS = [
  <WorkflowVisual />,
  <AgentVisual />,
  <VoiceVisual />,
  <ResultsVisual />,
  <IntegrationsVisual />,
  <SpeedVisual />,
];

// ─── Helpers (unchanged from original) ───────────────────────────────────────

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR,
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number,
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

// ─── ParticleCard (unchanged from original) ───────────────────────────────────

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor,
      ),
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => particle.parentNode?.removeChild(particle),
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) initializeParticles();

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" },
        );
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;
    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
      if (enableMagnetism) {
        gsap.to(element, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
      if (enableMagnetism) {
        magnetismAnimationRef.current = gsap.to(element, {
          x: (x - centerX) * 0.05,
          y: (y - centerY) * 0.05,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height),
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;
      element.appendChild(ripple);
      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        },
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} particle-container`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

// ─── GlobalSpotlight (unchanged from original) ────────────────────────────────

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;
      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".magic-bento-card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);
        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }
        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius,
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".magic-bento-card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

// ─── BentoCardGrid ─────────────────────────────────────────────────────────────

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
  className?: string;
}> = ({ children, gridRef, className }) => (
  <div className={`card-grid bento-section ${className || ""}`} ref={gridRef}>
    {children}
  </div>
);

// ─── Mobile detection ──────────────────────────────────────────────────────────

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// ─── Main MagicBento Component ────────────────────────────────────────────────

const MagicBento: React.FC<BentoProps> = ({
  className = "",
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const otherClassNames = "p-6 rounded-xl space-y-3";

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef} className={className}>
        {cardData.map((card, index) => {
          const baseClassName = [
            "magic-bento-card",
            otherClassNames,
            textAutoHide ? "magic-bento-card--text-autohide" : "",
            enableBorderGlow ? "magic-bento-card--border-glow" : "",
          ]
            .filter(Boolean)
            .join(" ");

          const cardProps = {
            className: baseClassName,
            style: {
              backgroundColor: card.color,
              "--glow-color": glowColor,
            } as React.CSSProperties,
          };

          const visual = CARD_VISUALS[index];

          const inner = (
            <>
              <div className="magic-bento-card__header">
                <div className="magic-bento-card__label">{card.label}</div>
              </div>

              {/* Visual area — unique animation per card */}
              <div className="magic-bento-card__visual-area">{visual}</div>

              <div className="magic-bento-card__content">
                <h2 className="magic-bento-card__title">{card.title}</h2>
                <p className="magic-bento-card__description">
                  {card.description}
                </p>
              </div>
            </>
          );

          if (enableStars) {
            return (
              <ParticleCard
                key={index}
                {...cardProps}
                disableAnimations={shouldDisableAnimations}
                particleCount={particleCount}
                glowColor={glowColor}
                enableTilt={enableTilt}
                clickEffect={clickEffect}
                enableMagnetism={enableMagnetism}
              >
                {inner}
              </ParticleCard>
            );
          }

          return (
            <div key={index} {...cardProps}>
              {inner}
            </div>
          );
        })}
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
