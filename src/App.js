import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Title from "./Components/Title/Title";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Home/>
     <Title Title="About Me"/>
     <About/>
     <Title Title="Skills and Abilites"/>
     <Skills/>
     <Title Title="My Services"/>
     <Services/>
     <Title Title="My Portfolio"/>
     <Portfolio/>
     <Title Title="Contact me"/>
     <Contact/>
     <Footer/>


     </div>
      
   
   
    </div>
  );
}

export default App;
