import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2> Library management system</h2>
      <Link href = "/user/home">About</Link>
      <Link href = "/user/home">Events</Link>
      <Link href = "/user/home">My Account</Link>
      <Link href = "/user/home">Notifications</Link>
    </main>
  );
}
