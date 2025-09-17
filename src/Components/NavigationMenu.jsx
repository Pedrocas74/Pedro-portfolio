import { motion, AnimatePresence } from "framer-motion";
import styles from './NavigationMenu.module.css';
import { Link } from "react-router-dom";
import WavesSVG from './WavesSVG';


export default function NavigationMenu({ menuOpen, setMenuOpen }) {
    
    return (

    <AnimatePresence>
      { menuOpen && (
        <motion.div 
            className={styles.menuContainer}
            initial={{ opacity: 0, x: "100%" }}   // start off-screen to the right
            animate={{ opacity: 1, x: 0 }}        // slide to original position
            exit={{ opacity: 0, x: "100%" }}      // slide out to the right when closing
            transition={{ duration: 0.7, ease: "easeInOut",  }} // delay slightly for smooth timing

        >
                <section className={styles.menuList}>
                    <h2><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></h2>
                    <h2><Link to="/work" onClick={() => setMenuOpen(false)}>WORK</Link></h2>
                    <h2><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></h2>
                    <h2><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></h2>
                </section>
                
                <WavesSVG />
        </motion.div>
      )}
    </AnimatePresence>      
    );
}