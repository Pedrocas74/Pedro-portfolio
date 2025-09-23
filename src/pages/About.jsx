import { motion } from "framer-motion";
import styles from "../styles/about.module.css";
import avatarImg from "../assets/Avatar_noBackground_blue_upscaled.png"; 

export default function About() {
  return (

    <section className={styles.aboutSection}>
      <h1 className={styles.title}>ABOUT</h1>

      <div className={styles.aboutContainer}>

          <div className={styles.text}>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 0.7 }}
            >I'm enjoying the <strong>unique life</strong>.</motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 0.8 }}
            >I'm enjoying the <strong>learning</strong>.</motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 0.9 }}
            >The <strong>creativity</strong>, the <strong>exploration</strong>.</motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 1 }}
            >I'm enjoying the <strong>freedom to discover</strong>.</motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 1.1 }}
            >I'm enjoying the <strong>challenges</strong>. </motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 1.2 }}
            >The <strong>search for a solution</strong>. </motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 1.3 }}
            >The <strong>feeling when a problem is resolved</strong>.</motion.span>
            <motion.span
                initial={{ y: -25, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ delay: 1.4 }}
            >Enjoying the <strong>future, built one line at a time</strong>.</motion.span>
            <br />
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.7, delay: 2 }}
            ><strong>Turning ideas into reality</strong></motion.span><motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 3 }}
            > - <em>by someone who enjoys.</em></motion.span>
            
            <br />
            <span className={styles.pedro}><motion.span 
                                                initial={{y: 20, opacity: 0}} 
                                                animate={{ y: 0, opacity: 1}} 
                                                transition={{ delay: 3.5 }}
                                              >P</motion.span>
                                              <motion.span 
                                                initial={{y: 20, opacity: 0}} 
                                                animate={{ y: 0, opacity: 1}} 
                                                transition={{ delay: 3.7 }}
                                              >e</motion.span>
                                              <motion.span 
                                                initial={{y: 20, opacity: 0}} 
                                                animate={{ y: 0, opacity: 1}} 
                                                transition={{ delay: 3.9 }}
                                              >d</motion.span>
                                              <motion.span  
                                                initial={{y: 20, opacity: 0}} 
                                                animate={{ y: 0, opacity: 1}} 
                                                transition={{ delay: 4.1 }}
                                              >r</motion.span>
                                              <motion.span  
                                                initial={{y: 20, opacity: 0}} 
                                                animate={{ y: 0, opacity: 1}} 
                                                transition={{ delay: 4.3 }}
                                              >o</motion.span></span>
          </div>

        <motion.img
          className={styles.avatar}
          src={avatarImg}
          alt="Pedro Avatar"
          initial={{ y: 100, opacity: 0, }}
          animate={{ y: 0, opacity: 1, }}
          transition={{ ease: "easeInOut", duration: 1, delay: 3}}
        />

         <motion.span 
          className={styles.resume}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
        ><a href="">see resume</a></motion.span>
      </div>
    </section>
  );
}

