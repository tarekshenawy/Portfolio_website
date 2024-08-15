import React from 'react';
import "./Skills.css";
import html from "../IMages/html.png";
import css from "../IMages/css.png";
import javascripticon from "../IMages/javascript.png";
import git from "../IMages/git.png";
import github from "../IMages/github.png";

import reacticon from "../IMages/react.png";
import bootstrap from "../IMages/bootstrap.png";

export default function Skills() {
  return (
    <div className='skills'>

                <div class="item">
                    <img src={html} alt="html" ></img>
                    <h3>html</h3>
                </div>

                <div class="item">
                    <img src={css} alt="css"></img>
                    <h3>CSS</h3>
                </div>

                <div class="item">
                    <img src={javascripticon} alt="javascript"></img>
                    <h3>javascript</h3>
                </div>

                <div class="item">
                    <img src={git} alt="git"></img>
                    <h3>git</h3>
                </div>

                <div class="item">
                    <img src={github} alt="github"></img>
                    <h3>github</h3>
                </div>

                <div class="item">
                    <img src={bootstrap} alt="bootstrap"></img>
                    <h3>Bootstrap</h3>
                </div>

                <div class="item">
                    <img src={reacticon} alt="React js"></img>
                    <h3>React js</h3>
                </div>

           
                
               
        
    </div>
  )
}
