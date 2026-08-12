import type { Metadata } from "next";
import { FileText, ClipboardList, Users2, Scale } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import ArcDivider from "@/components/ArcDivider";

export const metadata: Metadata = {
  title: "Accident Benefit Claims | Limat Care",
  description:
    "Limat Care helps clients understand and navigate accident benefit claims after a motor vehicle accident in Ontario.",
};

const steps = [
  {
    icon: FileText,
    title: "We explain your benefits",
    body: "Ontario's accident benefits can cover medical care, attendant care, income replacement, and more. We walk you through what applies to your situation, in plain language.",
  },
  {
    icon: ClipboardList,
    title: "We help with the paperwork",
    body: "Claim forms, treatment plans, and insurer correspondence are confusing on their own. We help you complete and track everything, so nothing gets missed.",
  },
  {
    icon: Users2,
    title: "We coordinate your care team",
    body: "When PSW support, medical treatment, and a claim are all moving at once, we help keep everyone &mdash; you, your providers, and your insurer &mdash; on the same page.",
  },
  {
    icon: Scale,
    title: "We advocate for you",
    body: "If a claim stalls or a request is denied, we help you understand your options and push for the support you're entitled to.",
  },
];

export default function AccidentBenefitClaimsPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
            Accident Benefit Claims
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-[1.1]">
            Guidance after an accident, when it&rsquo;s hardest to navigate alone
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            After a car accident, you&rsquo;re entitled to accident benefits
            under your auto insurance policy &mdash; regardless of fault.
            Limat Care helps you understand and claim what you&rsquo;re owed.
          </p>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl text-ink">
            What are accident benefits?
          </h2>
          <p className="mt-5 text-ink/65 leading-relaxed">
            Accident benefits are a part of every Ontario auto insurance
            policy. They can help cover medical treatment, rehabilitation,
            attendant care at home, lost income, and other accident-related
            costs &mdash; separate from any legal claim against another
            driver. Many people don&rsquo;t realize how much they&rsquo;re
            entitled to, or how to start the process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line p-8">
              <s.icon className="h-7 w-7 text-trust" strokeWidth={1.6} />
              <h3 className="font-semibold text-ink mt-5">{s.title}</h3>
              <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cloud">
        <ArcDivider tone="line" className="bg-paper" />
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl text-ink max-w-xl">
            What sets Limat Care apart
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div>
              <p className="font-display text-lg text-trust">One team</p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                The same people supporting your care at home also support
                your claim &mdash; nothing falls through the cracks between
                the two.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-trust">Plain language</p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                We explain insurance terms and forms in everyday language,
                not jargon.
              </p>
            </div>
            <div>
              <p className="font-display text-lg text-trust">On your side</p>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                We work for you, not the insurer &mdash; helping you get the
                benefits you&rsquo;re entitled to.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-trust text-paper">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">
              Been in an accident? Let&rsquo;s go over your options.
            </h2>
            <p className="mt-3 text-paper/80 max-w-md">
              A first conversation is free &mdash; and it&rsquo;s the fastest
              way to find out what you&rsquo;re entitled to.
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
