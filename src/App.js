import React from 'react'
import SideNav from "./components/SideNav"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import "./App.css"
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import port from "./img/port1.PNG"
import cyj from "./img/cyj1.PNG"
import me from "./img/me.jpg"
import Navbar from './components/Navbar'
import Contact from "./components/Contact"
class App extends React.Component{
  
  
  render(){
    
    return(
     <div className="wrapper">
       <div className="desktop-only" >  <SideNav /></div>
       <div className="mobile-only"><Navbar /></div>

<div className="content animated  slideInLeft slower ">
<h3 className="header ml-3 mt-3 ml">Portfolio</h3>
                <hr className="hr ml"/>
                <div id="portfolio" className=" card-deck portfolio1">
                  <div className="col-sm-6">
                    <Portfolio 
                    title="Choose your job" 
                    prag="A website that describes IT JOBS well designed and well optimized "  
                    img={cyj}
                    timeUpdated="19/06/2019"
                    link=""
                    /></div>
<div className="col-sm-6 ">
  <Portfolio 
title="Portfolio website" 
prag="A portfolio-website Portfolio section,about section , contact section , footer,welcome page and some nice animations" 
 img={port}
 timeUpdated="19/06/2019"
 link=""
 /></div>
 <div className="col-sm-6 card-center">
  <Portfolio 
title="Note WEB application" 
prag="A portfolio-website Portfolio section,about section , contact section , footer,welcome page and some nice animations" 
 img={me}
 timeUpdated="19/06/2019"
 link=""
 /></div>
                </div>
                <div className="ml" id="about">
                  <AboutMe />
                </div>
                <div className="ml-5" id="contact">
                <Contact />
                </div>

  <div className="mt-3"><Footer /> </div>         
</div>

     </div>
    )
  }
}
export default App 