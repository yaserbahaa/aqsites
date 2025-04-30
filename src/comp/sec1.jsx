import { useState , useEffect ,useRef } from 'react'
import "../css/sec1.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import test from '../assets/Remove background project.png'
import test2 from '../assets/strategic-digital-marketing.webp'
import test3 from '../assets/You-need-a-functional-website.webp'
import test4 from '../assets/icons8-multiple-devices-64.png'
import test5 from '../assets/icons8-artificial-intelligence-64.png'
import test6 from '../assets/icons8-positive-dynamic-64.png'
import Sec2 from './sec2';



gsap.registerPlugin(ScrollTrigger);

function Sec1() {
  const textRef = useRef(null)
  const sec1Ref = useRef(null)

  useEffect(()=>{


    gsap.to(sec1Ref.current, {
      scrollTrigger: {
        trigger: sec1Ref.current,
    start: "-5010px 100%", // Trigger animation when top of the box is 80% from the top of the viewport
    end: "-5000px 100%", // End the animation when top of the box is 30% from the top of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    // markers:true// Show start and end markers (for debugging)
  },
  // y: "3400px", // Animate the box 300px to the right
  // y: "2300px", // Animate the box 300px to the right
  y: "-500px",
  ease: 'none',
  // duration: 2,
  });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: '.sec1Parent', // The parent container that triggers the animation
        start: '-850px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
        end: '-550px 90%', // End the animation when top of the container is 25% from the top of the viewport
        scrub: 1, // Smooth scrubbing
        // markers: true, // Uncomment this to see the start and end markers
      },
      fontSize: '250px', // Change text color to dark golden rod
      // scale: 1.4, // Scale up the text
      ease: 'power2.out', // Smooth easing
      stagger: 0.05, // Stagger the text animation for each letter
      duration: 0.4, // Animation duration
    });

  },[])

  return (
    <>
  <div className='sec1Parent' ref={sec1Ref}>
  {/* <h1 ref={textRef} className='sec1Title'>What We do</h1>   */}
  <h1 className='sec1Title'>What We do</h1>  

  <div className='boxsParent'>

    <div className='boxsCont1'>

    <div className='box1'>
      <h1 className='boxTitle1'>Web Development</h1>
      <div className='boxImgCont1'>
      <img className='boxImg1' src={test3} alt="" />
      </div>
      <p className='boxTxt1'>نحن نبني مواقع الويب بناءً على احتياجاتك، بدءًا من الحلول المبرمجة حسب الطلب إلى منصات مثل وWordPress وأدوات عدم البرمجة.</p>

    </div>
    <div className='box2'>
    <h1 className='boxTitle2'>UI/UX</h1>
    <div className='boxImgCont2'>
      <img className='boxImg2' src={test} alt="" />
      </div>
      <p className='boxTxt2'>نقوم بتصميم مواقع الويب والتطبيقات التي تدمج بشكل سلس بين الوظائف والتصميم الحديث والتفاعلات الدقيقة.
      </p>
  </div>

  </div>

    <div className='boxsCont2'>



  <div className='box3'>
  <h1 className='boxTitle3'>Responsive design
  </h1>
  <img className='boxImg3' src={test4} alt="" />

      <p className='boxTxt3'>يضمن تصميم الويب المستجيب أن تبدو مواقع الويب وتعمل بشكل جيد على جميع الأجهزة، من أجهزة الكمبيوتر المكتبية إلى الهواتف الذكية
      </p>
  </div>

  <div className='box4'>
  <h1 className='boxTitle4'>AI Solutions
  </h1>
  <img className='boxImg4' src={test5} alt="" />

      <p className='boxTxt4'>استغل قوة الذكاء الاصطناعي لتطوير أعمالك. نقدم حلول أتمتة الذكاء الاصطناعي
      </p>

  </div>
  <div className='box5'>
    
  <h1 className='boxTitle5'>SEO
  </h1>
  <img className='boxImg5' src={test6} alt="" />


      <p className='boxTxt5'>عزّز حضورك الرقمي باستراتيجيات تحسين محركات البحث القائمة على البيانات. نعمل على تحسين موقعك الإلكتروني ليحتل مرتبةً أعلى
      </p>

</div>

</div>
<a className='scroll' href="#contantUs">
<button className='buttonIntro3'>تواصل معنا</button>
</a>
  </div>
  <Sec2 />

  </div>
    </>
  )
}

export default Sec1
