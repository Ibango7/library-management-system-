'use client';
import Link from "next/link";
import styles from './styles/navbar.module.scss';
import  logo from '../../../public/assets/book_logo.png';
import Image from "next/image";
import {Menu} from 'antd';

const items = [
  {key: 0, label:"Search"},
  {key: 1, label:"Discover"},
  {key: 2, label:"Categories"},
  {key: 3, label:"My Account"},
  {key: 4, label:"About"},
  {key: 5, label:"Notifications"}
];


 const NavBar: React.FC = () => {
  return (
  
      <Menu mode="horizontal" className={styles.navigation}>
       <Menu.Item key="logo">
         <Link href="/">
          {/* Make sure to replace the Image component with Ant Design's Image component */}
         <Image className={styles.logoImage} src={logo} alt="logo"/> 
        <span className={styles.logoLabel}>BookR</span>
          </Link>
          </Menu.Item >
          <Menu.Item key="about" className={styles.menuItems}>
            <Link href="/search">Search</Link>
          </Menu.Item>
          <Menu.Item key="discovery" className={styles.menuItems} >
            <Link href="/discovery">Discover</Link>
          </Menu.Item>
          <Menu.Item key="categories" className={styles.menuItems} >
            <Link href="/categories">Categories</Link>
          </Menu.Item>
          <Menu.Item key="profile" className={styles.menuItems}>
            <Link href="/profile">My Account</Link>
          </Menu.Item>
          <Menu.Item key="notification" className={styles.menuItems}>
            <Link href="/notification">Notifications</Link>
          </Menu.Item>
          <Menu.Item key="login" className={styles.menuItems}>
            <Link href="/login">Login</Link>
          </Menu.Item>
          <Menu.Item key="register" className={styles.menuItems}>
            <Link href="/register">Register</Link>
          </Menu.Item>
       </Menu>
    // <nav className="{styles.navigation}">
    //   {/* <ul className={styles.logoItem}><li><div className={styles.logoContainer}><Link href="#"><span> <Image className={styles.logoImage} src={logo} alt="logo"/></span></Link> <span className={styles.logoLabel}>BookR</span></div></li></ul> */}
    //   <ul className={styles.menuItems}>
    //     <li><div className={styles.logoContainer}><Link href="#"><span> <Image className={styles.logoImage} src={logo} alt="logo"/></span></Link> <span className={styles.logoLabel}>BookR</span></div></li>
    //     <li><Link href = "/about"><span> About</span></Link></li>
    //     <li><Link href = "/events"><span> Events</span></Link></li>
    //     <li><Link href = "/profile"><span> My Account</span></Link></li>
    //     <li><Link href = "/notification"><span> Notifications</span></Link></li>
    //     <li><Link href = "/login"><span> Login</span></Link></li>
    //     <li><Link href = "/register"><span> Register</span></Link></li>
    //   </ul>
    // </nav>
  );
}

export default NavBar;