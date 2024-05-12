import React from 'react'
import styles from './Projects.module.css'
import Navbar from '../Navbar/Navbar'
import Background from './bg_projects.jpg'

const Projects = () => {
  return (

    <div className='wrapper'>
        <img  className='img_bg' src={Background} />

<Navbar className='header'/>
<div className='main'>
<div className={styles.super_box}>
  <div className={styles.container}>
  
    <div className={styles.box}>
    
      <div className={styles.icon_bg}>
      </div>
    </div>

    <div className={styles.icon}>

      icon
    </div>

  </div>

  <div className={styles.text}>
    <p clclassNameass={styles.title}>
      Security Hardening
    </p>
  </div>
</div>

<div className={styles.super_box}>
  <div className={styles.container}>
  
    <div className={styles.box}>
    
      <div className={styles.icon_bg}>
      </div>
    </div>

    <div className={styles.icon}>

      icon
    </div>

  </div>

  <div className={styles.text}>
    <p clclassNameass={styles.title}>
      Security Hardening
    </p>
  </div>
</div>

<div className={styles.super_box}>
  <div className={styles.container}>
  
    <div className={styles.box}>
    
      <div className={styles.icon_bg}>
      </div>
    </div>

    <div className={styles.icon}>

      icon
    </div>

  </div>

  <div className={styles.text}>
    <p clclassNameass={styles.title}>
      Security Hardening
    </p>
  </div>
</div>


</div>



    </div>

  )
}

export default Projects
