import 'aos/dist/aos.css';
import './App.module.css';
import Experince from './Pages/Experince/Experince';
import Home from './Pages/Home/Home';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Projects from './Pages/Projects/Projects';
import styles from './App.module.css'
import Skills from './Pages/Skills/Skills';

function App() {
  return (
    <div>
      <header>
        <div className={styles.logo}>
          <h1>Logologo</h1>           
        </div>
        <input type="checkbox" id="nav_toggle" className={styles.nav_toggle} ></input>
        <label for="nav_toggle" className ={styles.nav_toggle_label}> 
          <span className={styles.label_span}></span> 
        </label>
        <nav> 
          <ul>
            <li><AnchorLink  href="#Home">Home</AnchorLink></li>
            <li><AnchorLink  href="#Experince">Experince</AnchorLink></li>
            <li><AnchorLink  href="#Projects">Projects</AnchorLink></li>  
            <li><AnchorLink  href="#Qualifications">Qualifications</AnchorLink></li>  
            <li><AnchorLink  href="#Skills">Skills</AnchorLink></li>  
          </ul>
        </nav>
      </header>
        <div class="content" >
        <div id='Home' data-aos="fade-in" data-aos-duration="4000" >
          
          <div className={styles.card}>
          <div className={styles.title}>Information</div>
          <Home className={styles.content_card}/>

          </div>
        </div>


        <div id='Experince'  data-aos="zoom-in-up" data-aos-duration="4000" >
        <div className={styles.card}>
          <div className={styles.title}>Experince</div>
          <Experince className={styles.content_card}/>
        </div>
        </div>
        
        
        <div id='Projects' data-aos="flip-up" data-aos-duration="4000" >
        
        <div className={styles.card}>
          <div className={styles.title}>Projects</div>
           <Projects/>
        </div>
        </div>


        
        

        <div id='Qualifications' data-aos="top-top" data-aos-duration="4000" >
        <div className={styles.card}>
          <div className={styles.title}>Qualifications</div>
          <Experince className={styles.content_card}/>
        </div>
        </div>

        <div id='Skills' data-aos="ease-out-sine" data-aos-duration="4000" >
        <div className={styles.card}>
          <div className={styles.title}>Skills</div>
          <Experince className={styles.content_card}/>
        </div>
        </div>

        <div id='Skills' data-aos="ease-out-sine" data-aos-duration="4000" >
        <div className={styles.card}>
          <div className={styles.title}>Test</div>
          <Skills/>
        </div>
        </div>

        

        </div>
      </div>
  );
}

// Animations
// Fade animations:

// fade
// fade-up
// fade-down
// fade-left
// fade-right
// fade-up-right
// fade-up-left
// fade-down-right
// fade-down-left
// Flip animations:

// flip-up
// flip-down
// flip-left
// flip-right
// Slide animations:

// slide-up
// slide-down
// slide-left
// slide-right
// Zoom animations:

// zoom-in
// zoom-in-up
// zoom-in-down
// zoom-in-left
// zoom-in-right
// zoom-out
// zoom-out-up
// zoom-out-down
// zoom-out-left
// zoom-out-right
// Anchor placements:
// top-bottom
// top-center
// top-top
// center-bottom
// center-center
// center-top
// bottom-bottom
// bottom-center
// bottom-top
// Easing functions:
// linear
// ease
// ease-in
// ease-out
// ease-in-out
// ease-in-back
// ease-out-back
// ease-in-out-back
// ease-in-sine
// ease-out-sine
// ease-in-out-sine
// ease-in-quad
// ease-out-quad
// ease-in-out-quad
// ease-in-cubic
// ease-out-cubic
// ease-in-out-cubic
// ease-in-quart
// ease-out-quart
// ease-in-out-quart

export default App;
