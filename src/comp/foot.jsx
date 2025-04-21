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
        <div className='footContant1'>whatsapp <img className='footContant1Img' src={whatsapp} alt="" /></div>
        <div className='footContant1'>instagram <img className='footContant1Img' src={instagram} alt="" /></div>
        <div className='footContant1'>facebook <img className='footContant1Img' src={facebook} alt="" /></div>
        <div className='footContant1'>tiktok <img className='footContant1Img' src={tiktok} alt="" /></div>


        <h1></h1>
      </div>

      <div className='footContant2Cont'>
        <div className='footContant2TitleCont'>
        <img className='footContant2Img' src={logo} alt="" />
        <h1 className='footContant2Title'>sites</h1>
        </div>

        <div className='footContant2MiniNbCont'>
          <h1 className='footContant2MiniNb1'>WEB DESIGN</h1>
          <h1 className='footContant2MiniNb2'>DEVELOPMENT</h1>
          <h1 className='footContant2MiniNb3'>CONTACT US</h1>
        </div>

        <div  className='footContant2IconsContParent'>
          <div className='footContant2Icons1Cont1'>
            <img className='footContant2Icons1Img' src={whatsapp} alt="" />
          </div>

          <div className='footContant2Icons1Cont1'>
            <img className='footContant2Icons1Img' src={facebook} alt="" />
          </div>

          <div className='footContant2Icons1Cont1'>
            <img  className='footContant2Icons1Img' src={instagram} alt="" />
          </div>

          <div className='footContant2Icons1Cont1'>
            <img  className='footContant2Icons1Img' src={tiktok} alt="" />
          </div>
        </div>



      </div>
    </div>
    </>
  )
}

export default Foot
