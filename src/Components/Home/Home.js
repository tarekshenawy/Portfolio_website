import React from 'react';
import "./Home.css";
import arrowdown from "../IMages/down-arrow.png";
import myprofile from "../IMages/myprofile.png";
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className='home'>
      <div className='col1'>
        <h3 className='anim'>Hello there , i'm </h3>
        <h3 className='anim'> Tarek El Shenawy</h3>
        <h2 className='anim'><span>Front-End Web Developer</span></h2>
       <div className='button anim' >
       About me
       <Link to="about" smooth={true}  offset={-200} duration={500}><img src={arrowdown} alt='' width="13px" ></img></Link>

       </div>
         

        </div>
        <div className='col2'>
         
          <img src={myprofile} className='anim' alt=''></img>

        
           

        </div>
     

      
        
      
    </div>
  )
}
