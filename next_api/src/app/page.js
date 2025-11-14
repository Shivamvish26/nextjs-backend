import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center">Welcome to Next js</h1>
      <Link href="/postapiinte">Go to Post API Integration</Link> <br/>
      <Link href="/productdeatils">Go to Product Details Page</Link>
    </div>
  );
}
