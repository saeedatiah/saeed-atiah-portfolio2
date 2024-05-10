import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Experince from '../Experince/Experince'; 
import Skills from '../Skills/Skills';
import Qualification from '../Qualification/Qualification';


const AppRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experince" element={<Experince />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/qualification" element={<Qualification/>} />
    </Routes>
    </div>
    
    
  )
}

export default AppRoutes
