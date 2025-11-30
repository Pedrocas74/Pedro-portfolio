import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import styles from "./ProjectDetails.module.css";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/work">← Back to work</Link>
      </div>
    );
  }

  const middleImages = project.imgs.slice(1, -1); //take off the first and last photo of the project images array

  const projectColor = project.color || "var(--clr-primary)";

  return (
    <section
      className={styles.projectSection}
      style={{ "--project-color": projectColor }}
    >
      {/* MAIN IMAGE  */}
      <div className={styles.mainImage}>
        <img src={project.cover} alt="" />
      </div>
      <div className={styles.projectContainer}>
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
          <p>{project.descriptionLong}</p>

          {/* LINK TO WEB + GITHUB */}
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            view the website
          </a>
        </div>

        <section className={styles.sectionPhotos}>
          {/* PHOTOS */}
          {/* EVERY PAGE + DARK MODE + MOBILE w/ titles */}
          <h3>HOMEPAGE</h3>
          <div className={styles.photo}>
            <img src={project.imgs[0]} alt="" />
          </div>

          <h3>OTHER PAGES</h3>
          {middleImages.map((img, i) => (
            <div className={styles.photo} key={i}>
              <img src={img} alt={`${project.name} ${i + 1}`} />
            </div>
          ))}

          <h3>MOBILE</h3>
          <div className={styles.photo}>
            <img src={project.imgs[project.imgs.length - 1]} alt="" />
          </div>
        </section>

        <Link className={styles.back} to="/work">
          ← back to work
        </Link>
        <Link>next project</Link>
      </div>
    </section>
  );
}
