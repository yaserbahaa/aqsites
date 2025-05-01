import { useState , useEffect ,useRef } from 'react'
import "../css/sec3.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import test from '../assets/servicio-de-soporte-tecnico-5788136-4840227.webp'
import test2 from '../assets/strategic-digital-marketing.webp'
import test3 from '../assets/SEO-Services-banner.svg'
import test4 from '../assets/You-need-a-functional-website.webp'

import Tec from './tec';

gsap.registerPlugin(ScrollTrigger);


function Sec3() {
  const title = useRef(null)
  const contant = useRef(null)
  const contantImg = useRef(null)
  const progress = useRef(null);

  const contant2 = useRef(null)
  const contantImg2 = useRef(null)
  const progress2 = useRef(null);


  const contant3 = useRef(null)
  const contantImg3 = useRef(null)
  const progress3 = useRef(null);


  const contant4 = useRef(null)
  const contantImg4 = useRef(null)
  const progress4 = useRef(null);


  useEffect(()=>{



    gsap.to(title.current, {
      scrollTrigger: {
        trigger: title.current,
        start: '-1240px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
        end: '-600px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers:true// Show start and end markers (for debugging)
  },
  // y: "3400px", // Animate the box 300px to the right
  // y: "2300px", // Animate the box 300px to the right

  fontSize: innerWidth > 515 ? "240px" : "50px",
  ease: 'none',
  // duration: 2,
  });


  gsap.to(contant.current, {
    scrollTrigger: {
      trigger: contant.current,
      start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
      end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

gap:"0px",
ease: 'none',
// duration: 2,
});

gsap.to(contantImg.current, {
  scrollTrigger: {
    trigger: contantImg.current,
    start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

gsap.to(progress.current, {
  scrollTrigger: {
    trigger: progress.current,
    start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

gsap.to(contant2.current, {
  scrollTrigger: {
    trigger: contant2.current,
    start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

gap:"45px",
ease: 'none',
// duration: 2,
});

gsap.to(contantImg2.current, {
scrollTrigger: {
  trigger: contantImg2.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

gsap.to(progress2.current, {
scrollTrigger: {
  trigger: progress2.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});



gsap.to(contant3.current, {
  scrollTrigger: {
    trigger: contant3.current,
    start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

gap:"0px",
ease: 'none',
// duration: 2,
});

gsap.to(contantImg3.current, {
scrollTrigger: {
  trigger: contantImg3.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

gsap.to(progress3.current, {
scrollTrigger: {
  trigger: progress3.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});



gsap.to(contant4.current, {
  scrollTrigger: {
    trigger: contant4.current,
    start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

gap:"45px",
ease: 'none',
// duration: 2,
});

gsap.to(contantImg4.current, {
scrollTrigger: {
  trigger: contantImg4.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '100px 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

gsap.to(progress4.current, {
scrollTrigger: {
  trigger: progress4.current,
  start: '-400px 95%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
  end: '-100 95%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right

width:"100%",
ease: 'none',
// duration: 2,
});

  },[])

  return (
    <>
    <div id='dev' className='sec3Parent'>
    <h1 ref={title} className='sec3Title'>4 Steps to<br/> launch your <br/>website
    </h1>
    <div className='sec3ContantContParent'>

    <div ref={contant} className='sec3Contant1Cont'>
      <div className='sec3Contant1Part1'>
    <h1 className='sec3ContantNum'>01</h1>
    <h1 className='sec3ContantTitle'>Explore  &<br/> Align</h1>
    <p className='sec3ContantTxt'>We kick things off by getting to know your business, audience, and goals—laying the foundation for a focused and effective project.</p>
    <div className='progressCont'>
      <span ref={progress} className='progress'></span>
    </div>

    </div>



    <div className='sec3Contant1ContPart2'> 
      <img className='sec3Contant1ContPart2Img' ref={contantImg} src={test} alt="" />
      </div>
    </div>

    <div ref={contant2} className='sec3Contant1Cont'>

    <div className='sec3Contant1ContPart2'> 
      <img className='sec3Contant2ContPart2Img' ref={contantImg2} src={test4} alt="" />
      </div>

      <div className='sec3Contant2Part1'>
    <h1 className='sec3ContantNum2'>02</h1>
    <h1 className='sec3ContantTitle2'>Design  &<br/> Refine</h1>
    <p className='sec3ContantTxt2'>Our creative team crafts a one-of-a-kind design that captures your brand’s personality. We collaborate with you to fine-tune every detail.</p>
    <div className='progressCont2'>
      <span ref={progress2} className='progress2'></span>
    </div>

    </div>


    </div>


    <div ref={contant3} className='sec3Contant1Cont'>
      <div className='sec3Contant3Part1'>
    <h1 className='sec3ContantNum3'>03</h1>
    <h1 className='sec3ContantTitle3'>Build  &<br/> Test</h1>
    <p className='sec3ContantTxt3'>We turn ideas into a fully functional website—built to perform across all devices and rigorously tested for speed, security, and usability.</p>
    <div className='progressCont3'>
      <span ref={progress3} className='progress3'></span>
    </div>

    </div>


    <div className='sec3Contant1ContPart2'> 
      <img className='sec3Contant3ContPart2Img' ref={contantImg3} src={test3} alt="" />
      </div>
    </div>


    <div ref={contant4} className='sec3Contant1Cont'>

    <div className='sec3Contant1ContPart2'> 
      <img className='sec3Contant4ContPart2Img' ref={contantImg4} src={test2} alt="" />
      </div>

      <div className='sec3Contant4Part1'>
    <h1 className='sec3ContantNum4'>04</h1>
    <h1 className='sec3ContantTitle4'>Go Live &<br/> Grow</h1>
    <p className='sec3ContantTxt4'>With everything in place, we launch your site and provide the tools and support you need to keep evolving, updating, and scaling with ease.</p>
    <div className='progressCont4'>
      <span ref={progress4} className='progress4'></span>
    </div>

    </div>




    </div>
    <a className='scroll' href="#contantUs">
    <button className='buttonIntro4'>تواصل معنا</button>
    </a>
    </div>
    <Tec />
    </div>
    </>
  )
}

export default Sec3
