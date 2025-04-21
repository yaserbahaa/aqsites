import { useState , useEffect ,useRef, } from 'react'
import React from 'react';

import "../css/intro.css"


function Intro(){

  return (
    <div className='introCon'>
      <h3 className='introh3'>نحن نصمم ونطور</h3>
      <h1 className='introh1'>مواقع تسهم في</h1>
      <h1 className='introh1-2'>نمو علامتك التجارية</h1>
      <h4 className='introh4'>استعرض ما أنجزناه وتعرف على ما يمكننا تقديمه لك</h4>

      <div className='buttonIntroCon'>
      <a className='scroll' href="#contantUs">
        <button className='buttonIntro'>تواصل معنا</button>
        </a>
      </div>

    </div>
    
  );
};

export default Intro;