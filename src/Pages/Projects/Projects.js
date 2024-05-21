import React from 'react'
import styles from './Projects.module.css'
import Navbar from '../Navbar/Navbar'
import Background from './bg_projects.jpg'
import cv from './img/cv.jpeg'
import casher from './img/casher.jpeg'
import market from './img/market.jpeg'
import ready from './img/ready.jpeg'
import restau from './img/restau.jpeg'

const Projects = () => {
  return (

    <div class="w-screen h-screen" >

      <Navbar/>
      <div class="grid sm:grid-cols-2 grid-cols-1  gap-3 mx-3 my-3 text-cyan-100">

      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-start  pb-3'>
{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        autlob
        
        </div>
        <img src={restau} alt='' class='w-24 h-24 rounded-full' />
        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-800 py-4  px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div class="mt-px font-semibold"> react-native -soon- </div>
  </div>
        <div class='font-thin text-sm mx-4' >An application that can be run from the customer's mobile phone to order inside the restaurant and then send it to the restaurant's direct person</div>
      </div>


      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-start pb-3 '>
{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        my portfolio
        
        </div>
        <img src={cv} alt='' class='w-24 h-24 rounded-full' />
        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-800 py-4  px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div class="mt-px"> reactjs </div>
  </div>
        <div class='font-thin text-sm mx-4' >It is a website to display a person's data and work</div>
      </div>


      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-start pb-3 '>
{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        L Casher
        
        </div>
        <img src={casher} alt='' class='w-24 h-24 rounded-full' />
        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-800 py-4  px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div class="mt-px"> WPF (xaml + c#) </div>
  </div>
        <div class='font-thin text-sm mx-4' >It is a point-of-sale computer application that contains sales and purchase invoices, and the invoice is printed via a thermal printer</div>
      </div>

      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-start pb-3 '>
{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        Matjari
        
        </div>
        <img src={market} alt='' class='w-24 h-24 rounded-full' />
        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-800 py-4  px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div class="mt-px"> flutter </div>
  </div>
        <div class='font-thin text-sm mx-4' >It is a mobile application in which products are displayed and orders are made via WhatsApp</div>
      </div>



      <div class='group w-full flex-col bg-cyan-900 rounded-sm shadow-md flex items-center justify-start pb-3 '>
{/* remind soon */}
        <div class='font-bold group-hover:animate-bounce'>
        Ready Mix Manag
        
        </div>
        <img src={ready} alt='' class='w-24 h-24 rounded-full' />
        <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-800 py-4  px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
    <div class="mt-px"> WPF (xaml + c#) </div>
  </div>
        <div class='font-thin text-sm mx-4' >It is an application for managing materials for ready-mixed concrete and issuing reports</div>
      </div>




      
 
      </div>
      
      </div>

  )
}

export default Projects
