import React from 'react'
import SideNav from "./components/SideNav"
import Portfolio from "./components/Portfolio"
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import "./App.css"
import "./bootstrap-4.3.1-dist/css/bootstrap.min.css"
import port from "./img/port1.PNG"
import cyj from "./img/cyj1.PNG"
import note from "./img/note.PNG"
import Navbar from './components/Navbar'
import Contact from "./components/Contact"
import MessengerCustomerChat from 'react-messenger-customer-chat';
class App extends React.Component{
  constructor(){
    super()
    this.state ={
      prevScrollpos : window.pageYOffset,
      portfolio :"animate slideInUp",
      about :"",
      contact :"d-none"
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {

    const {prevScrollpos} = this.state
    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos : currentScrollPos,
      visible : visible
    })
  if (prevScrollpos > 300) {this.setState({portfolio:"",about : "animated slideInUp slow",contact:""})}
  else if (prevScrollpos > 1000) {this.setState({about:"",contact:"animated slideInUp slow",portfolio:""})}

  }
  render(){
    
    return(
     <div className="wrapper  ">
       <div className="desktop-only" >  <SideNav /></div>
       <div className="mobile-only"><Navbar /></div>
       <div>
   
  </div>
<div className="content animated  slideInLeft slower  bg1">
<h3 className="header ml-3 mt-3 ml port">Portfolio</h3>
                <hr className="hr ml"/>
              <div className={this.state.portfolio} >
                <div id="portfolio" className=" card-deck portfolio1">
                  <div className="col-sm-6 animated pulse infinite slower ">
                    <Portfolio 
                    title="Choose your job" 
                    prag="A website that describes IT JOBS well designed and well optimized "  
                    img={cyj}
                    timeUpdated="19/06/2019"
                    link="https://bahachammakhi.github.io/chooseyourjob"
                    /></div>
<div className="col-sm-6  animated pulse infinite slower">
  <Portfolio 
title="Portfolio website" 
prag="A portfolio-website Portfolio section,about section , contact section , footer,welcome page and some nice animations" 
 img={port}
 timeUpdated="19/06/2019"
 link="https://bahachammakhi.github.io/Portfolio"
 /></div>
 <div className="col-sm-6 card-center animated pulse infinite slower">
  <Portfolio 
title="Note WEB application" 
prag="A portfolio-website Portfolio section,about section , contact section , footer,welcome page and some nice animations" 
 img={note}
 timeUpdated="19/06/2019"
 link="https://my-note-app-8edfd.firebaseapp.com/"
 /></div>
                </div> </div>
                <hr/>
                <div className={this.state.about} >
                <div className="ml" id="about">
                  <AboutMe />
                </div> </div>
                <hr className="hr ml" />
                <div className={this.state.contact}>
                <div className="ml-5" id="contact">
                <Contact />
                </div></div>
<div className="mt-3"><Footer /> </div>         
</div>

     </div>
    )
  }
}
export default App 