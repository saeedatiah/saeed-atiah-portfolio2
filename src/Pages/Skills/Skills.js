import React from 'react'
import styles from './Skills.module.css'
import css from './imgs/social.png'
import html from './imgs/html-5.png'
import bootstrap from './imgs/bootstrap.png'
import draw from './imgs/draw.png'
import excel1 from './imgs/excel1.png'
import github from './imgs/github.png'
import js from './imgs/js.png'
import photoshop from './imgs/photoshop.png'
import react from './imgs/react.png'
import slack from './imgs/slack.png'
import trello from './imgs/trello.png'
import tailwind from './imgs/tailwind.svg'
import Navbar from '../Navbar/Navbar'
import Background from './imgs/bg_skills.jpg'



const Skills = () => {
  return (

    <div className='wrapper'>
        <img  className='img_bg' src={Background} />

    <Navbar className='header'/>
    <div className='main'>

<div className={styles.container_img}>

      <img className={styles.img} src={html} alt=""/>
      <img className={styles.img} src={css} alt=""/>
      <img className={styles.img} src={bootstrap} alt=""/>
      <img className={styles.img} src={js} alt=""/>
      <img className={styles.img} src={tailwind} alt=""/>
      <img className={styles.img} src={react} alt=""/>
      <img className={styles.img} src={github} alt=""/>
      <img className={styles.img} src={slack} alt=""/>
      <img className={styles.img} src={trello} alt=""/>
      <img className={styles.img} src={draw} alt=""/>
      <img className={styles.img} src={excel1} alt=""/>
      <img className={styles.img} src={photoshop} alt=""/>







      

      

    


    </div>
    </div>
    </div>
    
  )
}

export default Skills
