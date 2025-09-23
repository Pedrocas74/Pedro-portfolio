import { motion, AnimatePresence } from "framer-motion";
import styles from "./NavigationMenu.module.css";
import { NavLink } from "react-router-dom";

export default function NavigationMenu({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "WORK", path: "/work" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.nav
          aria-label="Main navigation"
          className={styles.menuContainer}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
        >
          <motion.ul
            className={styles.menuList}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.01, delayChildren: 1 } },
            }}
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={item.path}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", damping: 6 },
                  },
                }}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                  children={({ isActive }) => (
                    <motion.span
                      whileHover={!isActive ? { scale: 1.1 } : {}}
                      whileTap={!isActive ? { scale: 0.8 } : {}}
                      style={{ display: "inline-block" }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
