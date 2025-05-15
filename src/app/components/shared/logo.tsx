import styles from "@/app/styles/logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <Image
        src="/images/globe.png"
        alt="Globe"
        width={24}
        height={24}
        priority
        quality={100}
        className={styles.Logo}
      />
      <h1 className={styles.LogoText}>HELLO WORLD</h1>
    </div>
  );
}
