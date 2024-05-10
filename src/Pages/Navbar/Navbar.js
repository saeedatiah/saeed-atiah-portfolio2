import React from 'react'
import styles from  './Navbar.module.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className={styles.main_container} >
      <div className={styles.container}>
        <Link className={styles.title} to="/">Home</Link>
        <Link className={styles.title} to="/projects">Projects</Link>
        <Link className={styles.title} to="/experince">Experince</Link>
        <Link className={styles.title} to="/skills">Skills</Link>
        <Link className={styles.title} to="/qualification">Qualification</Link>
      </div>
    </div>

  )
}

export default Navbar
