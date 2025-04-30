import { useState , useEffect ,useRef } from 'react'
import logo from "../assets/aq logo 7.JPG"
import menu from "../assets/icons8-menu-48.png"
import ContactUs from "../assets/icons8-paper-plane-ios-17-filled/icons8-paper-plane-50.png"
import devImg from "../assets/icons8-development-150.png"
import webDesin from "../assets/icons8-web-design-64.png"
import faqImg from "../assets/icons8-faq-200.png"
import "../css/navbar.css"

// import menu from "../assets/icons8-menu-48.png"
// import menu from "../assets/icons8-menu-48.png"
// import menu from "../assets/icons8-menu-48.png"




function Navbar() {
 const [Menu,Setmenu]= useState(false)
 console.log(Menu)

  return (
    <>
    <div className='navbarCon'>
      <div className='navbar'>
        <div className='logo'>
        <img className='logoImg' src={logo} alt="Logo" />
        </div>
        <div className='title'>
          <h1 className='titleH2'>sites</h1>
        </div>
        <div className='menu'>
        {/* <img className='menuImg' src={menu} alt="Logo"  onClick={ ()=> Menu === false ? Setmenu(true) : Menu === true ? Setmenu(false) : Setmenu(true)}/> */}
        <img className='menuImg' src={menu} alt="Logo"  onClick={ ()=> Setmenu(!Menu)}/>

      </div>
    { Menu ? (
      <div className='menuList'> 

      <div className='menuListCon'>

      <div className='menuListParent1'>

      <a className='scroll' href="#themes">
      <div className='menuListParent1Child1'>
       <h1 className='menuListParent1Child1H1'>WEB DESIGN</h1>
       <img  className='webDesin' src={webDesin} alt="" />
      </div>
      </a>


      <a className='scroll' href="#contantUs">
      <div className='menuListParent1Child2'>
      <img className='ContactUs' src={ContactUs} alt="" />

        <h1 className='menuListParent1Child2H1'>CONTACT US</h1>
      </div>
      </a>

      </div>


      <div className='menuListParent2'>
      <a className='scroll' href="#dev">
      <div className='menuListParent2Child1'>

        <h1 className='menuListParent2Child1H1'>DEVELOPMENT</h1>
        <img className='devImg' src={devImg} alt="" />

      </div>
    </a>


      {/* <a className='scroll' href=""> */}

      <div className='menuListParent2Child2'>
      <img className='faqImg' src={faqImg} alt=""  style={{width: "160px"}}/>
      </div>
      {/* </a> */}
      </div>

      </div>



        </div>)
      : ""}

      </div>
      </div>
    </>
  )
}

export default Navbar
