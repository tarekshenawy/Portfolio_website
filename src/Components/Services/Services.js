import React from 'react';
import "./Services.css";
import webdevelopment from "../IMages/webdevelopment.png";
import responsive from "../IMages/responsive.webp";
import creative from "../IMages/creative.png";
import webideas from "../IMages/webideas.png";
import support from "../IMages/support.png";

export default function Services() {
  return (
    <div className='services'>
        <div className='card'>
            <img src={webdevelopment} alt=''></img>
                    <h3>web development</h3>
                        <p>I can build user interface of 
                            website using html and css and
                             javascript and React js, ..etc.</p>
        </div>
        <div className='card'>
        <img src={responsive} alt=''></img>
                    <h3> Responsive Design</h3>
                        <p>your website will be 100% responsive for all devices. </p>
        </div>
        <div className='card'>
        <img src={creative} alt=''></img>
                    <h3>Creative Design</h3>
                        <p>I can edit and create new content to make website much better.</p>
        </div>
        <div className='card'>
        <img src={webideas} alt=''></img>
                    <h3>web ideas</h3>
                        <p>I could turn your ideas into a real projects with high quality.</p>
        </div>
        <div className='card'>
        <img src={support} alt=''></img>
                    <h3>Support</h3>
                        <p>support is available if you want any changes in webstie after delvering it. </p>
        </div>


    </div>
  )
}
