# Pratik Vimalbalaji · Portfolio

Built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS v4**, and a **Node.js** API route that sends contact-form messages by email through Nodemailer.

## Run it locally

Requires Node.js 18.18 or newer (20+ recommended).

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev
```

Open http://localhost:3000.

## Edit content

Almost everything you'd change lives in **`lib/data.ts`**: your bio line, roles, timeline, projects, skills, certifications, and research.

- **Project links:** each project's `link` currently points to your GitHub profile. Replace it with the repo URL.
- **Paper link:** set `research.paperUrl` to the IEEE Xplore or DOI link and a "Read the paper" button appears.
- **Resume:** replace `public/Pratik_Vimalbalaji_Resume.pdf` with a newer copy (keep the file name, or update `profile.resume`).

## Contact form setup (Gmail)

1. Turn on 2-Step Verification on your Google account.
2. Create an App Password at https://myaccount.google.com/apppasswords.
3. Put these in `.env.local` (and later in Vercel's Environment Variables):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your.address@gmail.com
SMTP_PASS=the-16-character-app-password
CONTACT_TO=vimalbalaji.p@northeastern.edu
```

Never commit `.env.local`; it's already in `.gitignore`.

## Deploy free on Vercel

1. Push this folder to a new GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click **Add New → Project**, and import the repo.
3. Under **Environment Variables**, add the five `SMTP_*` / `CONTACT_TO` values.
4. Click **Deploy**. You'll get a `*.vercel.app` URL; every push to `main` redeploys automatically.

GitHub Pages won't run the contact API, since it only serves static files. Vercel (or Netlify) runs the Node.js route for free.

## Project structure

```
app/
  layout.tsx            fonts (Anton, Manrope, JetBrains Mono) and metadata
  page.tsx              assembles the sections
  globals.css           Tailwind import, black/red color tokens, cut-corner and slash styles
  api/contact/route.ts  Node.js email endpoint
components/             one file per section, plus the command palette and terminal
lib/data.ts             all site content
public/                 resume PDF
```

## Features

- Original black-and-red design: condensed display type, sword-cut corners, slanted buttons, film grain
- Fully responsive from 320px phones to wide desktops
- ⌘K / Ctrl+K command palette for jumping to sections, copying your email, or downloading the resume
- Animated terminal hero that respects reduced-motion settings
- Contact form with validation, a spam honeypot, and basic rate limiting
