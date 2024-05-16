import React from 'react'
import './Home.module.css'
import Typical from 'react-typical'
import styles from './Home.module.css'
import Navbar from '../Navbar/Navbar'
import "../Shared/CSS/Gloabal_css.css"
import Background from './bg_home.jpg'


const Home = () => {
  return (
    <div class="w-screen h-screen" style={{backgroundImage:'url(./bg_home.jpg)'}}>

      <Navbar/>
      <div class="grid grid-cols-1 grid-rows-1 md:grid-cols-2 md:grid-rows-2 justify-stretch  pt-14 ">
      <div class="bg-orange-400 m-6 rounded-sm shadow-md">
aa
      </div>
      <div class="bg-amber-400 grid grid-rows-2 m-6 rounded-sm shadow-md">
        <div>    Saeed Abdullah Baatiah</div>
        <Typical
        steps={['Hi', 1000,'I am Developer', 1000,]}
        loop={Infinity}
        wrapper="p"
      />

      </div>
      <div class="col-span-1 md:col-span-2 bg-slate-300 overflow-auto m-6 rounded-sm shadow-md">
      <p class="break-all ">
      I am a software developer,
     with extensive experience in programming and providing high-quality software solutions.
      Since I was young, I have been passionate about computers. 
      I have more than five years of experience in the programming field.
       I am looking for a role in which I will challenge myself and benefit from my experience in software development,
        problem-solving skills,
         and my passion for technology to raise the level of innovation and exceed business goals.

      </p>
      </div>

      </div>




      {/* <div class="mt-28 text-center">
      <div className={styles.main}>
    <div >
      
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
    <div >
    I am a software developer,
     with extensive experience in programming and providing high-quality software solutions.
      Since I was young, I have been passionate about computers. 
      I have more than five years of experience in the programming field.
       I am looking for a role in which I will challenge myself and benefit from my experience in software development,
        problem-solving skills,
         and my passion for technology to raise the level of innovation and exceed business goals.

    </div>
    </div>
    </div>
      </div> */}

    </div>




    // <div className="wrapper" >
    // <img  className='img_bg' src={Background} alt="" />
    // <Navbar className="header"/>
    // <div className={styles.main}>
    // <div >
      
    // <div className={styles.info}>

    // <div className={styles.pic}>
    // pic <br/>
    // pic <br/>
    // pic <br/>
    // pic <br/>
    // pic <br/>
    // pic <br/>
    // </div>
    // <div className={styles.name}>
    // Saeed Abdullah Baatiah
    // </div>
    // <div className={styles.job_title}>
    // <Typical
    //     steps={['Hi', 1000,'I am Developer', 1000,]}
    //     loop={Infinity}
    //     wrapper="p"
    //   />
    // </div>

    // </div>
    // <div className='content'>
    // I am a software developer,
    //  with extensive experience in programming and providing high-quality software solutions.
    //   Since I was young, I have been passionate about computers. 
    //   I have more than five years of experience in the programming field.
    //    I am looking for a role in which I will challenge myself and benefit from my experience in software development,
    //     problem-solving skills,
    //      and my passion for technology to raise the level of innovation and exceed business goals.

    // </div>
    // </div>
    // </div>
    // </div>

   
    
  )
}

export default Home
