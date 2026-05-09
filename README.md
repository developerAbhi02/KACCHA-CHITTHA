# KACHHA CHITTHA Landing Page

Production-ready Next.js landing page for investigative intellectual platform.

## Quick Start

### Option 1: Automatic (Windows)
Double-click `install.bat` to install dependencies.
Then double-click `dev.bat` to start dev server.

### Option 2: Manual
```bash
cd x:\KacchaChittha
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout
├── globals.css           # Global styles
├── Hero.tsx              # Hero section
├── PosterSection.tsx     # Poster display
├── About.tsx             # About section
├── IssueGrid.tsx         # 6 issue areas grid
├── CallForSpeakers.tsx   # Call to action
├── FormSection.tsx       # Google Form embed
├── FinalCTA.tsx          # Final call to action
└── Footer.tsx            # Footer with contact

Root:
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── .prettierrc
└── .gitignore
```

## Setup Instructions

1. **Install Dependencies**
   - Run `install.bat` (Windows) or `npm install`

2. **Add Poster Image**
   - Create a `public/` folder in the root directory
   - Add your `poster.jpg` file there

3. **Add Google Form**
   - Open `app/FormSection.tsx`
   - Replace `REPLACE_WITH_GOOGLE_FORM_LINK` with your actual Google Form embed URL
   - Example: `https://docs.google.com/forms/d/e/[YOUR-FORM-ID]/viewform?embedded=true`

4. **Run Dev Server**
   - Run `dev.bat` (Windows) or `npm run dev`
   - Visit http://localhost:3000

5. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Features

✅ Dark theme with lime green accents (#A3E635)
✅ 8 fully optimized sections
✅ Responsive mobile-first design
✅ Smooth scroll animations
✅ High-conversion CTAs
✅ Google Form embed integration
✅ WhatsApp + Email contact links
✅ Issue areas grid (Education, Healthcare, Water, Jobs, Climate, Agriculture)
✅ Production-ready, clean code
✅ Fast loading & accessibility optimized
✅ Tailwind CSS + TypeScript

## Deployment

Ready to deploy to:
- **Vercel** (recommended): Connect GitHub repo, auto-deploys on push
- **Netlify**: Connect GitHub, configure build command: `npm run build`, publish directory: `.next`
- **Any Node.js host**: Build with `npm run build`, start with `npm start`

## Contact Integration

- **WhatsApp**: 8957536528
- **Phone**: 8957536528  
- **Email**: skus8055@gmail.com

All contact links are functional and ready to use.

