import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ArcDivider from "@/components/ArcDivider";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Limat Care",
  description:
    "Get in touch with Limat Care for PSW services or help with an accident benefit claim.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cloud">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-16 md:pt-24 md:pb-20">
          <p className="text-sm font-semibold tracking-[0.14em] uppercase text-heal mb-5">
            Contact
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-ink max-w-2xl leading-[1.1]">
            Let&rsquo;s talk
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">
            Reach out about PSW services, an accident benefit claim, or both.
            We usually respond within one business day.
          </p>
        </div>
        <ArcDivider tone="trust" className="bg-cloud" />
      </section>

      <section className="mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14">
          <div>
            <h2 className="font-display text-2xl text-ink mb-8">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink mb-8">
              Reach us directly
            </h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <Phone className="h-5 w-5 text-trust shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <p className="font-semibold text-ink text-sm">Phone</p>
                  <a href="tel:+16479219909" className="text-ink/65 hover:text-trust transition-colors">
                    647-921-9909
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="h-5 w-5 text-trust shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <p className="font-semibold text-ink text-sm">Email</p>
                  <a href="mailto:info@limatcare.ca" className="text-ink/65 hover:text-trust transition-colors">
                    info@limatcare.ca
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="h-5 w-5 text-trust shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <p className="font-semibold text-ink text-sm">Service area</p>
                  <p className="text-ink/65">Greater Toronto Area, Ontario</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="h-5 w-5 text-trust shrink-0 mt-0.5" strokeWidth={1.6} />
                <div>
                  <p className="font-semibold text-ink text-sm">Hours</p>
                  <p className="text-ink/65">Monday &ndash; Friday, 9am &ndash; 6pm</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl overflow-hidden border border-line">
              <iframe
                title="Limat Care service area map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369183.5!2d-79.6!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwMjQnMDAuMCJX!5e0!3m2!1sen!2sca"
                className="w-full h-72 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-2 text-xs text-ink/40">
              Map shown for the general Greater Toronto Area &mdash; replace
              with an embed for your exact office address.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
