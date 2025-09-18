import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavigationMenu.module.css";
import { Link } from "react-router-dom";

export default function NavigationMenu({ menuOpen, setMenuOpen }) {
  return (
    // Slide in and out of the menu
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className={styles.menuContainer}
          initial={{ opacity: 0, x: "100%" }} // start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // slide to original position
          exit={{ opacity: 0, x: "100%" }} // slide out to the right when closing
          transition={{ duration: 0.7, ease: "easeInOut" }} // delay slightly for smooth timing
        >
          <section className={styles.menuList}>
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link to="/work" onClick={() => setMenuOpen(false)}>
                WORK
              </Link>
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </motion.h2>
            
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
            >
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </motion.h2>

          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
