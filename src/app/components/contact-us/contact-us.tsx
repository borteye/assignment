import styles from "@/app/styles/contact-us.module.css";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "./contact-form";

export default function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactItem}>
          <MapPin className={styles.contactItemIcon} />
          <div className={styles.contactItemDetails}>
            <h3 className="gilroy-bold">Address</h3>
            <div className="gilroy">
              <p>Somewhere, Road</p>
              <p> SavDev, Online</p>
            </div>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Phone className={styles.contactItemIcon} />
          <div className={styles.contactItemDetails}>
            <h3 className="gilroy-bold">Let&apos;s Talk</h3>
            <div className="gilroy">
              <p>+000 000 000 00</p>
              <p>+000 123 456 789</p>
            </div>
          </div>
        </div>
        <div className={styles.contactItem}>
          <Mail className={styles.contactItemIcon} />
          <div className={styles.contactItemDetails}>
            <h3 className="gilroy-bold">General Support</h3>
            <div className="gilroy">
              <p> helloworld@gmail.com</p>
              <p>contact@helloworld.com</p>
            </div>
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  );
}
