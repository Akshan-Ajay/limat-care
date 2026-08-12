import type { Metadata } from "next";
import {
  Droplets,
  Footprints,
  MessageCircle,
  Pill,
  UtensilsCrossed,
  Home as HomeIcon,
  Car,
  Sparkles,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ArcDivider from "@/components/ArcDivider";

export const metadata: Metadata = {
  title: "PSW Services | Limat Care",
  description:
    "Personal support worker services from Limat Care: bathing, mobility assistance, companionship, medication reminders, meal preparation, and more.",
};

const services = [
  {
    icon: Droplets,
    title: "Bathing & personal care",
    body: "Respectful, dignified help with bathing, grooming, and hygiene routines.",
  },
  {
    icon: Footprints,
    title: "Mobility assistance",
    body: "Support moving safely around the home, transferring, and using mobility aids.",
  },
  {
    icon: MessageCircle,
    title: "Companionship",
    body: "Friendly, consistent company that eases isolation and brightens the day.",
  },
  {
    icon: Pill,
    title: "Medication reminders",
    body: "Gentle reminders to help medications get taken on schedule.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meal preparation",
    body: "Simple, nourishing meals prepared around dietary needs and preferences.",
  },
  {
    icon: HomeIcon,
    title: "Light housekeeping",
    body: "Tidying, laundry, and light chores that keep a home comfortable.",
  },
  {
    icon: Car,
    title: "Transportation",
    body: "Accompanied trips to appointments, errands, and community activities.",
  },
  {
    icon: Sparkles,
    title: "Personalized care plans",
    body: "A plan built around your routine, preferences, and changing needs.",
  },
];

export default function PSWServicesPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
            PSW Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-[1.1]">
            Everyday support, delivered with care
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            Our personal support workers help clients stay safe, comfortable,
            and independent at home &mdash; with services built around each
            person&rsquo;s routine.
          </p>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-line p-7 hover:border-trust/40 transition-colors"
            >
              <s.icon className="h-7 w-7 text-trust" strokeWidth={1.6} />
              <h3 className="font-semibold text-ink mt-5">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cloud">
        <ArcDivider tone="line" className="bg-paper" />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Care that starts with a conversation
            </h2>
            <p className="mt-5 text-ink/65 leading-relaxed">
              Every client starts with a simple conversation about needs,
              schedule, and preferences. From there, we match you with a PSW
              and build a care plan that can flex as things change.
            </p>
            <CTAButton href="/contact" className="mt-8">
              Contact Us Today
            </CTAButton>
          </div>
          <ol className="space-y-5">
            {[
              ["01", "Tell us what support looks like for you"],
              ["02", "We match you with the right PSW"],
              ["03", "Care begins, on a schedule that works"],
              ["04", "We check in and adjust as needs change"],
            ].map(([n, t]) => (
              <li key={n} className="flex gap-4 items-baseline">
                <span className="font-display text-xl text-trust/50 shrink-0">
                  {n}
                </span>
                <span className="text-ink/80">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
