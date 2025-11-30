// import { AnimatePresence, motion } from "framer-motion";
// import { useState, useEffect } from "react";
import styles from "./styles/work.module.css";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";

export default function Work() {
  // const projects = [
  //   {
  //     name: "Moo",
  //     type: "Movie Finder",
  //     imgs: [mooLogo_day, mooLogo_night],
  //     description:
  //       "A responsive web app that allows users to search for movies, view details, and manage a list of favorites.",
  //     tech: ["React", "Vite", "CSS Modules", "Framer Motion", "TMDB API", "Figma (Logo design)"],
  //     link: "https://moo-finder.vercel.app/",
  //   },
  //   {
  //     name: "Pedro",
  //     type: "Personal Portfolio",
  //     imgs: [logoPedro, portfolio_frontpage],
  //     description: "A responsive portfolio with clean branding, built to showcase my journey as a frontend developer.",
  //     tech: ["React", "React Router", "Vite", "CSS Modules", "Framer Motion", "Figma (logo design)"],
  //     link: "https://pedromagalhaes.vercel.app/",
  //   },
  //   {
  //     name: "Untitled",
  //     type: "Coming Soon",
  //     imgs: [workPlaceholderImg],
  //     description: "",
  //     tech: [],
  //     link: "",
  //   },
  //   {
  //     name: "Untitled",
  //     type: "",
  //     imgs: [workPlaceholderImg],
  //     description: "",
  //     tech: [],
  //     link: "",
  //   },
  //   {
  //     name: "Untitled",
  //     type: "",
  //     imgs: [workPlaceholderImg],
  //     description: "",
  //     tech: [],
  //     link: "",
  //   },
  // ];

  return (
    <section className={styles.workSection}>
      <div className={styles.workContainer}>
        <div className={styles.firstLine}>
          <h1 className={styles.title}>WORK</h1>
          <span style={{ fontWeight: 900 }}>{projects.length}</span>
        </div>

        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to={`/work/${p.slug}`}
            className={styles.projectRow}
            id="navLinks"
          >
            <div>
              <h2>{p.name}</h2>
            </div>
            <p>{p.type}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
