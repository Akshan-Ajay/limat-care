import type { Metadata } from "next";
import { Star } from "lucide-react";
import ArcDivider from "@/components/ArcDivider";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Testimonials | Limat Care",
  description: "What Limat Care clients say about our PSW services and accident benefit claim support.",
};

// Placeholder testimonials -- swap in real client quotes and names
// before launch. Each entry just needs a quote, name, and context line.
const testimonials = [
  {
    quote:
      "Our PSW is patient and genuinely kind with my father. It gave our whole family peace of mind.",
    name: "R. Fernando",
    context: "PSW client, Scarborough",
  },
  {
    quote:
      "After my accident I had no idea what I was entitled to. Limat Care explained everything and handled the forms.",
    name: "J. Thomas",
    context: "Accident benefit claim client",
  },
  {
    quote:
      "Reliable, on time, and easy to reach. Exactly what we needed for my mother's care.",
    name: "A. Kumar",
    context: "PSW client, Markham",
  },
  {
    quote:
      "They followed up with the insurer so I didn't have to. That alone was worth it.",
    name: "S. Wickramasinghe",
    context: "Accident benefit claim client",
  },
  {
    quote:
      "Consistent caregivers who treat my grandmother like their own family.",
    name: "P. Nadarajah",
    context: "PSW client, Ajax",
  },
  {
    quote:
      "Clear answers, no runaround. They pushed back when my claim was delayed.",
    name: "M. Silva",
    context: "Accident benefit claim client",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
            Testimonials
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-[1.1]">
            What clients say
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            A few words from families we&rsquo;ve supported, in care and in
            their accident benefit claims.
          </p>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-line p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-4" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="text-ink/80 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-line">
                <p className="font-semibold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-ink/55 mt-0.5">{t.context}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-trust text-paper">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              Become one of our stories.
            </h2>
            <p className="mt-3 text-paper/80 max-w-md">
              Reach out today and let&rsquo;s talk about what support looks
              like for you.
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
