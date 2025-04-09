import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      <form 
        action="https://formspree.io/f/xzzzbvnl" 
        method="POST" 
        className={styles.form}
      >
        <input
          type="text"
          placeholder="Your Name"
          name="username"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className={`${styles.input} ${styles.textarea}`}
        ></textarea>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;