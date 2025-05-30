# SEO & Deployment

## SEO-Friendly Practices (Video 31)

1. **Meta Tags & Head Component**  
   - Use Next.js’s `<Head>` to set `<title>`, `<meta name="description">`, and social preview tags (`og:*`, `twitter:*`).  
   - Ensure each page has a unique, descriptive title and meta description.

2. **Static Pre-Rendering**  
   - Leverage SSG (`getStaticProps` / `getStaticPaths`) so crawlers receive fully built HTML.  
   - Use Incremental Static Regeneration (`revalidate`) for fresh yet performant pages.

3. **Clean, Semantic URLs**  
   - Prefer human-readable slugs over query strings (e.g. `/meetups/react-ny-2025` vs. `?id=m1`).  
   - Organize dynamic routes with `[param]` folders for clarity.

4. **Structured Data (JSON-LD)**  
   - Embed JSON-LD scripts for key content types (events, products, articles).  
   - Enables rich snippets (event dates, ratings) in search results.

5. **Performance & Core Web Vitals**  
   - Optimize images with Next.js `<Image>` component or externally via a CDN.  
   - Minify CSS/JS and use caching headers to improve LCP, FID, CLS scores.

6. **Accessibility & Semantic HTML**  
   - Use proper headings (`<h1>`–`<h6>`), landmarks (`<nav>`, `<main>`), and alt tags.  
   - Better for both users and search engines.

7. **Sitemaps & robots.txt**  
   - Generate a dynamic `sitemap.xml` at build or runtime.  
   - Provide `robots.txt` to guide crawler indexing.

8. **Canonical URLs**  
   - Add `<link rel="canonical">` to avoid duplicate-content penalties on similar pages.

---

## Deployment Essentials (Videos 32–34)

1. **Production Build**  
   - `npm run build` (or `yarn build`) compiles and optimizes your Next.js app into the `.next/` directory.  
   - Generates both server-side bundles and client-side assets.

2. **Build Artifacts**  
   - **`.next/server/pages`**: Static HTML & JSON for SSG/SSR pages.  
   - **`.next/static`**: JS/CSS chunks, images, and other client assets.  
   - **Build manifest & route-manifest**: Mapping of pages to assets.

3. **Hosting Options**  
   - **Vercel** (first-party): zero-configuration, automatic builds on push.  
   - **Netlify**: supports Next.js with community plugin.  
   - **Custom Server / VPS**: deploy `.next` build with a Node.js process and reverse proxy (e.g., Nginx).

4. **Environment Variables**  
   - Store secrets (API keys, DB URIs) in host-specific env vars (Vercel dashboard, `.env.*`).  
   - Never embed private keys or credentials in client-side code.

5. **Continuous Deployment**  
   - Hook your repo to Vercel/Netlify for push-to-deploy.  
   - Use Git branches and previews (e.g., Vercel Preview Deployments) for QA.

6. **Static Export** (optional)  
   - `next export` produces a fully static site (no Node server).  
   - Ideal for pure static hosting (GitHub Pages, S3 + CloudFront).

7. **Custom Domains & SSL**  
   - Most platforms offer easy domain linking and automatic HTTPS provisioning.

