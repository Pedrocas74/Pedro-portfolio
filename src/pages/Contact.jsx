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
                <div className={styles.socials}>
                    <span>Socials</span>
                    <div className={styles.socialsIcons}>
                        <a href=""><img src={githubIcon} alt="Github link" /></a>
                        <a href=""><img src={linkedinIcon} alt="Linkedin link" /></a>
                    </div>
                </div>
            </div>
        </div>
            
    </section>
    
    );
}

