import { motion } from 'framer-motion';
import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';
import WavesSVG from '../Components/WavesSVG';
import BoatSVG from '../Components/BoatSVG';


export default function Home( { menuOpen, setMenuOpen, showMenu, setShowMenu } ) {

    return (
  <div className={styles.homePage}>
    
    <div className={styles.home}>
      
      <section className={styles.introContainer}>     
        <BoatSVG className={styles.logo} />
                 
        <div className={styles.linksContainer}>
          
          <div className={styles.titleHome}>
            <h2 className={styles.titleRole}>FRONTEND</h2>
            <h2 className={styles.titleDev}>DEVELOPER</h2>
          </div>
          <div className={styles.links}>
            <Link to="/contact">let's talk</Link>
            <Link to="/work">my work</Link>
          </div>
        </div>
      </section>  
      
      <WavesSVG />
      
    </div>
  </div>
    );
}











