import React from 'react';
import "./Portfolio.css";
import youtubeclone from "../IMages/youtubeclone.jpg";
import wheaterapp from '../IMages/wheaterapp.png';
import university from "../IMages/univerity.png";
import cars from "../IMages/cars.png";
import tictactoe from "../IMages/tictactoe.png";


export default function Portfolio() {
  return (
    <div className='portfolio'>

             <div className="project">

                <img src={youtubeclone} alt=""></img>
                            <h2>Youtube clone</h2>
                            <a href="https://youtube-clone-red-nine.vercel.app/" >visit website</a>
                </div>

                <div className="project">

                <img src={wheaterapp} alt=""></img>
                            <h2>Wheahter App</h2>
                            <a href="https://tarekshenawy.github.io/wheaterapp/"   >visit website</a>
                </div>
                <div className="project">

                <img src={university} alt="University"></img>
                            <h2>University Website</h2>
                            <a href="https://tarekshenawy.github.io/university-website/" >visit website</a>
                </div>

                <div className="project">

                      <img src={cars} alt="Cars"></img>
                            <h2> LandingPage</h2>
                            <a href="https://tarekshenawy.github.io/simple-landingpage/" >visit website</a>
                </div>
                <div className="project">

                  <img src={tictactoe} alt="Cars"></img>
                        <h2>Tic Tac Toe Game</h2>
                        <a href="https://tarekshenawy.github.io/Tic-tac-toe-game/" >visit website</a>
                  </div>
                

              
    
    </div>
  )
}
