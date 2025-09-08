import { useState } from 'react';
import styles from '../styles/work.module.css';
import { style } from 'framer-motion/client';

function Work() {
    


    return(
    <>
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
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
            </section>

            <section className={styles.projects}>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
            </section>

            <section className={styles.projects}>
                <section className={styles.projectsText}>
                    <h2>Name</h2>
                    <h3>Type of project</h3>
                </section>
                <img src="src\assets\AnjodaFlecha.jpeg" alt="" />
            </section>
        
        </div>
    </>
    );
}

export default Work;