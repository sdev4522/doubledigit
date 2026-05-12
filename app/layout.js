import { Poppins, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import LenisScroll from "@/components/Lenis";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "InfinexWeb — AI Automation Agency | n8n, AI Agents & Voice AI",
  description:
    "We build n8n workflow automations, custom AI agents, and voice AI systems that save your team 20+ hours per week. Book a free strategy call today.",
  icons: {
    icon: "/favicon.ico",
    apple: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <LenisScroll />
          {children}
        </ThemeContextProvider>
        <Script id="ai-chat-config" strategy="afterInteractive">
          {`
            window.aiChatConfig = {
              siteId: "acea0827-b86e-4150-afc3-a7f8e316281a",
              channelId: "35225a77-ea66-4614-bd3f-f81277d660d6",
              url: "https://resend.in",
            };
          `}
        </Script>
        <Script
          src="https://resend.in/widget/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
