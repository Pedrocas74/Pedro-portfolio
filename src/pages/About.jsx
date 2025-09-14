import styles from "../styles/about.module.css";
import avatarImg from "../assets/Avatar_noBackground_blue_upscaled.png"; 

function About() {
  return (

    <section className={styles.aboutSection}>
      <h1 className={styles.title}>ABOUT</h1>

      <div className={styles.aboutContainer}>

          <div className={styles.text}>
            <span>I'm enjoying the <strong>unique life</strong>.</span>
            <span>I'm enjoying the <strong>learning</strong>.</span>
            <span>I'm enjoying the <strong>creativity</strong>, the <strong>exploration</strong>.</span>
            <span>I'm enjoying the <strong>freedom to discover</strong>.</span>
            <span>I'm enjoying the <strong>challenges</strong>, the <strong>searching for a solution</strong>. </span>
            <span>I'm enjoying the <strong>dopamine rush after a problem is resolved</strong>.</span>
            <span>Enjoying the <strong>future that is being built, one line at a time</strong>.</span>
            <br />
            <span><em>Turning ideas into reality - by someone who enjoys.</em></span>
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

export default About;
