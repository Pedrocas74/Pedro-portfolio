import { motion } from 'framer-motion';
import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import BoatSVG from '../Components/BoatSVG';
import { style } from 'framer-motion/client';


export default function Home() {

    return (
  <main className={styles.homePage}> 
    <section className={styles.home}>   
      <div className={styles.introContainer}> 
        <motion.figure 
          className={styles.boatContainer}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1}}
          transition={{ type: "spring", damping: 15, stiffness: 150, delay: 2 }}
          style={{ originY: 1 }} // pivot from bottom
        >
                 
            <BoatSVG className={styles.logo} />  
        </motion.figure>
            
        <div className={styles.linksContainer}>
          
          <motion.header 
            className={styles.titleContainer}
            initial={{  y: 20,  opacity: 0 }}
            animate={{  y: 0,  opacity: 1 }}
            transition={{ type: "tween", ease: "easeIn", delay: 1.5 }}
          >
            <h1>
              <span className={styles.titleRole}>frontend</span><br />
              <span className={styles.titleDev}>developer</span>
            </h1>  
          </motion.header>

          <motion.nav 
            aria-label="Home page quick links"
            className={styles.links}
            initial={{  y: 70,  opacity: 0 }}
            animate={{  y: 0,  opacity: 1 }}
            transition={{ type: "spring", ease: "easeIn", delay: 1 }}
          >
            <Link to="/contact">let's talk</Link>
            <Link to="/work">my work</Link>
          </motion.nav>
        </div>
      </div>     
    </section>
  </main>
    );
}











