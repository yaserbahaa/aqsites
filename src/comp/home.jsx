import { useState , useEffect ,useRef } from 'react'
import "../css/home.css"
import Navbar from './navbar'
import Intro from './intro'
import Ourwork from './ourwork'
import Sec1 from './sec1'



function Home() {

  return (
    <>
        <Navbar/>

    <div className='stickHome'>
    <Intro />
    </div>
    <Ourwork />
    </>
  )
}

export default Home
