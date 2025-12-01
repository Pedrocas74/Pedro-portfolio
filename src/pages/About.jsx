import styles from "./styles/about.module.css";
import resumePDF from "/assets/CV_Pedro_Magalhaes_EN.pdf";
// import portrait1 from "/assets/pedroAbout.jpeg";
import portrait2 from "/assets/portrait2.jpeg";
// import portrait3 from "/assets/portrait3.jpeg";

export default function About() {
  return (
    <section className={styles.aboutSection} aria-labelledby="about-title">
      <div className={styles.aboutRight}>
        <img className={styles.portrait} src={portrait2} alt="Portrait Pedro" />
      </div>

      <div className={styles.aboutLeft}>
      <h1 className={styles.title} id="about-title">
        ABOUT
      </h1>
      
          <p className={styles.text}>
            Hey, I'm Pedro, a frontend developer from Portugal. I'm focused on
            growing my skills and building a meaningful path in web development.
            I enjoy learning, exploring new ideas, and creating with intention.
            Outside of coding, you’ll find me closing my eyes while getting lost
            in music, immersed in videogames, or capturing moments through
            photography.{" "}
          </p>
          <a
            className={styles.resume}
            href={resumePDF}
            download="Pedro_Magalhaes_resume.pdf"
            aria-label="View Pedro’s Resume"
          >
            download my resume
          </a>
      </div>
    </section>
  );
}
