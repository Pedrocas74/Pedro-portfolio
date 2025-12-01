// import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styles from "./styles/work.module.css";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Work() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className={styles.workSection}>
      <div className={styles.workContainer}>
        <div className={styles.workRight}>
        <div className={styles.firstLine}>
          <h1>WORK</h1>
          <span style={{ fontWeight: 100 }}>{projects.length}</span>
        </div>
        
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/work/${p.slug}`}
            className={styles.projectRow}
            id="navLinks"
            onMouseEnter={() => setActiveProject(p)}
          >
            <div>
              <h2>{p.name}</h2>
            </div>
            <p>{p.type}</p>
          </Link>
        ))}
        </div>
        <div className={styles.workLeft}>
          <img src={activeProject.cover} alt={activeProject.name} />
        </div>
      </div>
    </section>
  );
}
