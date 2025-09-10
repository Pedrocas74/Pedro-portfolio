import { useState } from 'react';
import styles from '../styles/work.module.css';
import { style } from 'framer-motion/client';
import { Link } from 'react-router-dom';

function Work() {
    


    return(
    <section className={styles.workPage}>
        <h1 className={styles.title}>WORK</h1>
        <div className={styles.workContainer}>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            {/* <Link to={}>let's talk</Link> */}
        
        </div>
    </section>
    );
}

export default Work;