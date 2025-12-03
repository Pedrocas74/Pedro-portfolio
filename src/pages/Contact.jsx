import { motion } from "framer-motion";
import styles from "./styles/contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactSection} aria-labelledby="contact-title">
      <h1 className={styles.title} id="contact-title">
        CONTACT
      </h1>

      <div className={styles.grid}>
        <div className={styles.gridRow}>
          <h2>Mail</h2>
          <a
            id="navLinks"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            pmig.magalhaes
          </a>
        </div>

        <div className={styles.gridRow}>
          <h2>Socials</h2>
          <div className={styles.socials}>
            <a
              id="navLinks"
              href="https://github.com/Pedrocas74"
              rel="noopener noreferrer"
              target="_blank"
            >
              github
            </a>

            <a
              id="navLinks"
              href="https://www.linkedin.com/in/pedro-magalh%C3%A3es-1a3651334/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Pedro’s LinkedIn profile"
            >
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
