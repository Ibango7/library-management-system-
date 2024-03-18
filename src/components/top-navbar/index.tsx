import Link from "next/link";
import { useStyles } from "./styles/styles";

 const NavBar: React.FC = () => {
  const {styles} = useStyles()
  return (
    <nav className={styles.navigation}>
      <Link href = "/about"><span className={styles["navigation span"]}>About</span></Link>
      <Link href = "/events"><span className={styles["navigation span"]}>Events</span></Link>
      <Link href = "/profile"><span className={styles["navigation span"]}>My Account</span></Link>
      <Link href = "/notification"><span className={styles["navigation span"]}>Notifications</span></Link>
    </nav>
  );
}

export default NavBar;