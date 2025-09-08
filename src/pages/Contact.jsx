
import styles from '../styles/contact.module.css';

function Contact() {

    return(
        <div className={styles.contactPage}>
            <h1 className={styles.title}>CONTACT</h1>
            <div className={styles.contacts}>
                <a href="mailto:pmig.magalhaes@gmail.com">Send me an email</a>
                <a href="">Github</a>
                <a href="">Linkedin</a>

            </div>
            
        </div>
    );
}

export default Contact;