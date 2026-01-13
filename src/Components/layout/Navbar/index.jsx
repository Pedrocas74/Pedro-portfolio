import styles from "./Navbar.module.css";
import NavButton from "../../ui/NavButton";
import ThemeToggle from "../../ui/ThemeToggle";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const location = useLocation();

  const handleLogoClick = () => {
    if (menuOpen && location.pathname === "/") {
      setMenuOpen(false);
      return;
    } else if (menuOpen && location.pathname !== "/") {
      setMenuOpen(false);
      return;
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <Link to="/" id="navLinks" onClick={handleLogoClick}>
        <svg
          //30 24 default
          className={styles.logoSVG}
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 4" clipPath="url(#clip0_56_2)">
            <g id="logo">
              <path
                id="flag"
                d="M5 0.700039C5.00012 0.235318 5.44467 -0.100056 5.8916 0.0271873L10.4355 1.32309C11.1127 1.51634 11.1127 2.47552 10.4355 2.66879L6 3.93344V5.13852H5V0.700039ZM6.48926 1.36996C6.29933 1.32073 6.11336 1.46382 6.11328 1.66V2.61703C6.11341 2.81317 6.29936 2.95629 6.48926 2.90707L8.33398 2.42855C8.63362 2.35089 8.63362 1.92614 8.33398 1.84848L6.48926 1.36996Z"
                fill="var(--clr-primary)"
              />
              <path
                id="wood"
                d="M0.2 4.99984C0.0895429 4.99984 -0.000711592 5.0895 0.00686249 5.1997C0.0747766 6.18779 0.644418 7.12537 1.61091 7.82827C2.64236 8.57842 4.04131 8.99984 5.5 8.99984C6.95869 8.99984 8.35763 8.57842 9.38908 7.82827C10.3556 7.12537 10.9252 6.1878 10.9931 5.1997C11.0007 5.0895 10.9105 4.99985 10.8 4.99985L5.5 4.99984H0.2Z"
                fill="var(--clr-primary)"
              />
            </g>
          </g>
        </svg>
      </Link>

      <div className={styles.rightIcons}>
        <ThemeToggle />
        <NavButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}
