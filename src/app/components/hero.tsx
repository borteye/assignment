import styles from "@/app/styles/hero.module.css";
import Button from "./shared/button";
export default function Hero() {
  return (
    <div>
      <div className={styles.heroBgImage}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Hello World!</h1>
          <p className={`${styles.heroDescription} gilroy-medium`}>
            Welcome to my next js front end design journey, we will be learning
            web structure, navigation, list, box models and basic css to make
            our website look amazing and outstanding
          </p>
          <div className={styles.buttonContainer}>
            <Button className={`${styles.heroButton}`}>LEARN MORE</Button>
            <Button className={`${styles.heroButton} ${styles.joinUs}`}>JOIN US</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
