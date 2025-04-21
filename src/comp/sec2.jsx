import { useState , useEffect ,useRef } from 'react'
import "../css/sec2.css"
import test6 from '../assets/icons8-positive-dynamic-64.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Sec3 from './sec3';

gsap.registerPlugin(ScrollTrigger);


function Sec2() {


  const textRef = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)

  useEffect(()=>{


    gsap.to(box1.current, {
      scrollTrigger: {
        trigger: box1.current,
        start: '-1240px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
        end: '-1000px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers:true// Show start and end markers (for debugging)
  },
  // y: "3400px", // Animate the box 300px to the right
  // y: "2300px", // Animate the box 300px to the right
  x: "-90px",
  ease: 'none',
  // duration: 2,
  });

  gsap.to(box2.current, {
    scrollTrigger: {
      trigger: box2.current,
      start: '-1240px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
      end: '-1000px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: "-90px",
ease: 'none',
// duration: 2,
});

gsap.to(box3.current, {
  scrollTrigger: {
    trigger: box3.current,
    start: '-1240px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '-1000px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: "-90px",
ease: 'none',
// duration: 2,
});

gsap.to(box4.current, {
  scrollTrigger: {
    trigger: box4.current,
    start: '-1240px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '-1000px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: "-90px",
ease: 'none',
// duration: 2,
});


  gsap.to(textRef.current, {
    scrollTrigger: {
      trigger: textRef.current,
  start: "-500px 90%", // Trigger animation when top of the box is 80% from the top of the viewport
  end: "60px 90%", // End the animation when top of the box is 30% from the top of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
y: "960px",
ease: 'none',
// duration: 2,
});


  },[])

  return (
    <>
    <div className='sec2Parent'>

    <div className='sec2TitleCont'>

    <h1 ref={textRef} className='sec2Title'>What makes us stand out?</h1>

    </div>

    <div className='sec2BoxsParent'>

    <div ref={box1} className='sec2Box1'>
    <h1 className='sec2Box1Text1'>01</h1>
    <h1 className='sec2Box1Text2'>Unique Designs That Reflect Your Brand</h1>
    <p className='sec2Box1Tex3'>Too many websites look the same—and are just as forgettable. We craft visually stunning, custom designs that capture your brand’s personality and leave a lasting impression.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box2} className='sec2Box2'>
    <h1 className='sec2Box1Text1'>02</h1>
    <h1 className='sec2Box1Text2'>Lightning-Fast, Secure & Responsive</h1>
    <p className='sec2Box1Tex3'>Our websites are built for performance—optimized for speed, mobile-ready, and backed by secure, reliable hosting for a smooth experience on any device.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box3} className='sec2Box3'>
    <h1 className='sec2Box1Text1'>03</h1>
    <h1 className='sec2Box1Text2'>Seamless Experience, Flawless Functionality</h1>
    <p className='sec2Box1Tex3'>We sweat the small stuff so you don’t have to. From pixel-perfect layouts to intuitive navigation, we ensure everything works smoothly and looks great.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box4} className='sec2Box4'>
    <h1 className='sec2Box1Text1'>04</h1>
    <h1 className='sec2Box1Text2'>Easy Updates, No Tech Headaches</h1>
    <p className='sec2Box1Tex3'>You shouldn’t need a developer for every little change. Our websites come with an intuitive backend, giving you full control to edit and grow on your terms.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>

    </div>
    
    <Sec3/>
  </div>
    </>
  )
}

export default Sec2
