//full-screen overlay menu
import styles from './NavigationMenu.module.css';
import { Link } from "react-router-dom";


function NavigationMenu({ menuOpen, setMenuOpen }) {
    if (!menuOpen) return null;

    return (
        <div className={styles.menuContainer}>
            
                <span className={styles.logoMenu}>LOGO</span>
                {/* <button onClick={() => setMenuOpen(false)}> X </button> */}
                      
                <ul>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/work" onClick={() => setMenuOpen(false)}>WORK</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                </ul>
                

                <svg></svg>
        </div>
        
    );
}

export default NavigationMenu;