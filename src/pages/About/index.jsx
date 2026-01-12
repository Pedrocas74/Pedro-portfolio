import styles from "./about.module.css";
import resumePDF from "/assets/CV_Pedro_Magalhaes_EN.pdf";
import portrait2 from "/assets/portrait2.jpeg";
import { motion } from "framer-motion";
import { fade, staggerContainer } from "../../animations/motionPresets";

export default function About({ menuOpen }) {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate={menuOpen ? "exit" : "visible"}
      exit="exit"
      className={styles.aboutSection}
      aria-labelledby="about-title"
    >
      <motion.div variants={fade} className={styles.aboutRight}>
        <img className={styles.portrait} src={portrait2} alt="Portrait Pedro" />
      </motion.div>

      <div className={styles.aboutLeft}>
        <motion.h1 variants={fade} className={styles.title} id="about-title">
          ABOUT
        </motion.h1>

        <motion.p variants={fade} className={styles.text}>
          Hey, I'm Pedro, a frontend developer from Portugal. I'm focused on
          growing my skills and building a meaningful path in web development. I
          enjoy learning, exploring new ideas, and creating with intention.
          Outside of coding, you’ll find me closing my eyes while getting lost
          in music, immersed in videogames, or capturing moments through
          photography.{" "}
        </motion.p>
        <motion.a
          className={styles.resume}
          href={resumePDF}
          download="Pedro_Magalhaes_resume.pdf"
          aria-label="View Pedro’s Resume"
          variants={fade}
        >
          download my resume
        </motion.a>
      </div>
    </motion.section>
  );
}
