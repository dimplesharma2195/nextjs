# Answers

## Video 20
1. **Difference `useEffect` brings**  
   - Runs side-effects (data fetching, subscriptions, DOM manipulations) **after** React has updated the DOM.  
   - Unlike the server-rendered HTML, effects only execute on the client.

2. **When `useEffect` runs in the lifecycle**  
   - After every render by default (mount & update).  
   - If you pass a dependency array, it runs after the first render (mount) and whenever a dependency changes.

3. **What is missing in the HTML tags? Why?**  
   - The `lang` attribute on the `<html>` element is missing.  
   - Next.js uses automatic document rendering; if you don’t customize `_document.js`, you get the default `<html>` without `lang`.

4. **Main problem of pre-rendering**  
   - Data may become stale: you ship HTML at build time, so without revalidation or SSR it can go out of sync with real-time data.

---

## Video 21 – Pre-rendering Process
Next.js pre-renders pages ahead of time. Three main parts:

1. **`getStaticProps`**  
   - Runs at build time to fetch data.  
   - Populates `props` for the page’s React component.

2. **`getStaticPaths`**  
   - Defines dynamic routes to pre-render based on data (e.g. IDs).  
   - Returns `paths` (array of route params) and `fallback` behavior.

3. **Page Generation**  
   - Next.js uses the results of the two hooks to generate static HTML + JSON data for each page.

**Main use of `getStaticProps`**  
- Fetch and embed data into pages at build time for super-fast static pages.

**Main feature of Next.js**  
- Hybrid rendering: allows mixing SSG, SSR, and client-side rendering in one app.

---

## Video 22 – `npm run build`
1. **What it does**  
   - Compiles and bundles your app for production.  
   - Optimizes code, minifies JS/CSS, generates build manifest, and prerenders all static pages.

2. **Files created**  
   - `.next/` directory containing:  
     - `server` (compiled server code)  
     - `static` (client assets)  
     - `cache/manifests` (build manifests)  
     - `.next/server/pages` (pre-rendered HTML & JSON)

3. **Main problem of `getStaticProps`**  
   - Data is only fetched at build time; pages don’t update until you rebuild.

4. **How `revalidate` solves it**  
   - Enables Incremental Static Regeneration: after the specified seconds, Next.js will regenerate the page on the server, keeping static benefits but with fresher data.

---

## Video 23 – `getServerSideProps`
1. **Use & advantages**  
   - Runs on every request (SSR), always fresh data.  
   - Better than SSG when data changes frequently or depends on request (auth, cookies).

2. **Disadvantages & when to use**  
   - Slower than SSG (no caching at CDN edge by default).  
   - Use `getStaticProps` if data can be stale for a bit; use `getServerSideProps` when data must be real-time or request-specific.

3. **`context.req` & `context.res`**  
   - Give you access to Node.js request/response objects—useful for reading headers, cookies, setting status codes, redirects.

---

## Videos 24 & 25 – Dynamic Routes & Fallback
1. **Can we use `useRouter` in `getStaticProps`?**  
   - No; `getStaticProps` runs on the server at build time, not in a React component.

2. **Solving dynamic routes in `getStaticProps`**  
   - Use `getStaticPaths` to tell Next.js which dynamic routes to pre-render.

3. **Why `getStaticPaths` is needed**  
   - It enumerates all dynamic route parameters (e.g. meetup IDs) so Next.js knows which pages to generate.

4. **`fallback: false` vs `true`**  
   - `false`: only the specified paths render; other routes 404.  
   - `true`: unspecified paths render on first request (fallback), then cached.

5. **Why we don’t see `console.log` of `getStaticProps` in the browser**  
   - It runs on the server side during build or revalidation; its logs appear in the terminal, not the browser console.

---
