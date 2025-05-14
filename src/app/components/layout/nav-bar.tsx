import { navLinks } from "@/app/libs/loops";
import Image from "next/image";
import styles from "@/app/styles/nav-bar.module.css";
import { Menu } from "lucide-react";
import Link from "next/link";
import Button from "../shared/button";

export default function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navLogoContainer}>
        <Image
          src="/images/globe.png"
          alt="Globe"
          width={24}
          height={24}
          priority
          quality={100}
          className={styles.navLogo}
        />
        <h1 className={styles.navLogoText}>HELLO WORLD</h1>
      </div>

      <div className={`${styles.navLinks} `}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${styles.navLink} gilroy-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className={styles.navButtons}>
        <Button>JOIN US</Button>
        <Menu className={styles.navMenu} />
      </div>
    </nav>
  );
}
