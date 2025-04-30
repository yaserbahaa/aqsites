import { useState , useEffect ,useRef } from 'react'
import "../css/tec.css"
import nodejs from '../assets/icons8-nodejs-96.png'
import wordpress from '../assets/icons8-wordpress-96.png'
import react from '../assets/icons8-react-96.png'
import mongodb from '../assets/icons8-mongodb-96.png'
import express from '../assets/icons8-express-js-96.png'
import figma from '../assets/icons8-figma-96.png'
import Foot from './foot'
import "../App.css"


function Tec() {

  return (
    <>
  <div className='tecParent'>
    <div className='tecCont'> 
  <h1 className='tecTitle'>Technologies we use</h1>


  <div className='tecContantCont'>

  
    <div className='tecContant1_s'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img2' src={nodejs} alt="" />
      {/* <h1 className='tecContant1Title'>NodeJs</h1> */}
      </div>
      <p className='tecContant1Txt_s'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>

    <div className='tecContant1'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img' src={wordpress} alt="" />
      <h1 className='tecContant1Title'>WordPress</h1>
      </div>
      <p className='tecContant1Txt'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>

    <div className='tecContant1'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img' src={react} alt="" />
      <h1 className='tecContant1Title'>React</h1>
      </div>
      <p className='tecContant1Txt'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>

    <div className='tecContant1'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img' src={mongodb} alt="" />
      <h1 className='tecContant1Title'>MongoDb</h1>
      </div>
      <p className='tecContant1Txt'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>

    <div className='tecContant1'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img' src={express} alt="" />
      <h1 className='tecContant1Title'>Express</h1>
      </div>
      <p className='tecContant1Txt'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>

    <div className='tecContant1'>
      <div className='tecContant1TitleCont'>
      <img className='tecContant1Img' src={figma} alt="" />
      <h1 className='tecContant1Title'>Figma</h1>
      </div>
      <p className='tecContant1Txt'>Our design process in Figma lets us create and iterate on your website's design in real-time, ensuring you get exactly the look and functionality you envision.</p>
    </div>


    
  </div>
  </div>

  <Foot />
  </div>

    </>
  )
}

export default Tec
