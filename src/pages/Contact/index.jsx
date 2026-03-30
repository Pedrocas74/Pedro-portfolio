import { motion } from "framer-motion";
import styles from "./contact.module.css";
import {
  fade,
  revealLR,
  staggerContainer,
} from "../../animations/motionPresets";

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
      <div style={{ overflow: "hidden" }}>
        <motion.h1
          variants={revealLR}
          className={styles.title}
          id="contact-title"
        >
          CONTACT
        </motion.h1>
      </div>

      <div className={styles.grid}>
        <div style={{ overflow: "hidden" }}>
          <motion.div variants={fade} className={styles.gridRow}>
            <h2>Mail</h2>
            <a
              id="navLinks"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pmig.magalhaes@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="waveText" style={{ fontWeight: 400 }}>
                pmig.magalhaes
              </span>
            </a>
          </motion.div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <motion.div variants={fade} className={styles.gridRow}>
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
