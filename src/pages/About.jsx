import styles from "../styles/about.module.css";

function About() {
  return (
    
    <div className={styles.aboutPage}>
      <h1 className={styles.title}>ABOUT</h1>

      <section className={styles.aboutSection}>
        <div className={styles.descriptionContainer}>
          <div className={styles.text}>
            <span>I'm enjoying the unique life.</span>
            <span>I'm enjoying the learning.</span>
            <span>I'm enjoying the creativity, the exploration.</span>
            <span>I'm enjoying the freedom to discover.</span>
            <span>I'm enjoying the challenges, the searching for a solution. </span>
            <span>I'm enjoying the dopamine rush after a problem is resolved.</span>
            <span>I'm enjoying the asynchronous promise of destiny. </span>
            <span>Enjoying the future that is being built, one line at a time. </span>
            <span>Turning ideas into reality - by someone who enjoys. </span>
            <span>My name is Pedro. </span>
           </div>
            <a href="">resume</a>     
        </div>
        <img
          className={styles.avatar}
          src="src\assets\Avatar_noBackground_blue_upscaled.png"
          alt=""
        />
      </section>
    </div>
  );
}

export default About;
