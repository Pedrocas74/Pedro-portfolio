import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fade, staggerContainer } from "../../animations/motionPresets";

export default function Home({ menuOpen }) {
  const navigate = useNavigate();

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

            <span className={`${styles.name} waveText`} onClick={() => navigate("/about")}>
              Pedro Magalhães.
            </span>
          </motion.h1>
          <div style={{ overflow: "hidden" }}>
          <motion.h2 variants={fade} className={styles.secondaryTitle}>
            <span>A</span>{" "}
            <span
              className={`${styles.job} waveText`}
              onClick={() => navigate("/about")}
            >
              frontend developer
            </span>{" "}
            <span> crafting interfaces with purpose.</span>
          </motion.h2>
          </div>
        </div>

      <div style={{ overflow: "hidden" }}>
        <motion.div variants={fade} className={styles.linksContainer}>
          <Link className="buttonPrimary" to="/work">
            my work
          </Link>
          <Link className="buttonPrimary" to="/contact">
            let's talk
          </Link>
        </motion.div>
      </div>
      </motion.section>
    </main>
  );
}
