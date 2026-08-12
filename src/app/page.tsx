import Image from "next/image";
import Link from "next/link";
import {
  HeartHandshake,
  ShieldCheck,
  Clock,
  Users,
  Phone,
  Star,
} from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ArcDivider from "@/components/ArcDivider";

const pillars = [
  {
    icon: HeartHandshake,
    title: "PSW Services",
    body: "Trained personal support workers who help with bathing, mobility, companionship, and daily living, right at home.",
    href: "/psw-services",
    linkLabel: "See our services",
  },
  {
    icon: ShieldCheck,
    title: "Accident Benefit Claims",
    body: "After a car accident, we help you understand your accident benefits and guide you through every step of the claim.",
    href: "/accident-benefit-claims",
    linkLabel: "Learn how we help",
  },
];

const values = [
  {
    icon: Users,
    title: "Trained, caring staff",
    body: "Every PSW on our team is trained, screened, and genuinely invested in your wellbeing.",
  },
  {
    icon: Clock,
    title: "Care on your schedule",
    body: "Visits arranged around your routine, from a few hours a week to daily support.",
  },
  {
    icon: Phone,
    title: "One point of contact",
    body: "A single, responsive contact for care questions and claim paperwork alike.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
              Personal Support &amp; Accident Benefit Advisory
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.08] text-ink">
              Compassionate care at home. Clear guidance after an accident.
            </h1>
            <p className="mt-6 text-lg text-ink/70 leading-relaxed max-w-lg">
              Limat Care pairs trained personal support workers with hands-on
              help navigating accident benefit claims &mdash; so you and your
              family are supported, start to finish.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/contact">Contact Us Today</CTAButton>
              <CTAButton href="/psw-services" variant="outline">
                Explore PSW Services
              </CTAButton>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -inset-6 rounded-[2rem] bg-trust/5 hidden md:block" aria-hidden="true" />
            <div className="relative bg-paper rounded-[1.75rem] border border-line shadow-[0_20px_60px_-25px_rgba(30,78,156,0.35)] p-10 md:p-12 w-full max-w-sm">
              <Image
                src="/images/logo-full.png"
                alt="Limat Care - Accident Benefit Claim Advisor"
                width={900}
                height={724}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      {/* Two pillars */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="max-w-xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            Two kinds of support, one team
          </h2>
          <p className="mt-4 text-ink/65 leading-relaxed">
            Whether you need day-to-day help at home or you&rsquo;re untangling
            an insurance claim after an accident, Limat Care walks alongside
            you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group rounded-2xl border border-line bg-paper p-8 md:p-10 hover:border-trust/40 hover:shadow-[0_20px_50px_-30px_rgba(27,30,38,0.25)] transition-all"
            >
              <p.icon className="h-8 w-8 text-trust" strokeWidth={1.6} />
              <h3 className="font-display text-2xl text-ink mt-6">{p.title}</h3>
              <p className="mt-3 text-ink/65 leading-relaxed">{p.body}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-trust group-hover:gap-2.5 transition-all">
                {p.linkLabel} &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Limat Care */}
      <section className="bg-cloud">
        <ArcDivider tone="line" className="bg-paper" />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
          <div className="max-w-xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Why families choose Limat Care
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <v.icon className="h-7 w-7 text-heal" strokeWidth={1.6} />
                <h3 className="font-semibold text-ink mt-5">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial teaser */}
      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="rounded-2xl bg-ink text-paper px-8 py-12 md:px-16 md:py-16 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="flex gap-1 md:flex-col md:gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-gold text-gold" />
            ))}
          </div>
          <div>
            <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl">
              &ldquo;Our PSW treats my mother like family, and the Limat Care
              team handled every form for her accident claim. We finally felt
              like someone was on our side.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
              <p className="text-sm text-paper/60">A Limat Care client, Ontario</p>
              <Link
                href="/testimonials"
                className="text-sm font-semibold text-heal hover:text-heal/80 transition-colors"
              >
                Read more stories &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-trust text-paper">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              Let&rsquo;s talk about the support you need.
            </h2>
            <p className="mt-3 text-paper/80 max-w-md">
              A short call is all it takes to get started &mdash; on care, on
              your claim, or both.
            </p>
          </div>
          <CTAButton
            href="/contact"
            variant="ghost"
            className="!bg-paper !text-trust hover:!bg-paper/90 shrink-0"
          >
            Contact Us Today
          </CTAButton>
        </div>
      </section>
    </>
  );
}
