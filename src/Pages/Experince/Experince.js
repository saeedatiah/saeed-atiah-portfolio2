import React from 'react';
import styles from './Experince.module.css'
import Navbar from '../Navbar/Navbar'
import Background from './bg_experince.jpg'
import wpf_win from './img/wpf_winu.png'
import exp from './img/experience.png'
import react from './img/react.png'

const Experince = () => {
  return (
    <div class="w-screen h-screen" style={{backgroundImage:'url(./bg_home.jpg)'}}>
      <Navbar/>

      <div class="p-4 max-w-md mx-auto pt-20 flow-root">
  <ul role="list" class="-mb-8">
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full  flex items-center justify-center ring-8 ring-cyan-900">
              <img src={react} alt=''/>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p class="text-sm text-gray-500">reactjs <a href="#" class="font-medium text-gray-900">freelancer</a></p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <time datetime="2020-09-20">2022 - present</time>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full  flex items-center justify-center ring-8 ring-cyan-900">
            <img src={wpf_win} alt=''/>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p class="text-sm text-gray-500">wpf <a href="#" class="font-medium text-gray-900">team leader</a></p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <time datetime="2020-09-22">2012 - present</time>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-cyan-900">
            <img src={wpf_win} alt=''/>

            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p class="text-sm text-gray-500">wpf <a href="#" class="font-medium text-gray-900"> develpoer</a></p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <time datetime="2020-09-28">2019 - 2021</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-cyan-900">
            <img src={wpf_win} alt=''/>

            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p class="text-sm text-gray-500">windows forms <a href="#" class="font-medium text-gray-900"> programmer</a></p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <time datetime="2020-09-28">2014 - 2016</time>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li>
      <div class="relative pb-8">
        <div class="relative flex space-x-3">
          <div>
            <span class="h-8 w-8 rounded-full  flex items-center justify-center ring-8 ring-cyan-900">
            <img src={exp} alt=''/>
            </span>
          </div>
          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
            <div>
              <p class="text-sm text-gray-500">professional experiences <a href="#" class="font-medium text-gray-900">computer engineer</a></p>
            </div>
            <div class="whitespace-nowrap text-right text-sm text-gray-500">
              <time datetime="2020-10-04">from 2018</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

      </div>

    
    

//     <div className="wrapper">
//             <img  className='img_bg' src={Background} />

//     <Navbar className="header"/>
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 antialiased bg-gray-200 opacity-80 flex-shrink-0">
//     <div class="p-4 max-w-md mx-auto pt-20 flow-root">
//   <ul role="list" class="-mb-8">
//     <li>
//       <div class="relative pb-8">
//         <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
//         <div class="relative flex space-x-3">
//           <div>
//             <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
//               <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
//               </svg>
//             </span>
//           </div>
//           <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
//             <div>
//               <p class="text-sm text-gray-500">Window Forms </p>
//             </div>
//             <div class="whitespace-nowrap text-right text-sm text-gray-500">
//               <time datetime="2020-09-20">2017 - 2019</time>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
//     <li>
//       <div class="relative pb-8">
//         <span class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
//         <div class="relative flex space-x-3">
//           <div>
//             <span class="h-8 w-8 rounded-full  flex items-center justify-center ring-8 ring-white">
//               <img class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
//                 src="https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg" />
            
//             </span>
//           </div>
//           <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
//             <div>
//               <p class="text-sm text-gray-500">WPF</p>
//             </div>
//             <div class="whitespace-nowrap text-right text-sm text-gray-500">
//               <time datetime="2020-09-22">Sep 22</time>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
    
//     <li>
//       <div class="relative pb-8">
//         <div class="relative flex space-x-3">
//           <div>
//             <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
//               <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                 <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
//               </svg>
//             </span>
//           </div>
//           <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
//             <div>
//               <p class="text-sm text-gray-500">ReatJS</p>
//             </div>
//             <div class="whitespace-nowrap text-right text-sm text-gray-500">
//               <time datetime="2020-10-04">2022 - present</time>
//             </div>
//           </div>
//         </div>
//       </div>
//     </li>
    
   
//   </ul>
// </div>

//     </div>
//     </div>

    
  )
}

export default Experince
