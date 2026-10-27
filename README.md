# RJK Limited — Real Estate Website

A responsive Next.js + Tailwind CSS real estate website for RJK Limited, focused on Mirsharai, Chattogram. Built with JavaScript (no TypeScript), Framer Motion animations, and Lucide icons.

## Run locally

1. Install Node.js 18.17+.
2. Extract the ZIP and open this folder in VS Code.
3. Run:

```bash
npm install
npm run dev
```

4. Visit http://localhost:3000

## Deploy to Vercel

1. Upload the project to a GitHub repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the framework preset as **Next.js** and click **Deploy**. No environment variables are required for the demo.

## Before publishing for your client

- Replace the illustrative property listings, names, images, statuses, and descriptions with RJK Limited's real inventory.
- Confirm every location, land measurement, price, title/deed status, project approval, and availability before publishing.
- Replace sample testimonials with genuine client reviews only after receiving permission.
- Add RJK Limited's verified WhatsApp phone number. In `app/page.js`, change `https://wa.me/?text=` to `https://wa.me/8801XXXXXXXXX?text=` using the business number in international format (digits only).
- Update `metadataBase` in `app/layout.js` after the domain is known.
- Replace generic footer/contact details with the company's official address, phone, email, and social links.
- The enquiry form opens WhatsApp and does not store leads in a database. Connect a backend/CRM if the client needs saved leads or an admin dashboard.

## Design notes

The visual direction uses a warm neutral canvas, forest-green brand colour, lime accent, editorial typography, responsive property cards, search/filter controls, scroll reveal animations, and a mobile navigation menu. Images are remote Unsplash URLs, so an internet connection is required to load them.
