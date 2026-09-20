import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Limat Care | Compassionate PSW Services & Accident Benefit Claims Markham",
  description:
    "Limat Care provides compassionate personal support worker (PSW) services in Markham, Scarborough, Ajax, and across Ontario, alongside expert guidance for auto insurance accident benefit claims.",
  keywords: [
    "Limat Care",
    "PSW Services Markham",
    "Accident Benefit Claims Ontario",
    "Personal Support Worker Scarborough",
    "Home Care Services Ajax",
    "Auto Insurance Claim Advisor Ontario",
    "Attendant Care Benefits Markham",
  ],
  metadataBase: new URL("https://www.limatcareservices.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Limat Care | Home Care & Accident Benefit Advisory",
    description:
      "Trained personal support workers and expert guidance for Ontario accident benefit claims — all under one roof.",
    url: "https://www.limatcareservices.com",
    siteName: "Limat Care",
    locale: "en_CA",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Limat Care",
  url: "https://www.limatcareservices.com",
  telephone: "+1-647-201-5508",
  email: "limatcareofficial@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7130 Warden Avenue, Suite 609",
    addressLocality: "Markham",
    addressRegion: "ON",
    postalCode: "L3R 4N3",
    addressCountry: "CA",
  },
  areaServed: ["Markham", "Scarborough", "Ajax", "Toronto", "Ontario"],
  serviceType: [
    "Personal Support Worker (PSW) Services",
    "Accident Benefit Claim Advisory",
    "Home Care",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
