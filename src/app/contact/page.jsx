import React from 'react';
import styles from './contact.module.css';

function Contact() {
  return (
    <div className={styles.contact}>
      {/* Form sends submission to Formspree endpoint */}
      <form
        action="https://formspree.io/f/xzzzbvnl"
        method="POST"
        className={styles.form}
      >
        {/* User name input */}
        <input
          type="text"
          placeholder="Your Name"
          name="username"
          required
          className={styles.input}
        />
        {/* Email input */}
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          required
          className={styles.input}
        />
        {/* Message textarea */}
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className={`${styles.input} ${styles.textarea}`}
        ></textarea>
        {/* Submit button */}
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
