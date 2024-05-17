import React from 'react'
import styles from './Projects.module.css'
import Navbar from '../Navbar/Navbar'
import Background from './bg_projects.jpg'

const Projects = () => {
  return (

    <div class="w-screen h-screen" >

      <Navbar/>
      <div class="grid grid-cols-2  gap-3 mx-3 my-3 ">

      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-center  '>

{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        Poject Name
        
        </div>
        <img src={Background} alt='' class='w-24 h-24 rounded-full' />
        <div class='font-thin text-sm' >project Name</div>

      </div>


      
 
      </div>
      
      </div>

  )
}

export default Projects
