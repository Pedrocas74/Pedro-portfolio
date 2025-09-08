import styles from './NavigationMenu.module.css';
import { Link } from "react-router-dom";
import WavesSVG from './WavesSVG';
import NavButton from './NavButton';


function NavigationMenu({ menuOpen, setMenuOpen }) {
    if (!menuOpen) return null;

    return (
        <div className={styles.menuContainer}>
                <section className={styles.menuList}>
                    <h1><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></h1>
                    <h1><Link to="/work" onClick={() => setMenuOpen(false)}>WORK</Link></h1>
                    <h1><Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link></h1>
                    <h1><Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link></h1>
                </section>
                
                <WavesSVG />
        </div>
        
    );
}

export default NavigationMenu;