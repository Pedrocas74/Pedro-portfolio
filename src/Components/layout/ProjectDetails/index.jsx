import styles from "./ProjectDetails.module.css";
//built in
import { useParams, Link } from "react-router-dom";
//custom data
import { projects } from "../../../data/projects";
//motion
import { motion } from "framer-motion";
import { fade, staggerContainer } from "../../../animations/motionPresets";
//custom components
import Skills from "../../decoration/Skills";

export default function ProjectDetails({ menuOpen }) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
        className={styles.notFound}
      >
        <h1>Project not found</h1>
        <Link to="/work">← Back to work</Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProjectSlug = projects[nextIndex].slug;

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate={menuOpen ? "exit" : "visible"}
      exit="exit"
      className={styles.projectSection}
    >
      {/* MAIN IMAGE  */}
      <motion.div variants={fade} className={styles.mainImage}>
        <img onLoad src={project.cover} alt="" />
        {/* SKILLS ON THE RIGHT BOTTOM CORNER OF THE IMG  */}
        <Skills />
      </motion.div>

      {/* TEXT-PRESENTATION  */}
      <motion.div variants={fade} className={styles.projectContainer}>
        <div className={styles.header}>
          <h1>{project.name}</h1>
          <p className={styles.type}>{project.type}</p>
        </div>

        {/* ----------------TABLE GRID --------------------------- */}

        <div className={styles.table}>
          <div className={styles.row}>
            <h2>Category</h2>
            <p>{project.category}</p>
          </div>

          <div className={styles.row}>
            <h2>Year</h2>
            <p>{project.year}</p>
          </div>
        </div>
        {/* ---------------------------------------------------------------- */}
        {/* DESCRIPTION  */}

        <div className={styles.projectDescription}>
          <p className={styles.description}>{project.descriptionLong}</p>

          {/* LINK TO WEB + GITHUB */}
          <div className={styles.linksContainer}>
            {project.live !== null && (
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <span className="waveText" style={{ fontWeight: 900 }}>
                  website
                </span>
              </a>
            )}

            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <span className="waveText" style={{ fontWeight: 900 }}>
                github repo
              </span>
            </a>
          </div>
        </div>
            
            <hr style={{ marginBottom: "var(--space-xxl)"}} />

        <section className={styles.sectionPhotos}>
          {/* PHOTOS */}
          {/* HOMEPAGE + DARK MODE + MOBILE w/ titles */}
          <h3>HOMEPAGE</h3>
          <div className={styles.photo}>
            <img src={project.imgs[0]} alt="" />
          </div>

          {project.darkMode && (
            <>
              <h3>DARK MODE</h3>
              <div className={styles.photo}>
                <img
                  src={project.imgs[1]}
                  alt={`Dark mode from project ${project.name}`}
                />
              </div>
            </>
          )}

          {project.mobile && (
            <>
              <h3>MOBILE</h3>
              <div className={styles.photo}>
                <img
                  src={project.imgs[project.imgs.length - 1]}
                  alt="Mobile "
                />
              </div>
            </>
          )}
        </section>

        <div className={styles.lastLinks}>
          <Link id="navLinks" className={styles.back} to="/work">
            ← back to work
          </Link>

          {project.type !== "Personal Portfolio" && (
            <Link
              id="navLinks"
              className={styles.next}
              to={`/work/${nextProjectSlug}`}
              onClick={() => window.scroll(top)}
            >
              next project →
            </Link>
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}
