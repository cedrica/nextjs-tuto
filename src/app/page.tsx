import Link from "next/link";

export default function Home() {
  const id = 2;
  return (
  <>
  <h1>Welcome home</h1>
  <Link href="/blog">Blog</Link>
  <Link href={`products/${id}`}>products</Link>
  </>
  ) ;
}
