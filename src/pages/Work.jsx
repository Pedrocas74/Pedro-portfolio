import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "../styles/work.module.css";

//images
import workPlaceholderImg from "/assets/AnjodaFlecha_upscaled.webp"; //placeholder
//Moo-MovieFinder
import mooLogo_day from "/assets/work-images/Moo-MovieFinder/Logo_day_upscaled.webp";
import mooLogo_night from "/assets/work-images/Moo-MovieFinder/Logo_night_upscaled.webp";
//portfolio
import logoPedro from "/assets/work-images/Portfolio/Logo_portfolio.webp";
import portfolio_frontpage from "/assets/work-images/Portfolio/portfolio_frontpage.webp"


export default function Work() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeImageIndexes, setActiveImageIndexes] = useState([]);

  const projects = [
    {
      name: "Moo",
      type: "Movie Finder",
      imgs: [mooLogo_day, mooLogo_night],
      description:
        "A responsive web app that allows users to search for movies, view details, and manage a list of favorites.",
      tech: ["React", "Vite", "CSS Modules", "Framer Motion", "TMDB API", "Figma (Logo design)"],
      link: "https://moo-finder.vercel.app/",
    },
    {
      name: "Pedro",
      type: "Personal Portfolio",
      imgs: [logoPedro, portfolio_frontpage],
      description: "A portfolio website designed and built to present my journey as a frontend developer. It showcases my personal projects and includes my resume, social links, and a contact form, all wrapped in a clean, modern interface with responsive design.",
      tech: ["React", "React Router", "Vite", "CSS Modules", "Framer Motion", "Figma (logo design)"],
      link: "https://pedromagalhaes.vercel.app/",
    },
    {
      name: "Untitled",
      type: "Coming Soon",
      imgs: [workPlaceholderImg],
      description: "",
      tech: [],
      link: "",
    },
    {
      name: "Untitled",
      type: "",
      imgs: [workPlaceholderImg],
      description: "",
      tech: [],
      link: "",
    },
    {
      name: "Untitled",
      type: "",
      imgs: [workPlaceholderImg],
      description: "",
      tech: [],
      link: "",
    },
  ];

  // initialize image indexes once
  useEffect(() => {
    setActiveImageIndexes(new Array(projects.length).fill(0));
  }, []);

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (openIndex === null) return;

    const interval = setInterval(() => {
      setActiveImageIndexes((prev) => {
        const updated = [...prev];
        const total = projects[openIndex].imgs.length;
        updated[openIndex] = (prev[openIndex] + 1) % total;
        return updated;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [openIndex]);

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
                }}
              >
                <motion.img
                  key={activeImageIndexes[index]} // only this card re-renders
                  src={
                    index === openIndex
                      ? project.imgs[activeImageIndexes[index]]
                      : project.imgs[0]
                  }
                  alt={`Cover image for ${project.name}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <figcaption className={styles.projectsText}>
                  <h2>{project.name}</h2>
                  <h3>{project.type}</h3>
                  <span>{openIndex === index ? "-" : "+"}</span>
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
                    <button type="button">
                      <a
                        style={{ textDecoration: "none", color: "#14162f" }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        see
                      </a>
                    </button>
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
