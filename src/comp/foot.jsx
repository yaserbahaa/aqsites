import { useState , useEffect ,useRef } from 'react'
import "../css/foot.css"
import facebook from '../assets/icons8-facebook-48.png'
import whatsapp from '../assets/icons8-whatsapp-48.png'
import tiktok from '../assets/icons8-tiktok-48.png'
import instagram from '../assets/icons8-instagram-logo-48.png'
import logo from "../assets/aq logo 7.JPG"

function Foot(ref) {

  return (
    <>
    <div id='contantUs' className='footParent'>
      <h1 className='footTitle'>Contact Us</h1>

      <div ref={ref.sectionRef} className='footContant1Cont'>
        <p className='footContant1Txt'>through the following options</p>


        <a style={{textDecoration: "none"}} href="https://api.whatsapp.com/send/?phone=201555330603&text&type=phone_number&app_absent=0"> 
        <div className='footContant1'>whatsapp <img className='footContant1Img' src={whatsapp} alt="" /></div>
        </a>

        <a style={{textDecoration: "none"}} href="https://www.instagram.com/aq_sites?igsh=MTliZ3U2NWo2M2Q3dQ%3D%3D&utm_source=qr"> 
        <div className='footContant1'>instagram <img className='footContant1Img' src={instagram} alt="" /></div>
        </a>

        <a style={{textDecoration: "none"}} href="https://www.tiktok.com/@aq.sites?_t=ZS-8vyeNEM8GJD&_r=1"> 
        <div className='footContant1'>tiktok <img className='footContant1Img' src={tiktok} alt="" /></div>
        </a>


        <h1></h1>
      </div>

      <div className='footContant2Cont'>
        <div className='footContant2TitleCont'>
        <img className='footContant2Img' src={logo} alt="" />
        <h1 className='footContant2Title'>sites</h1>
        </div>

        <div className='footContant2MiniNbCont'>
        <a className='scroll' href="#themes">
          <h1 className='footContant2MiniNb1'>WEB DESIGN</h1>
          </a>

          <a className='scroll' href="#dev">
          <h1 className='footContant2MiniNb2'>DEVELOPMENT</h1>
          </a>

          <a style={{textDecoration: "none"}} href="https://api.whatsapp.com/send/?phone=201555330603&text&type=phone_number&app_absent=0"> 
          <h1 className='footContant2MiniNb3'>CONTACT US</h1>
          </a>

        </div>

        <div  className='footContant2IconsContParent'>
          <div className='footContant2Icons1Cont1'>
          <a style={{textDecoration: "none"}} href="https://api.whatsapp.com/send/?phone=201555330603&text&type=phone_number&app_absent=0"> 
            <img className='footContant2Icons1Img' src={whatsapp} alt="" />
            </a>
          </div>

          <div className='footContant2Icons1Cont1'>

          <a style={{textDecoration: "none"}} href="https://www.tiktok.com/@aq.sites?_t=ZS-8vyeNEM8GJD&_r=1"> 
            <img className='footContant2Icons1Img' src={tiktok} alt="" />
            </a>

          </div>

          <div className='footContant2Icons1Cont1'>
            
          <a style={{textDecoration: "none"}} href="https://www.instagram.com/aq_sites?igsh=MTliZ3U2NWo2M2Q3dQ%3D%3D&utm_source=qr"> 
            <img  className='footContant2Icons1Img' src={instagram} alt="" />
            </a>

          </div>

        </div>



      </div>
    </div>
    </>
  )
}

export default Foot
