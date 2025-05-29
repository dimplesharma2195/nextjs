# Answers

## Video 13 & 14  
### 1. How can you have dynamic nested pages?  
- Next.js uses **file-based routing**, matching folders and files under `pages/` to URL segments.  
- A folder or file name in square brackets (`[param]`) defines a dynamic segment.  
- Nest folders/files to create nested routes—each folder level corresponds to a segment.

### 2. Folder structure for `/ {userId} /videocall`  
```bash
pages/
└── [userId]/
    └── videocall.js
```  
- Visiting `/123/videocall` renders `pages/[userId]/videocall.js` with `userId === "123"`.

---

## Video 15 – MeetupList Component  
```jsx
function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map(m => (
        <MeetupItem
          key={m.id}
          id={m.id}
          image={m.image}
          title={m.title}
          address={m.address}
        />
      ))}
    </ul>
  );
}
```
- **Expects:**  
  - Prop `meetups`: an array of objects each with `{ id, image, title, address }`.  
- **Returns:**  
  - A `<ul>` of `<MeetupItem>` children, passing each meetup’s data down.  
- **Homepage component:**  
  - In Next.js, pages (e.g. `pages/index.js`) are just React components.  
  - Yes—your homepage JSX looks and behaves like standard React; Next.js handles routing and SSR behind the scenes.

---

## Video 16 – Meetup Form  
We implement a controlled form component for creating new meetups:

```jsx
function NewMeetupForm(props) {
  // refs for title, image, address, description
  // on submit, gather values and call props.onAddMeetup(meetupData)
}
```

- Uses `useRef()` to read input values on submit.  
- Wraps inputs in a styled `<Card>` and invokes `props.onAddMeetup` with the collected data object.

---

## Video 17 – Custom `_app.js`  
```jsx
// pages/_app.js
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```
1. **Use of `_app.js`:**  
   - The top‐level React component wrapper for all pages.  
2. **Props received:**  
   - `Component`: the active page component (e.g. `HomePage`, `MeetupDetailPage`).  
   - `pageProps`: props returned by page’s data-fetching methods (`getStaticProps`, etc.).  
3. **Wrapping `<Layout>` here solves:**  
   - You avoid importing and wrapping `<Layout>` in every individual page.  
   - All pages automatically share the same navigation header and overall layout.

---
