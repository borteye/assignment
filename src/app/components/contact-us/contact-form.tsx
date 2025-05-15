"use client";

import styles from "@/app/styles/contact-form.module.css";
import InputField from "../shared/input-field";
import Button from "../shared/button";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const pathname = usePathname();
  return (
    <div
      className={` ${styles.contactForm} ${
        pathname !== "/" && styles.contactPageFrom
      }`}
    >
      <form>
        <div>
          <label className={styles.contactLabel}>Name *</label> <br />
          <InputField type="text" placeholder="Name" />
        </div>
        <div>
          <label className={styles.contactLabel}>Email *</label> <br />
          <InputField type="text" placeholder="example@helloworld.com" />
        </div>
        <div>
          <label className={styles.contactLabel}>Subject *</label> <br />
          <InputField type="text" placeholder="Enquire" />
        </div>
        <div>
          <label className={styles.contactLabel}>Message *</label> <br />
          <textarea name="message" id="message" rows={5}></textarea>
        </div>
        <Button className={styles.contactButton}>Send</Button>
      </form>
    </div>
  );
}
