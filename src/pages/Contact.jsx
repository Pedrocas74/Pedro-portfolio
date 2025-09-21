import { motion } from 'framer-motion';
import styles from '../styles/contact.module.css';
import githubIcon from "../assets/github-mark-white.png";
import linkedinIcon from "../assets/InBug-White.png";
import ContactForm from '../Components/ContactForm';

export default function Contact() {

    return(
    <section className={styles.contactSection}>
      <h1 className={styles.title}>CONTACT</h1>
        <div className={styles.contactsContainer}>
            <div className={styles.contacts}>
                <ContactForm />
                <motion.div 
                  className={styles.socials}
                  initial={{ y: 100, opacity: 0}}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <span>Socials</span>
                    <div className={styles.socialsIcons}>
                        <motion.a 
                            href=""
                            initial={{ scaleX: 0.5, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        ><img src={githubIcon} alt="Github link" /></motion.a>
                        <motion.a 
                            href=""
                            initial={{ scaleX: 0.5, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        ><img src={linkedinIcon} alt="Linkedin link" /></motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
            
    </section>
    
    );
}

