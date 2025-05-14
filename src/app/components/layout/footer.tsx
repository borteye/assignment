import styles from "@/app/styles/footer.module.css";
import Logo from "../shared/logo";
import Link from "next/link";
import { navLinks, socials } from "@/app/libs/loops";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerOne}>
        <div>
          <Logo />
          <p className={`${styles.footerSlogan} gilroy`}>
            practice and repetitions make your perfect, <br /> learn coding by
            repetitions
          </p>
        </div>
        <div className={styles.footerLinks}>
          <div>
            <h3 className={styles.footerHeading}>Navigation</h3>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} className={styles.footerListItem}>
                  <Link
                    href={link.href}
                    className={`${styles.footerLink} gilroy `}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.footerHeading}>Follow</h3>
            {socials.map((social, index) => (
              <Link
                href={social.link}
                key={index}
                className={styles.footerSocialItem}
              >
                <social.icon className={styles.footerSocial} />
              </Link>
            ))}
          </div>
          <div>
            <h3 className={styles.footerHeading}>Contact</h3>
            <div className={`${styles.footerContact} gilroy`}>
              <p> helloworld@gmail.com</p>
              <p>contact@helloworld.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerTwo}>
        <h3> &copy; {new Date().getFullYear()} helloworld.com</h3>
        <p>
          All rights reserved
          <span>
            <a href="">Terms and conditions</a>
          </span>
        </p>
      </div>
    </div>
  );
}
