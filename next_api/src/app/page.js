import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-center">Welcome to Next js</h1>
      <Link href="/postapiinte">Go to Post API Integration</Link>
    </div>
  );
}
