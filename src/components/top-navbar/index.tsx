import Link from "next/link";
import styles from './style.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navigation}>
      <Link href = "/about"><span>About</span></Link>
      <Link href = "/events"><span>Events</span></Link>
      <Link href = "/profile"><span>My Account</span></Link>
      <Link href = "/notification"><span>Notifications</span></Link>
    </nav>
  );
}