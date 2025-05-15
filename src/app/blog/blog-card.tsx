import styles from "@/app/styles/blog-card.module.css";
import Image from "next/image";
import Button from "../components/shared/button";

export default function BlogCard() {
  return (
    <div className={styles.blogCard}>
      <Image
        src="/images/blog_img.png"
        alt="blog image"
        quality={100}
        width={1000}
        height={1000}
        className={styles.blogCardImage}
      />
      <div>
        <h3 className={`${styles.blogCardTitle} gilroy-bold`}>
          How to create a navigation bar
        </h3>
        <p>
          navigation bar consist of your web logo, navigation links and action
          buttons, however, you can create unique navigations based on your
          website genre
        </p>
      </div>
      <Button className={styles.blogCardButton}>Learn More</Button>
    </div>
  );
}
