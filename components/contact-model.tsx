"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, MessageCircle } from "lucide-react";
import { Separator } from "./ui/separator";

// ✅ SETUP — sirf yeh 2 cheezein change karo
const FORMSPREE_ID = "YOUR_FORMSPREE_ID"; // formspree.io pe free account → form ID yahan
const WHATSAPP_NUMBER = "918668997962"; // apna number (country code ke saath, bina +)

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

type Step = "form" | "success";

type ContactModelProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ContactModel({ open, onOpenChange }: ContactModelProps) {
  const [step, setStep] = useState<Step>("form");
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const whatsappIcon = "/assets/brands/whatsapp-svgrepo-com.svg";
  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setStep("form");
        setDate(undefined);
        setTime("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;
    setLoading(true);

    const formattedDate = format(date, "PPP");
    const payload = { name, email, phone, message, date: formattedDate, time };

    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (_) {
      // silently continue — WhatsApp fallback success screen mein hai
    }

    setLoading(false);
    setStep("success");
  };

  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to book a call.\n\nName: ${name}\nEmail: ${email}\nDate: ${date ? format(date, "PPP") : ""}\nTime: ${time}\nMessage: ${message}`,
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className={cn(
          "sm:max-w-md w-full rounded-2xl p-0 overflow-hidden outline-none",
          "bg-white/80 dark:bg-white/[0.04]",
          "backdrop-blur-2xl",
          "border border-[#6A6DE9]/30 dark:border-[#6A6DE9]/20",
          "shadow-[0_8px_40px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.12)]",
        )}
      >
        {step === "form" ? (
          <form onSubmit={handleSubmit}>
            {/* ── Header ── */}
            <div className="px-6 pt-6 pb-4 border-b border-[#6A6DE9]/10">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6A6DE9] opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#6A6DE9]" />
                </span>
                <span className="text-[11px] font-medium tracking-widest uppercase text-[#6A6DE9]">
                  Free Consultation
                </span>
              </div>
              <DialogTitle className="text-xl font-semibold">
                Book a Free Call
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground mt-0.5">
                Typical response within 3 hours.
              </DialogDescription>
            </div>
            <div className="px-6 py-4 space-y-4">
              {/* Name + Email */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="name"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-9 text-sm bg-white/50 dark:bg-white/5 border-[#6A6DE9]/20 focus:border-[#fff] rounded-lg"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-xs font-medium text-muted-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-9 text-sm bg-white/50 dark:bg-white/5 border-[#6A6DE9]/20 focus:border-[#6A6DE9] rounded-lg"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Phone Number with country code"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* Date Picker */}
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Preferred Date
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className={cn(
                        "w-full h-9 justify-start text-sm font-normal rounded-lg",
                        "bg-white/50 dark:bg-white/5 border-[#6A6DE9]/20 hover:border-[#6A6DE9]/50",
                        !date && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-3.5 w-3.5 text-[#6A6DE9]" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0 rounded-xl border-[#6A6DE9]/80 bg-white dark:bg-slate-900"
                    align="start"
                  >
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) =>
                        d < new Date() || d.getDay() === 0 || d.getDay() === 6
                      }
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Slots */}
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-muted-foreground">
                  Preferred Time <span className="opacity-50">(IST)</span>
                </Label>
                <div className="grid grid-cols-4 gap-1.5">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setTime(slot)}
                      className={cn(
                        "text-xs py-1.5 rounded-lg border transition-all duration-150 font-medium",
                        time === slot
                          ? "bg-[#6A6DE9] text-white border-[#6A6DE9] shadow-sm"
                          : "bg-white/50 dark:bg-white/5 border-[#6A6DE9]/20 hover:border-[#6A6DE9]/50 text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-xs font-medium text-muted-foreground"
                >
                  What do you need help with?{" "}
                  <span className="opacity-50">(optional)</span>
                </Label>
                <Textarea
                  id="message"
                  placeholder="E.g. I want to automate my lead follow-up using n8n..."
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="text-sm resize-none bg-white/50 dark:bg-white/5 border-[#6A6DE9]/20 focus:border-[#6A6DE9] rounded-lg"
                />
              </div>
            </div>
            {/* Footer Buttons */}
            <div className="px-6 pb-5 flex items-center gap-2">
              <DialogClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-10 rounded-lg border-[#6A6DE9]/20 text-sm"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={loading || !date || !time || !name || !email}
                className="flex-1 h-10 rounded-lg bg-[#6A6DE9] hover:bg-[#5B5ED8] text-white text-sm font-medium transition-all disabled:opacity-40"
              >
                {loading ? "Sending..." : "Book Call →"}
              </Button>
            </div>
            <p className="text-[16px] text-center px-6">or</p>
            {/* WhatsApp Button */}{" "}
            <p className="text-[11px] text-muted-foreground text-center px-6">
              Get faster responses by confirming your booking on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mx-auto mb-4 mt-3 gap-2 w-[90%] justify-center h-11 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium transition-colors"
            >
              <img src={whatsappIcon} className="h-4 w-4" />
              Also confirm on WhatsApp
            </a>
          </form>
        ) : (
          /* ── Success Screen ── */
          <div className="flex flex-col items-center text-center px-8 py-10 gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6A6DE9]/10">
              <CheckCircle2 className="h-7 w-7 text-[#6A6DE9]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Request Received!</h3>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                We'll confirm your slot for{" "}
                <span className="font-medium text-foreground">
                  {date ? format(date, "PPP") : ""} at {time}
                </span>{" "}
                within{" "}
                <span className="font-medium text-[#6A6DE9]">3 hours</span> on
                email.
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full justify-center h-11 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-medium transition-colors"
            >
              <img src={whatsappIcon} className="h-4 w-4" />
              Also confirm on WhatsApp
            </a>

            <p className="text-[11px] text-muted-foreground">
              Get faster responses by confirming your booking on WhatsApp.
            </p>

            <Button
              variant="ghost"
              className="text-xs text-muted-foreground h-8 -mt-2"
              onClick={() => handleClose(false)}
            >
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
