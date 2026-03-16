import styles from "./ThemeToggle.module.css";
import { useTheme } from "../../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ThemeToggle( { menuOpen }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const inAbout = location.pathname === "/about" && !menuOpen;

  return (
    <button type="button" onClick={toggleTheme} className={styles.themeBtn} aria-label="Toggle theme">
      {isDark ? <Sun stroke={inAbout ? "var(--clr-navButton)" : "var(--clr-text)"} className={styles.themeIcon} /> : <Moon stroke="var(--clr-text)" className={styles.themeIcon} />}
    </button>
  );
}
