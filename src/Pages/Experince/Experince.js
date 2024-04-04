import React from 'react';
import styles from './Experince.module.css'

const Experince = () => {
  return (
    <ul className={styles.timeline}>

  <li>
    <div className={styles.direction_r}>
      <div className={styles.flag_wrapper}>
        <span className={styles.flag}>Window Forms</span>
        <span className={styles.time_wrapper}><span className={styles.time}>2017 - 2019</span></span>
      </div>
      <div className={styles.desc}>I worked on two projects on this technology.</div>
    </div>
  </li>
  
  <li>
    <div className={styles.direction_l}>
      <div className={styles.flag_wrapper}>
        <span className={styles.flag}>WPF</span>
        <span className={styles.time_wrapper}><span class={styles.time}>2019 - present</span></span>
      </div>
      <div className={styles.desc}>I worked in this field in a company for two years and then I was promoted to department head.</div>
    </div>
  </li>

  <li>
    <div className={styles.direction_r}>
      <div className={styles.flag_wrapper}>
        <span className={styles.flag}>ReatJS</span>
        <span className={styles.time_wrapper}><span className={styles.time}>2022 - present</span></span>
      </div>
      <div className={styles.desc}>I work in this field as a freelancer and I am still learning a lot about this technology and this website I created using this technology</div>
    </div>
  </li>
  
</ul>
  )
}

export default Experince
