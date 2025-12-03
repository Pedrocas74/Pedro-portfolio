import styles from "./styles/home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skills from "../Components/Skills";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home({ menuOpen }) {
  const navigate = useNavigate();
  const [showSkills, setShowSkills] = useState(false);

  return (
    <main className={styles.homePage}>
      <section className={styles.homeSection}>
        <div className={styles.textContainer}>
          <h1 id="mainTitle" className={styles.mainTitle}>
            <span>Hey, I'm </span>

            <span className={styles.name} onClick={() => navigate("/about")}>
              Pedro Magalhães.
            </span>
          </h1>
          <h2 className={styles.secondaryTitle}>
            <span>A</span>{" "}
            <motion.span
              className={styles.job}
              onClick={() => setShowSkills(!showSkills)}
            >
              frontend developer
            </motion.span>{" "}
            <span> crafting interfaces with purpose.</span>
          </h2>
        </div>

        <div className={styles.linksContainer}>
          <Link className="buttonPrimary" to="/work">
            my work
          </Link>
          <Link className="buttonPrimary" to="/contact">
            let's talk
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {showSkills && !menuOpen && <Skills key="skills-bar" />}
      </AnimatePresence>
    </main>
  );
}
