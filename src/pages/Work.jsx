import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from '../styles/work.module.css';
import { Link } from 'react-router-dom';
import workImg from "../assets/AnjodaFlecha_upscaled.png"; 

export default function Work() {
    const projects = [
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
    { name: "Name", type: "Type of project", img: workImg },
  ];


  return (
    <section className={styles.workPage}>
      <h1 className={styles.title}>WORK</h1>
      <div className={styles.workContainer}>
        {projects.map((project, index) => (
          <motion.section 
            key={index} 
            className={styles.projects}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            viewport={{ once: true, amount: "all" }}

        >
            <img src={project.img} alt="Work Cover" />
            <section className={styles.projectsText}>
              <h2>{project.name}</h2>
              <h3>{project.type}</h3>
            </section>
          </motion.section>
        ))}

        {/* <Link to={}>let's talk</Link> */}
      </div>
    </section>
  );


}




    // return(
    // <section className={styles.workPage}>
    //     <h1 className={styles.title}>WORK</h1>
    //     <div className={styles.workContainer}>

    //         <section className={styles.projects}>
    //             <img src={workImg} alt="Work Cover" />
    //             <section className={styles.projectsText}>
    //                 <h2>Name</h2>
    //                 <h3>Type of project</h3>
    //             </section>
    //         </section>

    //         <section className={styles.projects}>
    //             <img src={workImg} alt="Work Cover" />
    //             <section className={styles.projectsText}>
    //                 <h2>Name</h2>
    //                 <h3>Type of project</h3>
    //             </section>
    //         </section>

    //         <section className={styles.projects}>
    //             <img src={workImg} alt="Work Cover" />
    //             <section className={styles.projectsText}>
    //                 <h2>Name</h2>
    //                 <h3>Type of project</h3>
    //             </section>
    //         </section>

    //         <section className={styles.projects}>
    //             <img src={workImg} alt="Work Cover" />
    //             <section className={styles.projectsText}>
    //                 <h2>Name</h2>
    //                 <h3>Type of project</h3>
    //             </section>
    //         </section>

    //         <section className={styles.projects}>
    //             <img src={workImg} alt="Work Cover" />
    //             <section className={styles.projectsText}>
    //                 <h2>Name</h2>
    //                 <h3>Type of project</h3>
    //             </section>
    //         </section>

    //         <Link to={}>let's talk</Link>
        
    //     </div>
    // </section>
    // );