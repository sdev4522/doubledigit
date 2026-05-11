"use client"
import SectionTitle from "@/components/SectionTitle";
import { useThemeContext } from "@/context/ThemeContext";
import { pricingData } from "@/data/pricingData";
import { SparklesIcon } from "lucide-react";
import Image from "next/image";

export default function Pricing() {
    const { theme } = useThemeContext();
    return (
        <div id="pricing" className="relative">
            <Image className="absolute -mt-20 md:-mt-100 md:left-20 pointer-events-none" src={theme === "dark" ? "/assets/color-splash.svg" : "/assets/color-splash-light.svg"} alt="color-splash" width={1000} height={1000} priority fetchPriority="high" />
            <SectionTitle text1="PRICING" text2="Simple, Transparent Pricing" text3="One-time project pricing. No hidden fees. No monthly subscriptions for the build." />

            <div className="flex flex-wrap items-center justify-center gap-6 mt-16 px-6">
                {pricingData.map((plan, index) => (
                    <div key={index} className={`p-6 rounded-2xl max-w-80 w-full shadow-[0px_4px_26px] shadow-black/6 ${plan.mostPopular ? "relative pt-12 bg-gradient-to-b from-[#6A6DE9] to-[#5254B5]" : "bg-white/50 dark:bg-gray-800/50 border border-slate-200 dark:border-slate-800"}`}>
                        {plan.mostPopular && (
                            <div className="flex items-center text-xs gap-1 py-1.5 px-2 text-[#6A6DE9] absolute top-4 right-4 rounded bg-white font-medium">
                                <SparklesIcon size={14} />
                                <p>Most Popular</p>
                            </div>
                        )}
                        <p className={`text-sm ${plan.mostPopular ? "text-white/80" : "text-slate-500"}`}>{plan.subtitle}</p>
                        <p className={`text-lg font-medium mt-1 ${plan.mostPopular && "text-white"}`}>{plan.title}</p>
                        <h4 className={`text-3xl font-semibold mt-1 ${plan.mostPopular && "text-white"}`}>
                            {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                            {plan.period && <span className={`font-normal text-sm ${plan.mostPopular ? "text-white/70" : "text-slate-400"}`}> {plan.period}</span>}
                        </h4>
                        <hr className={`my-6 ${plan.mostPopular ? "border-white/20" : "border-slate-300 dark:border-slate-700"}`} />
                        <div className={`space-y-2.5 ${plan.mostPopular ? "text-white" : "text-slate-600 dark:text-slate-300"}`}>
                            {plan.features.map((feature, fi) => (
                                <div key={fi} className={`flex items-center gap-2 ${feature.disabled ? "opacity-40" : ""}`}>
                                    <feature.icon size={16} className={`flex-shrink-0 ${feature.disabled ? "text-slate-400" : plan.mostPopular ? "text-white" : "text-[#6A6DE9]"}`} />
                                    <span className="text-sm">{feature.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className={`transition w-full py-3 rounded-lg font-medium mt-8 cursor-pointer ${plan.mostPopular ? "bg-white hover:bg-slate-100 text-slate-800" : "bg-[#6A6DE9] hover:bg-[#5B5ED8] text-white"}`}>
                            <span>{plan.buttonText}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}