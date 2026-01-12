import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skills from "../../Components/decoration/Skills";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fade, staggerContainer } from "../../animations/motionPresets";

export default function Home({ menuOpen }) {
  const navigate = useNavigate();
  const [showSkills, setShowSkills] = useState(false);

  return (
    <main className={styles.homePage}>
      
      <motion.section
        className={styles.homeSection}
        variants={staggerContainer}
        initial="hidden"
        animate={menuOpen ? "exit" : "visible"}
        exit="exit"
      >
        <div className={styles.textContainer}>
          <motion.h1 variants={fade} id="mainTitle" className={styles.mainTitle}>
            <span>Hey, I'm </span>

            <span className={styles.name} onClick={() => navigate("/about")}>
              Pedro Magalhães.
            </span>
          </motion.h1>
          <motion.h2 variants={fade} className={styles.secondaryTitle}>
            <span>A</span>{" "}
            <span
              className={styles.job}
              onClick={() => setShowSkills(!showSkills)}
            >
              frontend developer
            </span>{" "}
            <span> crafting interfaces with purpose.</span>
          </motion.h2>
        </div>

        <motion.div variants={fade} className={styles.linksContainer}>
          <Link className="buttonPrimary" to="/work">
            my work
          </Link>
          <Link className="buttonPrimary" to="/contact">
            let's talk
          </Link>
        </motion.div>
      </motion.section>
     
      <AnimatePresence>
        {showSkills && !menuOpen && <Skills key="skills-bar" />}
      </AnimatePresence>
    </main>
  );
}
