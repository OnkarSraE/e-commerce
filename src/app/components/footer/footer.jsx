import React from 'react'
import styles from './footer.module.css'
import { IoLogoFacebook } from "react-icons/io";
import { FaShopify } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaReact } from "react-icons/fa";
function Footer() {
  return (
    <div className={styles.footer}>
      &copy; Copyright <span className={styles.slogo}>ShopSwift</span> <FaShopify />
      <IoLogoFacebook className={styles.fb}/>
      <SiGithub className={styles.git}/>
      <FaReact className={styles.react}/>
    </div>
    
  )
}

export default Footer
