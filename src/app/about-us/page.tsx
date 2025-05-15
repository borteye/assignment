import styles from "@/app/styles/about-page.module.css";

export default function AboutUsPage() {
  return (
    <div>
      <h1 className={styles.aboutHeader}>About Us</h1>
      <div className={styles.aboutContent}>
        <div>
          <h1 className={styles.aboutTitle}>Our Mission</h1>
          <p className={styles.aboutDescription}>
            Our mission is to empower learners worldwide with the skills and
            confidence to build stunning, responsive, and high-performing web
            applications. We aim to make front-end education accessible,
            engaging, and practical for all.
          </p>
        </div>
        <div>
          <h1 className={styles.aboutTitle}>Our Mission</h1>
          <p className={`${styles.aboutDescription} gilroy-medium`}>
            Our mission is to empower learners worldwide with the skills and
            confidence to build stunning, responsive, and high-performing web
            applications. We aim to make front-end education accessible,
            engaging, and practical for all.
          </p>
        </div>
      </div>
    </div>
  );
}
