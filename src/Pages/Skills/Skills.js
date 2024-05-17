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

    <div class="w-screen h-screen" >

      <Navbar/>

      <div class=' flex flex-wrap mx-3 my-3 gap-2 '>
      <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={html} alt=''/>
            <div class='group-hover:animate-pulse text-center'>html</div>
        </div>

        <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={css} alt=''/>
            <div class='group-hover:animate-pulse text-center'>css</div>
        </div>

        <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={tailwind} alt=''/>
            <div class='group-hover:animate-pulse text-center'>tailwind</div>
        </div>

        <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={bootstrap} alt=''/>
            <div class='group-hover:animate-pulse text-center'>bootstrap</div>
        </div>

        <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={html} alt=''/>
            <div class='group-hover:animate-pulse text-center'>html</div>
        </div>

        <div div class='group w-20 h-28 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-110 transition-all w-18 h-18 duration-500' src={html} alt=''/>
            <div class='group-hover:animate-pulse text-center'>html</div>
        </div>





      </div>



    </div>
    
  )
}

export default Skills
