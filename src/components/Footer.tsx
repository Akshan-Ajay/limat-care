import Link from "next/link";
import Image from "next/image";
import ArcDivider from "./ArcDivider";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/90">
      <ArcDivider tone="heal" className="bg-ink [&_svg_path]:stroke-heal" />
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/images/logo-icon-web.png"
              alt=""
              width={36}
              height={31}
              className="h-8 w-auto opacity-95"
            />
            <span className="font-display text-lg text-paper">L&iacute;mat Care</span>
          </div>
          <p className="text-sm text-paper/65 max-w-sm leading-relaxed">
            Compassionate personal support at home, and clear guidance through
            accident benefit claims &mdash; so you can focus on getting better,
            not paperwork.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-paper/90 mb-4">
            Explore
          </h3>
          <ul className="space-y-2.5 text-sm text-paper/65">
            <li><Link href="/psw-services" className="hover:text-heal transition-colors">PSW Services</Link></li>
            <li><Link href="/accident-benefit-claims" className="hover:text-heal transition-colors">Accident Benefit Claims</Link></li>
            <li><Link href="/about" className="hover:text-heal transition-colors">About Us</Link></li>
            <li><Link href="/testimonials" className="hover:text-heal transition-colors">Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-heal transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-paper/90 mb-4">
            Get in touch
          </h3>
          <ul className="space-y-2.5 text-sm text-paper/65">
            <li>
              <a href="tel:+16479219909" className="hover:text-heal transition-colors">
                647-921-9909
              </a>
            </li>
            <li>
              <a href="mailto:info@limatcare.ca" className="hover:text-heal transition-colors">
                info@limatcare.ca
              </a>
            </li>
            <li className="text-paper/65">Serving the Greater Toronto Area, Ontario</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-paper/50">
          <p>&copy; {new Date().getFullYear()} Limat Care. All rights reserved.</p>
          <p>Accident Benefit Claim Advisor</p>
        </div>
      </div>
    </footer>
  );
}
