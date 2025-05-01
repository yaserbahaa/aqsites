import { useState , useEffect ,useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import "../css/ourwork.css"
import dImg1 from "../assets/designs/d-img1-main.PNG"
import dImg2 from "../assets/designs/d-img2-main.PNG"
import dImg3 from "../assets/designs/d-img3-main.PNG"
import dImg4 from "../assets/designs/d-img4-main.PNG"
import dImg5 from "../assets/designs/d-img5-main.PNG"
import dImg6 from "../assets/designs/d-img6-main.PNG"
import dImg7 from "../assets/designs/d-img7-main.PNG"
import dImg8 from "../assets/designs/d-img8-main.PNG"
import dImg9 from "../assets/designs/d-img9-main.PNG"
import Sec1 from './sec1';
import Sec2 from './sec2';





gsap.registerPlugin(ScrollTrigger);




function Ourwork() {
const themes = useRef(null)
const textRef = useRef(null)
useEffect(()=>{
  
// Add a delay before forcing a refresh
setTimeout(() => {
  ScrollTrigger.refresh();
}, 250); // Delay helps layout fully settle



  gsap.to(themes.current, {
    scrollTrigger: {
      trigger: themes.current,
  start: "0px 100%", // Trigger animation when top of the box is 80% from the top of the viewport
  end: "20px 60%", // End the animation when top of the box is 30% from the top of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
y: window.innerWidth > 515 ? "-500px" : "0px",
ease: 'none',
// duration: 2,
});






    // First GSAP animation (text scaling up and color change)
    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: '.ourWorkTitle', // The parent container that triggers the animation
        start: '0px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
        end: '400px 90%', // End the animation when top of the container is 25% from the top of the viewport
        scrub: 1, // Smooth scrubbing
        // markers: true, // Uncomment this to see the start and end markers
      },
      fontSize: window.innerWidth > 1060 ? "300px" : window.innerWidth > 700 ? "200px" : window.innerWidth > 460 ? "128px" :  window.innerWidth > 320 ? "74px" : "70px", // Change text color to dark golden rod
      // fontSize: window.innerWidth > 1060 ? "300px" :"200px", // Change text color to dark golden rod
      // fontSize: window.innerWidth > 700 ? "300px" :"128px", // Change text color to dark golden rod
      scale: 1.4, // Scale up the text
      ease: 'power2.out', // Smooth easing
      stagger: 0.05, // Stagger the text animation for each letter
      duration: 0.4, // Animation duration
    });




},[])


  return (
    <>
    <div id='themes' className='parent'>

  <div ref={themes} className='ourWorkParent'>
      <h1 ref={textRef} className='ourWorkTitle'>themes</h1>  

<div className='ourWorkCont'>

  <div className='ourWorkSec1'>

    <h1 className='ourWorkSecH1'> Dashboard</h1>
    <img className='ourWorkSecImg' src={dImg7} alt="" />
    {/* <p className='ourWorkSecTxt1'>Effortless<br/>Management <br/>with Our Modern<br/>Admin Dashboard</p> */}
     </div>
  <div className='ourWorkSec1'>
  <h1 className='ourWorkSecH1'> eCommerce</h1>
  <img className='ourWorkSecImg' src={dImg8} alt="" />
    {/* <p className='ourWorkSecTxt2'>Key Elements<br/>of an Effective<br/>eCommerce <br/>site</p> */}
  </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> SaaS</h1>
    <img className='ourWorkSecImg' src={dImg4} alt="" />
    {/* <p className='ourWorkSecTxt3'>Empower Your<br/>SaaS Business<br/>for Greater<br/> Impact</p> */}
    </div>
    <div className='ourWorkSec1'>

    <h1 className='ourWorkSecH1'>Dashboard</h1>
    <img className='ourWorkSecImg' src={dImg3} alt="" />
    {/* <p className='ourWorkSecTxt4'>Enhance <br/>Your Admin<br/> Experience<br/>with a Style</p> */}
    </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> eCommerce</h1>
    <img className='ourWorkSecImg' src={dImg5} alt="" />
    {/* <p className='ourWorkSecTxt5'>modern<br/>eCommerce<br/>for your online<br/>market products</p> */}
    </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> SaaS</h1>
    <img className='ourWorkSecImg' src={dImg1} alt="" />
    {/* <p className='ourWorkSecTxt6'>Unlock<br/>the Potential<br/>of Your SaaS<br/>Business</p> */}
    </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> Dashboard</h1>
    <img className='ourWorkSecImg' src={dImg6} alt="" />
    {/* <p className='ourWorkSecTxt7'>Modern Admin Dashboards<br/>for Streamlined<br/>Business Insights</p> */}
    </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> eCommerce</h1>
    <img className='ourWorkSecImg' src={dImg9} alt="" />
    {/* <p className='ourWorkSecTxt9'>Crafting<br/>the Perfect<br/>eCommerce<br/>Experience</p> */}
    </div>
    <div className='ourWorkSec1'>
    <h1 className='ourWorkSecH1'> SaaS</h1>
    <img className='ourWorkSecImg' src={dImg2} alt="" />
    {/* <p className='ourWorkSecTxt8'>Take Your <br/>SaaS Business<br/>to New<br/> Heights</p> */}
    </div>

  </div>
  <a className='scroll' href="#contantUs">
  <button className='buttonIntro2'>تواصل معنا</button>
  </a>
  </div>
  <Sec1  themes={themes}/>

  </div>

    </>
  )
}

export default Ourwork
