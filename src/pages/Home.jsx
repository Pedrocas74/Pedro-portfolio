
import styles from '../styles/home.module.css';
import { Link } from 'react-router-dom';

function Home() {


    return (
    <div className={styles.home}>
        <header>
            <h1>PEDRO</h1>
            <nav>
                <ul>
                    <li><button>dark</button></li>
                    {/* <li><button>+</button></li> */}
                </ul>
            </nav>
        </header>
        <main>
            <div className={styles.containerIntro}>
              <div className={styles.textIntro}>
                <h2>Front-End Developer</h2>
                <p>Coding and design enthusiast. Ready for everything. </p>
              </div>
                <img src="src\assets\Avatar_noBackground_blue_upscaled.png" alt="avatar" />
                <span className={styles.madeIn}>Made in Portugal</span>
            </div> 
              
            <div className={styles.linksContainer}>
                <Link to="/work">See my work</Link>
                <Link to="/contact">Let's talk</Link>
            </div>
        </main>
    </div>
    );
}

export default Home;