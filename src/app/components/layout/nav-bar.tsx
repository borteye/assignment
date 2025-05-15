"use client";

import { navLinks } from "@/app/libs/loops";
import styles from "@/app/styles/nav-bar.module.css";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../shared/logo";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const isNotHome = pathname !== navLinks[0].href;

  return (
    <nav className={`${styles.navContainer} ${isNotHome && styles.normal}`}>
      <Logo />

      <div className={`${styles.navLinks}`}>
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${styles.navLink} ${isNotHome && styles.normalLink}  ${
              pathname === link.href
                ? isNotHome
                  ? styles.active
                  : styles.activeHome
                : ""
            }
  gilroy-medium`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className={styles.navButtons}>
        <button
          className={`${styles.navButton} ${
            isNotHome && styles.secondaryButton
          } `}
        >
          Join Us
        </button>

        {/* <Button>JOIN US</Button> */}
        <Menu className={styles.navMenu} />
      </div>
    </nav>
  );
}
