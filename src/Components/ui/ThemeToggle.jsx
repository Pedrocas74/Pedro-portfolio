import styles from "./ThemeToggle.module.css";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button type="button" onClick={toggleTheme} className={styles.themeBtn}>
      {isDark ? <Sun className={styles.themeIcon} /> : <Moon className={styles.themeIcon} />}
    </button>
  );
}
