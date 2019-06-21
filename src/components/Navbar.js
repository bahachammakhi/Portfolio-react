import React from "react"
import logo from "../img/Logo.PNG"
class Navbar extends React.Component{
    render(){
        return(
   <div>
     
     <nav className="navbar navbar-expand navbar-dark dark">
 <img className="logo navbar-brand" src={logo} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#portfolio">PORTFOLIO <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">ABOUT</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">CONTACT</a>
      </li>
    </ul>
  
</nav>
 
   </div>
        )
    }
}
export default Navbar