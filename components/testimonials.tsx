import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import SectionTitle from "@/components/SectionTitle";

const reviews = [
  {
    name: "Rahul Sharma",
    username: "@rahul_ceo",
    body: "Their n8n automations saved our sales team 25 hours per week. Lead routing that used to take 2 hours now happens in seconds.",
    img: "https://avatar.vercel.sh/rahul",
  },
  {
    name: "Sarah Chen",
    username: "@sarahchen",
    body: "The AI agent they built handles 80% of our customer support tickets automatically. Our CSAT score went up 40% in 2 months.",
    img: "https://avatar.vercel.sh/sarah",
  },
  {
    name: "Amit Patel",
    username: "@amitpatel",
    body: "Voice AI agent for our clinic is incredible. It books appointments, sends reminders, and handles cancellations — all in Hindi and English.",
    img: "https://avatar.vercel.sh/amit",
  },
  {
    name: "Emily Rodriguez",
    username: "@emilyrod",
    body: "We replaced 3 separate tools with one n8n workflow. The cost savings alone paid for the project in the first month.",
    img: "https://avatar.vercel.sh/emily",
  },
  {
    name: "Vikram Singh",
    username: "@vikrams",
    body: "Their team turned our chaotic lead management into a fully automated pipeline. From form submission to CRM update in under 5 seconds.",
    img: "https://avatar.vercel.sh/vikram",
  },
  {
    name: "Lisa Thompson",
    username: "@lisat",
    body: "The WhatsApp chatbot they built answers customer queries 24/7 with 95% accuracy. It's like having a tireless team member.",
    img: "https://avatar.vercel.sh/lisa",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img, name, username, body,
}: {
  img: string; name: string; username: string; body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-slate-600 dark:text-slate-300">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return (
    <section className="py-10">
      <SectionTitle
        text1="TESTIMONIALS"
        text2="Loved by Businesses Like Yours"
        text3="See what our clients say about the automations we've built for them."
      />
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-12">
        <Marquee pauseOnHover className="[--duration:25s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>
    </section>
  );
}
