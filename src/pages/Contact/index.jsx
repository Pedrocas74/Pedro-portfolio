import { motion } from "framer-motion";
import styles from "./contact.module.css";
import { fade, staggerContainer } from "../../animations/motionPresets";

export default function Contact({ menuOpen }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate={menuOpen ? "exit" : "visible"}
      exit="exit"
      className={styles.contactSection}
      aria-labelledby="contact-title"
    >
      <motion.h1 variants={fade} className={styles.title} id="contact-title">
        CONTACT
      </motion.h1>

      <motion.div variants={fade} className={styles.grid}>
        <div className={styles.gridRow}>
          <h2>Mail</h2>
          <a
            id="navLinks"
            href="mailto:pmig.magalhaes@gmail.com"
          >
            <span className="waveText" style={{ fontWeight: 400 }}>
              pmig.magalhaes
            </span>
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
              <span className="waveText" style={{ fontWeight: 400 }}>
                github
              </span>
            </a>

            <a
              id="navLinks"
              href="https://www.linkedin.com/in/pedro-magalh%C3%A3es-1a3651334/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Pedro’s LinkedIn profile"
            >
              <span className="waveText" style={{ fontWeight: 400 }}>
                linkedin
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
