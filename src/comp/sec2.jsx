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
        trigger: ".sec2Box1",
        start: '0px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
        end: '100px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
    scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    markers:true// Show start and end markers (for debugging)
  },
  // y: "3400px", // Animate the box 300px to the right
  // y: "2300px", // Animate the box 300px to the right
  x: window.innerWidth > 515 ? "-90px" : "0px",  
  ease: 'none',
  // duration: 2,
  });




  gsap.to(box2.current, {
    scrollTrigger: {
      trigger: box2.current,
      start: '0px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
      end: '-100px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: window.innerWidth > 515 ? "-90px" : "0px",
ease: 'none',
// duration: 2,
});

  

gsap.to(box3.current, {
  scrollTrigger: {
    trigger: box3.current,
    start: '0px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '-100px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: window.innerWidth > 515 ? "-90px" : "0px",
ease: 'none',
// duration: 2,
});




gsap.to(box4.current, {
  scrollTrigger: {
    trigger: box4.current,
    start: '0px 90%', // Trigger the animation when 20% from the top of the container hits 50% of the viewport
    end: '-100px 90%', // End the animation when top of the container is 25% from the top of the viewportop of the viewport
scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
// markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
x: window.innerWidth > 515 ? "-90px" : "0px",

ease: 'none',
// duration: 2,
});


  gsap.to(textRef.current, {
    scrollTrigger: {
      trigger: textRef.current,
  start: "0px 90%", // Trigger animation when top of the box is 80% from the top of the viewport
  end: "800px 90%", // End the animation when top of the box is 30% from the top of the viewport
  scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  // markers:true// Show start and end markers (for debugging)
},
// y: "3400px", // Animate the box 300px to the right
// y: "2300px", // Animate the box 300px to the right
y: "960px",
ease: 'none',
// duration: 2,
});




const anim = gsap.to(box1.current, {
  scrollTrigger: {
    trigger: box1.current,
    start: "0px 90%",
    end: "100px 90%",
    scrub: 1,
    markers: true,
  },
  x: window.innerWidth > 515 ? "-90px" : "0px",
  ease: "none",
});

// Add a delay before forcing a refresh
setTimeout(() => {
  ScrollTrigger.refresh();
}, 250); // Delay helps layout fully settle

return () => {
  anim.kill();
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

  },[])



  return (
    <>
    <div className='sec2Parent'>
    <h1 className='mobileTitle'>What makes us stand out?</h1>
    <div className='sec2TitleCont'>

    <h1 ref={textRef} className='sec2Title'>What makes us stand out?</h1>

    </div>

    <div className='sec2BoxsParent'>

    <div ref={box1} className='sec2Box1'>
    <h1 className='sec2Box1Text1'>01</h1>
    <h1 className='sec2Box1Text2'>تصميمات فريدة تعكس علامتك التجارية</h1>
    <p className='sec2Box1Tex3'>تتشابه العديد من المواقع الإلكترونية، بل وتكاد تُنسى بسهولة. نصمم تصاميم بصرية خلابة ومخصصة، تعكس شخصية علامتك التجارية وتترك انطباعًا دائمًا.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box2} className='sec2Box2'>
    <h1 className='sec2Box1Text1'>02</h1>
    <h1 className='sec2Box1Text2'>سريع للغاية وآمن وسريع الاستجابة</h1>
    <p className='sec2Box1Tex3'>تم تصميم مواقع الويب الخاصة بنا لتحقيق الأداء الأمثل - فهي مُحسّنة للسرعة وجاهزة للاستخدام على الأجهزة المحمولة ومدعومة باستضافة آمنة وموثوقة لتجربة سلسة على أي جهاز.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box3} className='sec2Box3'>
    <h1 className='sec2Box1Text1'>03</h1>
    <h1 className='sec2Box1Text2'>تجربة سلسة، وظائف خالية من العيوب</h1>
    <p className='sec2Box1Tex3'>نهتم بأدق التفاصيل حتى لا تضطر أنت لذلك. من تصميمات دقيقة إلى تصفح سلس، نضمن لك سلاسة وجمالاً في كل شيء.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>


    <div ref={box4} className='sec2Box4'>
    <h1 className='sec2Box1Text1'>04</h1>
    <h1 className='sec2Box1Text2'>تحديثات سهلة، لا مشاكل تقنية</h1>
    <p className='sec2Box1Tex3'>لا تحتاج إلى مطور لكل تغيير بسيط. مواقعنا الإلكترونية مزودة بواجهة خلفية سهلة الاستخدام، مما يمنحك تحكمًا كاملاً في التعديل والتطوير وفقًا لشروطك.</p>
    <img className='sec2Box1Icon ' src={test6} />
    </div>

    </div>
    
    <Sec3/>
  </div>
    </>
  )
}

export default Sec2
