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

      <div class=' flex flex-wrap mx-3 my-3 gap-4 '>
        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={html} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>html</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={css} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>css</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-24 duration-500 border-2 border-cyan-100' src={tailwind} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>tailwind</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={bootstrap} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>bootstrap</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={js} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>js</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={github} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>github</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={trello} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>trello</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={slack} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>slack</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={excel1} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>excel</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={photoshop} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>photoshop</div>
        </div>

        <div div class='group w-24 h-32 shadow-md rounded-md'>
            <img class='rounded-full group-hover:scale-125 transition-all w-18 h-18 duration-500 border-2 border-cyan-100' src={draw} alt=''/>
            <div class='group-hover:mt-1 transition-all text-center text-cyan-900'>draw</div>
        </div>

        
        

        





      </div>



    </div>
    
  )
}

export default Skills
