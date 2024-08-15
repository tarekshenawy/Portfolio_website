import React, { useState } from 'react';
import "./Navbar.css";
import menuicon from "../IMages/menu-icon.png";
import { Link } from 'react-scroll';

export default function Navbar() {

  const[mobileicon,setMobileicon]=useState(false);
  function hidenav(){
    mobileicon ? setMobileicon(false):setMobileicon(true)

  }
  return (
    <div>
        <nav className='container'>
            <h2>Tarek El Shenawy</h2>
            <ul className = {`${mobileicon ? "":"hide"}`}>
                <Link to="home" smooth={true} offset={-150} duration={500}><li>Home</li></Link>
                <Link to="about" smooth={true} offset={-200} duration={500}><li>About</li></Link>
                <Link to="services" smooth={true} offset={-200} duration={500}><li>Services</li></Link>
                <Link to="portfolio" smooth={true} offset={-200} duration={500}><li>Portfolio</li> </Link>
                <Link to="contact" smooth={true} offset={-170} duration={500}><li>Contact</li></Link>
            </ul>
            <img src={menuicon} alt='' className='menuicon' onClick={hidenav}></img>
        </nav>
    </div>
  )
}
