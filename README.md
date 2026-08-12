# Limat Care website

A Next.js + Tailwind CSS site for Limat Care (PSW services and accident
benefit claim advising), built to deploy on Vercel with no database.

## Pages

- `/` — Home
- `/psw-services` — PSW Services
- `/accident-benefit-claims` — Accident Benefit Claims
- `/about` — About Us
- `/testimonials` — Testimonials
- `/contact` — Contact form, phone/email/hours, map

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you launch — things to update

1. **Contact form email** (`src/app/api/contact/route.ts`)
   The form submits to your own serverless API route, which sends mail
   via [Resend](https://resend.com) — free for up to 3,000 emails/month
   (100/day), no database needed. Set these two environment variables
   in Vercel → Project → Settings → Environment Variables:
   - `RESEND_API_KEY` — from your Resend dashboard (sign up, verify
     your email, copy the API key)
   - `OWNER_EMAIL` — the inbox that should receive enquiries
   Until you verify `limatcare.ca` as a sending domain in Resend (takes
   a few DNS records), emails send from Resend's shared test address —
   fine for launch, but verify the domain when you can so mail lands
   from `@limatcare.ca` instead. Locally, add the same variables to a
   `.env.local` file to test before deploying.

2. **Testimonials** (`src/app/testimonials/page.tsx`)
   The `testimonials` array is placeholder content. Swap in real client
   quotes and names once you have permission to publish them. The same
   pattern is used for the quote on the home page.

3. **Phone, email, address**
   Search for `647-921-9909` and `info@limatcare.ca` — they appear in
   `Footer.tsx` and `contact/page.tsx`. Update both, and swap the Google
   Maps embed in `contact/page.tsx` for your real office address (Google
   Maps → Share → Embed a map → copy the `src` URL).

4. **Logo**
   Sourced from the PDF you provided, in `public/images/`
   (`logo-full.png`, `logo-icon.png`, `logo-icon-web.png`). Swap in
   vector/high-res source files here if you get them later.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to https://vercel.com → New Project → import the repo.
3. Vercel auto-detects Next.js — click Deploy.
4. In Vercel → Project → Settings → Domains, add your `.ca` domain once
   you've purchased one (Namecheap, Google Domains successor, or a
   Canadian registrar) and point its DNS as Vercel instructs.

Hosting on Vercel's free Hobby plan, SSL, and the domain itself
(roughly CAD $15–30/year) are the only ongoing costs — no server or
database to maintain.
