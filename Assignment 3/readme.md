## Dynamic Routes in Next.js

### How do we handle dynamic routes?
Next.js handles dynamic routes through special filename syntax using square brackets `[]`. Any file or folder name wrapped in square brackets becomes a dynamic route parameter.

For example:
- `pages/aboutus/[id].js` creates a dynamic route matching `/aboutus/1`, `/aboutus/2`, etc.
- The value inside the brackets (`id` in this case) becomes the name of the parameter you can access.

### How can we get the dynamic route value?
You can access dynamic route parameters using the `useRouter` hook from Next.js:

```jsx
import { useRouter } from 'next/router';

function MyPage() {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic parameter

  return <div>The ID is: {id}</div>;
}
```

### Why does router.query print undefined first and then the actual value?
Router.query initially returns undefined and then updates with the actual parameter value because of how Next.js hydration works:

1. **First Render (Server-Side)**: When the page first loads, server-side rendering happens before the router is fully initialized. At this point, router.query is undefined.

2. **Hydration (Client-Side)**: After the initial server render, Next.js "hydrates" the page on the client side, adding interactivity. During this process, the router information becomes available and router.query is populated with the actual values.

This is why it's common to see a pattern like this in Next.js components:

```jsx
const router = useRouter();

// Check if router is ready before accessing query
if (!router.isReady) return <div>Loading...</div>;
```

Alternatively, you can use useEffect to respond to changes in router.query:

```jsx
useEffect(() => {
  if (router.query.id) {
    // Now router.query.id is available
  }
}, [router.query]);
```
