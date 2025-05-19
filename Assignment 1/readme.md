# Next.js Learning Notes

## What is Next.js?
Next.js is a React framework that provides a structure and additional features to build production-ready React applications. It's built on top of React and offers server-side rendering, static site generation, file-based routing, API routes, and many other features out of the box.

## Why do we need Next.js? What are the advantages?

### Why do we need it?
- **Server-Side Rendering (SSR)**: React by default is client-side rendered, which can lead to slower initial load times and SEO issues. Next.js solves this with built-in SSR.
- **Production Optimization**: Next.js has built-in optimization for production builds.
- **Simplified Development**: It provides a structured approach to building React applications.

### Advantages:
1. **Performance Optimization**: 
   - Automatic code splitting
   - Server-side rendering
   - Static site generation
   - Image optimization

2. **Developer Experience**:
   - File-based routing
   - Hot reloading
   - TypeScript support
   - Built-in CSS and Sass support

3. **SEO Benefits**:
   - Server-side rendering makes content immediately visible to search engines
   - Improved metadata management

4. **Deployment & Scaling**:
   - Easy deployment with Vercel (created by the same team)
   - Built-in API routes
   - Incremental Static Regeneration (ISR)


## Understanding the Pages Folder

### What is the pages folder for?
The `pages` folder in Next.js is where you define your application's routes. Each file in this folder corresponds to a route in your application based on its filename:

- `pages/index.js` → `/` (home page)
- `pages/about.js` → `/about`
- `pages/news.js` → `/news`

This is called file-based routing, and it's one of the key features of Next.js.

### When is the news page loaded? What is the URL?
The news page is loaded when a user navigates to `/news` in the browser. This corresponds to the file `pages/news.js` in your Next.js project.

### When is the index page loaded? What is the URL?
The index page is loaded when a user navigates to the root URL (`/`) of your website. This corresponds to the file `pages/index.js` in your Next.js project.

### What is the advantage of Next.js when viewing page source?
When viewing the page source in a Next.js application, you can see the fully rendered HTML content, including all your data. This is because Next.js performs server-side rendering, which means:

1. Better SEO - Search engines can crawl and index your content more effectively
2. Faster initial page load - Users see content immediately instead of waiting for JavaScript to load
3. Improved performance on lower-end devices - Less client-side processing required
4. Better social media sharing - Preview cards show actual content

In contrast, a traditional React app would show mostly empty HTML with JavaScript bundles that need to execute before content appears.
