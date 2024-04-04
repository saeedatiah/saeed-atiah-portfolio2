import React from 'react'
import './Home.module.css'
import Typical from 'react-typical'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div>
      
    <div className={styles.info}>

    <div className={styles.pic}>
    pic <br/>
    pic <br/>
    pic <br/>
    pic <br/>
    pic <br/>
    pic <br/>
    </div>
    <div className={styles.name}>
    Saeed Abdullah Baatiah
    </div>
    <div className={styles.job_title}>
    <Typical
        steps={['Hi', 1000,'I am Developer', 1000,]}
        loop={Infinity}
        wrapper="p"
      />
    </div>

    </div>
    <div>
    I am a software developer,
     with extensive experience in programming and providing high-quality software solutions.
      Since I was young, I have been passionate about computers. 
      I have more than five years of experience in the programming field.
       I am looking for a role in which I will challenge myself and benefit from my experience in software development,
        problem-solving skills,
         and my passion for technology to raise the level of innovation and exceed business goals.

    </div>
    </div>
  )
}

export default Home
