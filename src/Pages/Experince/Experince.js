import React from 'react';
import './Experince.module.css'

const Experince = () => {
  return (
    <ul className="timeline">

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="flag">Window Forms</span>
        <span className="time-wrapper"><span className="time">2017 - 2019</span></span>
      </div>
      <div className="desc">I worked on two projects on this technology.</div>
    </div>
  </li>
  
  <li>
    <div className="direction-l">
      <div className="flag-wrapper">
        <span className="flag">WPF</span>
        <span className="time-wrapper"><span class="time">2019 - present</span></span>
      </div>
      <div className="desc">I worked in this field in a company for two years and then I was promoted to department head.</div>
    </div>
  </li>

  <li>
    <div className="direction-r">
      <div className="flag-wrapper">
        <span className="flag">ReatJS</span>
        <span className="time-wrapper"><span className="time">2022 - present</span></span>
      </div>
      <div className="desc">I work in this field as a freelancer and I am still learning a lot about this technology and this website I created using this technology</div>
    </div>
  </li>
  
</ul>
  )
}

export default Experince
