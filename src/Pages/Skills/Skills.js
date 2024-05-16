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
        <img  className='img_bg' src={Background} alt=''/>

    <Navbar className='header'/>

    <section class="py-24 px-4 lg:px-16 flex-1"> 
    <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-28 lg:gap-y-16">
            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" class="block">
                    <div class="h-28">
                        <div
                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48  rounded-xl justify-items-center align-middle">
                            <img src={html}
                                class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            HTML
                        </p>
                    </div>
                </a>
            </div>

            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" class="block">
                    <div class="h-28">
                        <div
                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48  rounded-xl justify-items-center align-middle">
                            <img src={html}
                                class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            HTML
                        </p>
                    </div>
                </a>
            </div>
            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <a href="#" class="block">
                    <div class="h-28">
                        <div
                            class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48  rounded-xl justify-items-center align-middle">
                            <img src={html}
                                class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                width="200" height="200"/>
                        </div>
                    </div>
                    <div class="p-6   z-10 w-full   ">
                        <p
                            class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                            HTML
                        </p>
                    </div>
                </a>
            </div>
            <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <a href="#" class="block">
                <div class="h-28">
                    <div
                        class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48  rounded-xl justify-items-center align-middle">
                        <img src={html}
                            class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                            width="200" height="200"/>
                    </div>
                </div>
                <div class="p-6   z-10 w-full   ">
                    <p
                        class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                        HTML
                    </p>
                </div>
            </a>
        </div>
        <div class="relative group h-48 flex   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <a href="#" class="block">
            <div class="h-28">
                <div
                    class="absolute -top-8 lg:top-[-5%] left-[2%] z-40  group-hover:top-[-20%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48  rounded-xl justify-items-center align-middle">
                    <img src={html}
                        class="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                        width="200" height="200"/>
                </div>
            </div>
            <div class="p-6   z-10 w-full   ">
                <p
                    class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                    HTML
                </p>
            </div>
        </a>
    </div>



            </div>
            </div>
            </section>

   

    </div>
    
  )
}

export default Skills
