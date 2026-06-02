# K9 Claw — Official Website

The production website for K9 Claw, the motorized dog pooper scooper by Premier Pet Innovations, Inc.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
k9claw/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       ├── layout.tsx      # Contact metadata
│       └── page.tsx        # Contact page (client component)
├── components/
│   ├── Navbar.tsx          # Sticky responsive navigation
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Home hero section
│   ├── Benefits.tsx        # Key benefits grid
│   ├── Features.tsx        # Product features
│   ├── HowItWorks.tsx      # Step-by-step guide
│   ├── FAQ.tsx             # Accordion FAQ
│   └── CTASection.tsx      # Final call-to-action
├── config/
│   └── site.ts             # ← All site configuration here
└── public/
    ├── logo.png
    ├── hero-product.jpg
    ├── product-1.jpg
    ├── product-2.jpg
    ├── product-3.jpg
    ├── robots.txt
    └── sitemap.xml
```

## ⚙️ Configuration

All site-wide config lives in `config/site.ts`:

```ts
export const siteConfig = {
  siteName: "K9 Claw",
  shopifyUrl: "https://www.getK9claw.com/shop", // ← Update store URL here
  contactEmail: "info@getK9claw.com",
  // ...
};
```

## 🌐 Deployment

### Vercel (recommended)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Deploy — zero config needed

### Manual

```bash
npm run build
# Upload .next/ folder to your hosting provider
```

## 🎨 Brand

- Primary: `#837262`
- Background: `#FFFFFF`
- Text: `#000000`
- Font: Geist (display) + Georgia (headings)

---

© Premier Pet Innovations, Inc. | [www.getK9claw.com](https://www.getK9claw.com)
