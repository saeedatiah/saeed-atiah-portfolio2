import React from 'react'
import styles from  './Navbar.module.css'
import { Link } from "react-router-dom";
import home from './img/home.png'
import projects from './img/projects.png'
import experince from './img/experince.png'
import skill from './img/skill.png'
import quali from './img/quali.png'



const Navbar = () => {
  return (

    <div class="grid grid-rows-1 grid-cols-5 gap-4 justify-stretch bg-cyan-900">
     <Link class="hover:text-cyan-300 text-cyan-100 hidden md:block text-center" to="/">Home</Link>
     <Link class="hover:text-cyan-300 text-cyan-100 md:hidden text-center " to="/"><img class='mx-auto my-auto' src={home} alt=''/></Link>

     <Link class="hover:text-cyan-300 text-cyan-100 hidden md:block text-center" to="/projects">projects</Link>
     <Link class="hover:text-cyan-300 text-cyan-100 md:hidden text-center" to="/projects"><img class='mx-auto my-auto' src={projects} alt=''/></Link>

     <Link class="hover:text-cyan-300 text-cyan-100 hidden md:block text-center" to="/experince">experince</Link>
     <Link class="hover:text-cyan-300 text-cyan-100 md:hidden text-center" to="/experince"><img class='mx-auto my-auto' src={experince} alt=''/></Link>

     <Link class="hover:text-cyan-300 text-cyan-100 hidden md:block text-center" to="/skills">skills</Link>
     <Link class="hover:text-cyan-300 text-cyan-100 md:hidden text-center" to="/skills"><img class='mx-auto my-auto' src={skill} alt=''/></Link>

     <Link class="hover:text-cyan-300 text-cyan-100 hidden md:block text-center" to="/qualification">qualification</Link>
     <Link class="hover:text-cyan-300 text-cyan-100 md:hidden text-center" to="/qualification"><img class='mx-auto my-auto' src={quali} alt=''/></Link>



    </div>
    // <nav class="bg-green-800  
    //             py-4 text-white fixed  
    //             w-full top-0 left-0 right-0 items-center " > 
    //     <div class="container  "> 
    //         <ul class=" bg-gray-700 w-fit"> 
    //             <li class="inline-block bg-orange-300 "> 
    //             <Link class="hover:text-gray-300 md:collapse " to="/">H</Link>
    //             <Link class="hover:text-gray-300 collapse md:visible" to="/">Home</Link>
    //             </li> 
    //             <li class="inline-block"> 
    //             <Link class="hover:text-gray-300 md:collapse" to="/projects">P</Link>
    //             <Link class="hover:text-gray-300 collapse md:visible" to="/projects">projects</Link>
    //             </li> 
    //             <li class="inline-block"> 
    //             <Link class="hover:text-gray-300 md:collapse" to="/experince">E</Link>
    //             <Link class="hover:text-gray-300 collapse md:visible" to="/experince">experince</Link>
    //             </li> 
    //             <li class="inline-block"> 
    //             <Link class="hover:text-gray-300 md:collapse" to="/skills">S</Link>
    //             <Link class="hover:text-gray-300 collapse md:visible" to="/skills">skills</Link>
    //             </li>
    //             <li class="inline-block"> 
    //             <Link class="hover:text-gray-300 md:collapse" to="/qualification">Q</Link>
    //             <Link class="hover:text-gray-300 collapse md:visible" to="/qualification">qualification</Link>
    //             </li> 
    //         </ul> 
    //     </div> 
    // </nav> 


  //   <nav class="bg-white border-gray-200 dark:bg-gray-900">
  //   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  //     <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
  //         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
  //         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  //     </a>
  //     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
  //         <span class="sr-only">Open main menu</span>
  //         <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
  //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
  //         </svg>
  //     </button>
  //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
  //       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  //         <li>
  //           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
  //         </li>
  //         <li>
  //           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
  //         </li>
  //         <li>
  //           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
  //         </li>
  //         <li>
  //           <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>



    // <div className={styles.main_container} >
    //   <div className={styles.container}>
    //     <Link className={styles.title} to="/">Home</Link>
    //     <Link className={styles.title} to="/projects">Projects</Link>
    //     <Link className={styles.title} to="/experince">Experience</Link>
    //     <Link className={styles.title} to="/skills">Skills</Link>
    //     <Link className={styles.title} to="/qualification">Qualification</Link>
    //   </div>
    // </div>

  )
}

export default Navbar
