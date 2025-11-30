// import { motion } from "framer-motion";
import styles from "./styles/home.module.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main className={styles.homePage}>
      <section className={styles.homeSection}>
      <div>
        <h1 id="mainTitle" className={styles.mainTitle}><span>Hey, I'm </span>Pedro Magalhães.</h1>
        <h2 className={styles.secondaryTitle}><span>A</span> frontend developer <span> always keen to push the limits.</span></h2>
      </div>

      <div className={styles.linksContainer}>
        <Link className="buttonPrimary" to="/work">my work</Link>
        <Link className="buttonPrimary" to="/contact">let's talk</Link>
      </div>
      </section>
    </main>
  );
}
