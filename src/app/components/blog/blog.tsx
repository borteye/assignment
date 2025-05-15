import styles from "@/app/styles/blog.module.css";
import BlogCard from "./blog-card";
import { blogs } from "@/app/libs/loops";

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>This Is a Body</h1>
      <p className={`${styles.blogDescription} gilroy-medium`}>
        The type of website will decide the content of your body, lets take this
        as a information website with a few blog posts
      </p>
      <div className={styles.blogCardsContainer}>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
