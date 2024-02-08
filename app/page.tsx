import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      {/* <a href='/users'>Users</a>  Link component instead of anchor tag for navigation. */}
      <Link href='/users'>Users</Link>
      <ProductCard />
    </main>
  );
}
