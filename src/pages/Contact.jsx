import { motion } from "framer-motion";
import styles from "./styles/contact.module.css";
import githubIcon from "/assets/icons/github-mark-white.png";
import linkedinIcon from "/assets/icons/InBug-White.png";
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  return (
    <main className={styles.contactMain} aria-labelledby="contact-title">
      <h1 className={styles.title} id="contact-title">
        CONTACT
      </h1>
      <div className={styles.contactsContainer}>
        <div className={styles.contacts}>
          <ContactForm />
          <motion.section
            className={styles.socials}
            aria-labelledby="socials-title"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 id="socials-title">Socials</h2>
            <div className={styles.socialsIcons}>
              <a
                href="https://github.com/Pedrocas74"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={githubIcon} alt="Github link" role="presentation" />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-magalh%C3%A3es-1a3651334/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Pedro’s LinkedIn profile"
              >
                <img src={linkedinIcon} alt="Linkedin link" role="presentation" />
              </a>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
