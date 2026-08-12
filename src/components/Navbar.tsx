"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/psw-services", label: "PSW Services" },
  { href: "/accident-benefit-claims", label: "Accident Benefit Claims" },
  { href: "/about", label: "About Us" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo-icon-web.png"
              alt=""
              width={40}
              height={34}
              className="h-9 w-auto"
              priority
            />
            <span className="font-display text-xl text-ink leading-none">
              L&iacute;mat Care
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === l.href
                    ? "text-trust"
                    : "text-ink/75 hover:text-trust"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-trust px-5 py-2.5 text-sm font-semibold text-paper hover:bg-trust-deep transition-colors"
            >
              Contact Us Today
            </Link>
          </nav>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base font-medium border-b border-line/70 last:border-0 ${
                  pathname === l.href ? "text-trust" : "text-ink/80"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
