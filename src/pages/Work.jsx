import { motion } from "framer-motion";
import styles from "../styles/work.module.css";
import workImg from "../assets/AnjodaFlecha_upscaled.webp";

export default function Work() {
  const projects = [
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
  ];

  return (
    <section className={styles.workPage}>
      <h1 className={styles.title}>WORK</h1>
      <div className={styles.workContainer}>
        {projects.map((project, index) => (
          <motion.article
            key={index}
            className={styles.projects}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn" }}
            viewport={{ once: false, amount: 0.6 }}
          >
            <figure>
              <img src={project.img} alt={`Cover image for ${project.name}`} />
              <figcaption className={styles.projectsText}>
                <h2>{project.name}</h2>
                <h3>{project.type}</h3>
              </figcaption>
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
