import React from 'react'
import styles from './Skills.module.css'
import css from './imgs/social.png'
import html from './imgs/html-5.png'
import Navbar from '../Navbar/Navbar'



const Skills = () => {
  return (

    <div className='wrapper'>
    <Navbar className='header'/>
    <div className='main'>

<div className={styles.container_img}>
      <img className={styles.img} src={html} alt=""/>
      <img className={styles.img} src={css} alt=""/>
    </div>
    </div>
    </div>
    
  )
}

export default Skills
