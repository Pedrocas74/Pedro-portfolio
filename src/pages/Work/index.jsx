import styles from "./work.module.css";
import { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import { fadeWork, staggerContainer } from "../../animations/motionPresets";

export default function Work({ menuOpen }) {
  const [activeProject, setActiveProject] = useState(projects[2]);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate={menuOpen ? "exit" : "visible"}
      exit="exit"
      className={styles.workSection}
      onAnimationStart={() => setIsAnimating(true)}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div className={styles.workContainer}>
        <div className={styles.workRight}>
          <motion.div variants={fadeWork} className={styles.firstLine}>
            <h1>WORK</h1>
            <span style={{ fontWeight: 100 }}>{projects.length}</span>
          </motion.div>

          {projects.map((p, i) => (
            <motion.div variants={fadeWork}>
              <Link
                key={p.slug}
                to={`/work/${p.slug}`}
                className={styles.projectRow}
                id="navLinks"
                onMouseEnter={() => {
                  if (isAnimating) return;
                  setActiveProject(p);
                }}
              >
                <div>
                  <h2>{p.name}</h2>
                </div>
                <p>{p.type}</p>
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease: easeIn, type: "spring" }}
          className={styles.workLeft}
        >
          <img src={activeProject.cover} alt={activeProject.name} />
        </motion.div>
      </div>
    </motion.section>
  );
}
