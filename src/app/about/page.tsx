import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import ArcDivider from "@/components/ArcDivider";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About Us | Limat Care",
  description:
    "Limat Care was founded to give families one place to turn for both personal support care and accident benefit claim guidance.",
};

const values = [
  {
    icon: HeartHandshake,
    title: "Compassion first",
    body: "Every client is someone's family. We treat that with the seriousness it deserves.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty, always",
    body: "Clear, straightforward answers about care and claims, even when the news is complicated.",
  },
  {
    icon: Sparkles,
    title: "Steady support",
    body: "We stay with clients through the whole journey, not just the first phone call.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
            About Us
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-[1.1]">
            Care and advocacy, under one roof
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            Limat Care was founded on a simple idea: families dealing with an
            accident or an aging loved one shouldn&rsquo;t have to juggle
            separate providers for care and for claims.
          </p>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24 grid md:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl text-ink">Our story</h2>
          <p className="mt-5 text-ink/65 leading-relaxed">
            Limat Care started after seeing, again and again, how families
            were left to coordinate personal support care and insurance
            paperwork on their own &mdash; often while recovering from an
            accident or supporting an aging parent. We built Limat Care to be
            the single point of contact that was missing: one team for
            hands-on care, and one team for navigating accident benefits.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl text-ink">Our team</h2>
          <p className="mt-5 text-ink/65 leading-relaxed">
            Our personal support workers are trained and screened, and our
            claims advisors understand Ontario&rsquo;s accident benefits
            system inside and out. Everyone on the Limat Care team shares the
            same goal: making sure clients get the support and the benefits
            they&rsquo;re entitled to.
          </p>
        </div>
      </section>

      <section className="bg-cloud">
        <ArcDivider tone="line" className="bg-paper" />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
            What we stand for
          </h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-8">
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

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="rounded-2xl border border-line p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              Ready to talk about your situation?
            </h2>
            <p className="mt-3 text-ink/65 max-w-md">
              Reach out for a no-pressure conversation about care or a claim.
            </p>
          </div>
          <CTAButton href="/contact" className="shrink-0">
            Contact Us Today
          </CTAButton>
        </div>
      </section>
    </>
  );
}
