import styles from "../styles/about.module.css";
import avatarImg from "../assets/Avatar_noBackground_blue_upscaled.png"; 

export default function About() {
  return (

    <section className={styles.aboutSection}>
      <h1 className={styles.title}>ABOUT</h1>

      <div className={styles.aboutContainer}>

          <div className={styles.text}>
            <span>I'm enjoying the <strong>unique life</strong>.</span>
            <span>I'm enjoying the <strong>learning</strong>.</span>
            <span>The <strong>creativity</strong>, the <strong>exploration</strong>.</span>
            <span>I'm enjoying the <strong>freedom to discover</strong>.</span>
            <span>I'm enjoying the <strong>challenges</strong>, the <strong>searching for a solution</strong>. </span>
            <span>The <strong>butterflies when a problem is resolved</strong>.</span>
            <span>Enjoying the <strong>future, built one line at a time</strong>.</span>
            <br />
            <span><strong>Turning ideas into reality</strong> - <em>by someone who enjoys.</em></span>
            <br />
            <span className={styles.pedro}>Pedro </span>
          </div>

        <img
          className={styles.avatar}
          src={avatarImg}
          alt="Pedro Avatar"
        />

         <span className={styles.resume}><a href="">see resume</a></span>
      </div>
    </section>
  );
}

