import { useState , useEffect ,useRef } from 'react'
import "../css/home.css"
import Navbar from './navbar'
import Intro from './intro'
import Ourwork from './ourwork'
import Sec1 from './sec1'



function Home() {
  const sectionRef = useRef(null);

  return (
    <>
        <Navbar/>

    <div className='stickHome'>
    <Intro ref={sectionRef}/>
    </div>
    <Ourwork ref={sectionRef}/>
    </>
  )
}

export default Home
