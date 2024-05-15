import React from 'react'
import styles from  './Navbar.module.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav class="bg-green-800  
                py-4 text-white fixed  
                w-full top-0 left-0 items-center " > 
        <div class="container mx-auto "> 
            <ul class="ml-8 space-x-4 items-center"> 
                <li class="inline-block"> 
                <Link class="hover:text-gray-300" to="/">Home</Link>
                </li> 
                <li class="inline-block"> 
                <Link class="hover:text-gray-300" to="/projects">projects</Link>
                </li> 
                <li class="inline-block"> 
                <Link class="hover:text-gray-300" to="/experince">experince</Link>
                </li> 
                <li class="inline-block"> 
                <Link class="hover:text-gray-300" to="/skills">skills</Link>
                </li>
                <li class="inline-block"> 
                <Link class="hover:text-gray-300" to="/qualification">qualification</Link>
                </li> 
            </ul> 
        </div> 
    </nav> 

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
