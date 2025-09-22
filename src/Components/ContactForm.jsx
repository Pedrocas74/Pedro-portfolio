import { motion } from 'framer-motion';
import styles from './ContactForm.module.css';
import { useState } from "react";

export default function ContactForm() {    //Powered by Formspree
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mldwzqaa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thanks! Your message has been sent.");
      form.reset();
    } else {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <motion.form 
        className={styles.form} 
        onSubmit={handleSubmit}
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
    >
      <label htmlFor="name">
        Name:
        <input type="text" name="name" id='name' placeholder='Enter your name' required />
      </label>
      <label htmlFor='email'>
        Email:
        <input type="email" name="email" id='email' placeholder='Enter your email' required />
      </label>
      <label htmlFor='message' className={styles.messageBox}>
        Message:
        <textarea name="message" id='message' placeholder='Drag down↘' required />
      </label>
      <button type="submit">send me a message</button>
      {status && <p>{status}</p>}
    </motion.form>
  );
}
