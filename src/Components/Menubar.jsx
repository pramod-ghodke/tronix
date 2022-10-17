import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import '../App.css';




const Menubar = () => {
  function setnav(){
    const mobilenav = document.querySelector(".mobile-nav");
    const toggle = document.querySelector(".mobile-nav-toggle");
  
    const visibility = mobilenav.getAttribute('data-visible' );
    if(visibility ==="false"){
        mobilenav.setAttribute("data-visible" , true);
        toggle.setAttribute("aria-expanded", true);
        document.querySelector("body").style.overflow='hidden';
    }
    else if(visibility === "true"){
        mobilenav.setAttribute("data-visible" , false);
        toggle.setAttribute("aria-expanded", false);
        document.querySelector("body").style.overflow='auto';
        
    }
  }
  return (

    
   
    <nav>
    <LinkContainer to="/"><a href="" className="logo">Tronix<span>365</span></a></LinkContainer>
    <button className="mobile-nav-toggle" aria-controls='selectNav' aria-expanded="false"  onClick={setnav}>
        <span></span>
    </button>
 
    <ul className="lg-nav">
    <li><LinkContainer to="/"><a href="" className="active">HOME</a></LinkContainer></li>
    <li><LinkContainer to="/blogs"><a href="" >BLOGS</a></LinkContainer></li>
    <li><LinkContainer to="/about"><a href="" >ABOUT US</a></LinkContainer></li>
    <li><LinkContainer to="/contact"><a  href="">CONTACT US</a></LinkContainer></li>
    </ul>

    
    <ul id="selectNav" className="mobile-nav" data-visible="false">
    <LinkContainer to="/"><li className="active"><a onClick={setnav} href="">HOME</a></li></LinkContainer>
    <LinkContainer to="/blogs"><li><a onClick={setnav} href="">BLOGS</a></li></LinkContainer>
    <li><LinkContainer to="/about"><a href="">ABOUT</a></LinkContainer></li>
    <LinkContainer to="/contact"><li><a onClick={setnav} href="">CONTACT</a></li></LinkContainer>
    </ul>
</nav>



  )
}

export default Menubar;
