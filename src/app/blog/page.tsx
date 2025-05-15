import styles from "@/app/styles/blog-page.module.css";

export default function BlogPage() {
  return (
    <div>
      <h1 className={styles.blogHeader}>Blog</h1>
      <div className={styles.blogContainer}></div>
    </div>
  );
}
