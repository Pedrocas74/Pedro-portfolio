import styles from './NavButton.module.css';
//motion
import { motion } from "framer-motion";
//hooks
import { useLocation } from 'react-router-dom';

export default function NavButton({ menuOpen, setMenuOpen }) {
  const location = useLocation();
  const inAbout = location.pathname === "/about" && !menuOpen;
  
  const lineProps = {
    stroke: inAbout ?  "var(--clr-navButton)" : "var(--clr-text)",
    strokeWidth: 3.5,
    strokeLinecap: "round",
    transition: { duration: 0.3, ease: "easeInOut" },
    transformOrigin: "center",
  };

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
      }}
    >
      <motion.svg className={styles.navButton} viewBox="0 0 30 24">
        {/* Top line */}
        <motion.line
          x1="3"
          y1="6"
          x2="27"
          y2="6"
          {...lineProps}
          animate={menuOpen ? { rotate: 410, y: 6 } : { rotate: 0, y: 0 }}
        />

        {/* Middle line */}
        <motion.line
          x1="3"
          y1="12"
          x2="27"
          y2="12"
          {...lineProps}
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
        />

        {/* Bottom line */}
        <motion.line
          x1="3"
          y1="18"
          x2="27"
          y2="18"
          {...lineProps}
          animate={menuOpen ? { rotate: -410, y: -6 } : { rotate: 0, y: 0 }}
        />
      </motion.svg>
    </button>
  );
}
