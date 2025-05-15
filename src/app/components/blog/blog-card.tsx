import styles from "@/app/styles/blog-card.module.css";
import Image, { StaticImageData } from "next/image";
import Button from "../shared/button";

interface BlogCardProp {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

export default function BlogCard({ blog }: { blog: BlogCardProp }) {
  return (
    <div className={styles.blogCard}>
      <Image
        src={blog.image}
        alt="blog image"
        quality={100}
        width={1000}
        height={1000}
        className={styles.blogCardImage}
      />
      <div>
        <h3 className={`${styles.blogCardTitle} gilroy-bold`}>{blog.title}</h3>
        <p>{blog.description}</p>
      </div>
      <Button className={styles.blogCardButton}>Learn More</Button>
    </div>
  );
}
