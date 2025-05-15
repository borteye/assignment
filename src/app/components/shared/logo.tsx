import styles from "@/app/styles/logo.module.css";
import { Globe } from "lucide-react";

export default function Logo() {
  return (
    <div className={styles.LogoContainer}>
      <Globe width={32} height={32} />
      <h1 className={styles.LogoText}>HELLO WORLD</h1>
    </div>
  );
}
