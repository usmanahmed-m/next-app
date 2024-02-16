import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <a href='/users'>Users</a>  Link component instead of anchor tag for navigation.
      Link only downloads the content of target page
      Link Pre-fetches links that are in the viewport. Works in production mode.
      Caches pages on the client
      With full page reload client cache is cleared */}
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  );
}

// There are some special Files next js router look for:
// - pages.tsx - To make a route publically accessible we have to put page file in that folder
// - layout.tsx - Used for defining common layout for pages
// - loading.tsx - file for showing loading UIs
// - route.tsx - for creating APIs
// - not-found.tsx - for showing custom errors
// - error.tsx - for showing general custom error pages
