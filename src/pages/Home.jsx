import { motion } from 'framer-motion';
import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import BoatSVG from '../Components/BoatSVG';


export default function Home(  ) {

    return (
  <div className={styles.homePage}> 
    <div className={styles.home}>   
      <div className={styles.introContainer}> 
        <motion.div 
          className={styles.boatContainer}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1}}
          transition={{ type: "spring", damping: 15, stiffness: 150, delay: 2 }}
          style={{ originY: 1 }} // pivot from bottom
        >
                 
            <BoatSVG className={styles.logo} />  
        </motion.div>
            
        <div className={styles.linksContainer}>
          
          <motion.section 
            className={styles.titleHome}
            initial={{  y: 20,  opacity: 0 }}
            animate={{  y: 0,  opacity: 1 }}
            transition={{ type: "tween", ease: "easeIn", delay: 1.5 }}
          >
            <h2 className={styles.titleRole}>frontend</h2>
            <h2 className={styles.titleDev}>developer</h2>             
          </motion.section>

          <motion.div 
            className={styles.links}
            initial={{  y: 70,  opacity: 0 }}
            animate={{  y: 0,  opacity: 1 }}
            transition={{ type: "spring", ease: "easeIn", delay: 1 }}
          >
            <Link to="/contact">let's talk</Link>
            <Link to="/work">my work</Link>
          </motion.div>
        </div>
      </div>     
    </div>
  </div>
    );
}











