# Business Analyst Portfolio — React + Tailwind + GitHub Pages

This is a ready-to-deploy portfolio for **Sri Manikanta**, configured with **Tailwind CSS**, **GitHub Pages**, **SEO meta tags**, and **Google Analytics 4**.

## Quick Start
```bash
npm install
npm start
```

## Deploy
1. Edit `package.json` and set:
   ```json
   "homepage": "https://<your-username>.github.io/portfolio"
   ```
2. Commit & push to GitHub:
   ```bash
   git init
   git remote add origin https://github.com/<your-username>/portfolio.git
   git add .
   git commit -m "Initial commit: portfolio"
   git branch -M main
   git push -u origin main
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

The site will be available at `https://<your-username>.github.io/portfolio`.

## Google Analytics (GA4)
- In `public/index.html`, replace **G-XXXXXXXXXX** with your GA4 **Measurement ID** from Google Analytics.
- After deploy, you can verify real-time traffic in GA.

## SEO
- Meta tags are set in `public/index.html` (title, description, OpenGraph, Twitter).
- A placeholder `og-image.png`, `robots.txt`, and `sitemap.xml` are included.
- Update canonical URL and sitemap URLs after setting your username or custom domain.

## Customize
- Replace `/public/resume.pdf` with your actual résumé.
- Update your email/LinkedIn inside React components.
- Add more project cards in `src/Portfolio.jsx`.

## License
MIT
