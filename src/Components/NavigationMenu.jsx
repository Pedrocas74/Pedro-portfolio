import styles from './NavigationMenu.module.css';
import { Link } from "react-router-dom";
import WavesSVG from './WavesSVG';
import NavButton from './NavButton';


function NavigationMenu({ menuOpen, setMenuOpen }) {
    if (!menuOpen) return null;

    return (
        <div className={styles.menuContainer}>
                <ul className={styles.menuList}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
                    <li><Link to="/work" onClick={() => setMenuOpen(false)}>WORK</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
                </ul>
                
                <WavesSVG />
        </div>
        
    );
}

export default NavigationMenu;