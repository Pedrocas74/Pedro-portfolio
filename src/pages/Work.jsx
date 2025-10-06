import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/work.module.css";
import workPlaceholderImg from "/assets/AnjodaFlecha_upscaled.webp";

export default function Work() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); //to make the pictures rotate (NEXT)

  const projects = [
    {
      name: "Moo",
      type: "Movie Finder",
      img: workPlaceholderImg,
      description: "A responsive web app that allows users to search for movies, view details, and manage a list of favorites.",
      tech: ["React", "Vite", "CSS Modules", "Framer Motion", "TMDB API"],
    },
    { name: "Name", type: "Type of project", img: workPlaceholderImg },
    { name: "Name", type: "Type of project", img: workPlaceholderImg },
    { name: "Name", type: "Type of project", img: workPlaceholderImg },
    { name: "Name", type: "Type of project", img: workPlaceholderImg },
  ];

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.workPage}>
      <h1 className={styles.title}>WORK</h1>
      <div className={styles.workContainer}>
        {projects.map((project, index) => (
          <div className={styles.projectContainer}>
            <motion.article
              key={index}
              className={styles.projects}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "easeIn" }}
              viewport={{ once: false, amount: 0.6 }}
            >
              <figure
                onClick={() => {
                  toggleCard(index);
                  setIsOpen(true); //only open one card at a time
                }}
              >
                <img
                  src={project.img}
                  alt={`Cover image for ${project.name}`}
                />
                <figcaption className={styles.projectsText}>
                  <h2>{project.name}</h2>
                  <h3>{project.type}</h3>
                </figcaption>
              </figure>
            </motion.article>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className={styles.extraCard}
                  initial={{
                    y: "-100%",
                    opacity: 0.7,
                  }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  exit={{
                    y: "-100%",
                    opacity: 0.9,
                  }}
                  // whileInView={{ opacity: 1 }}
                  // viewport={{ once: false, amount: 0.1 }}
                >
                  <section className={styles.tech}>
                    <h4>Tech Stack</h4>
                    <ul>
                      {project.tech.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </section>
                  <section className={styles.description}>
                    <h4>Description</h4>
                    <p>{project.description}</p>
                    <button>see</button>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
