import { navLinks } from "@/app/libs/loops";
import Image from "next/image";
import styles from "@/app/styles/nav-bar.module.css";
import { Menu } from "lucide-react";

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
          <a key={index} href="#" className={`${styles.navLink} gilroy-medium`}>
            {link}
          </a>
        ))}
      </div>

      <div className={styles.navButtons}>
        <button className={styles.navButton}>JOIN US</button>
        <Menu className={styles.navMenu} />
      </div>
    </nav>
  );
}
