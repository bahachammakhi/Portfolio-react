import React,{Component} from "react"
import me from '../img/me.jpg'; // Tell Webpack this JS file uses this image 
class SideNav extends Component {
    
    
    
      render() {
        return (
          <div>
           
             
              
              <div class="sidenav">
                 <img src={me} alt="me" className="me rounded"/> 
                 <h4 className=" ml-3 mt-3  headernav">Baha Chammakhi</h4>
                <ul className="list-unstyled">
                    <li className="nav-item"><a className=" ab font-weight-light" href='#portfolio'><i class="fas fa-briefcase fa-xs mr-3"></i>PORTFOLIO</a></li>
                    <li className="nav-item"> <a className=" ab font-weight-light" href='#about'><i class="fas fa-user-alt fa-xs mr-3"></i>ABOUT</a></li>
                    <li className="nav-item"><a className=" ab font-weight-light" href='#contact'><i class="fas fa-envelope fa-xs mr-3"></i>CONTACT</a></li>
                    <li className="nav-item mt-3 ml-3" >
                    <a href="https://www.instagram.com/bahachammakhi" target="blank"><i className="fab  fa-instagram fa-2x ml-3"></i></a>
                    <a href="https://github.com/bahachammakhi" target="blank"><i className="fab fa-github fa-2x ml-3"></i></a> 
                    <a href="https://www.linkedin.com/in/baha-chammakhi/" target="blank"><i className="fab fa-linkedin fa-2x ml-3"></i></a>
                    <a href="https://www.facebook.com/Bahachammakhi2" target="blank"><i className="fab fa-facebook fa-2x ml-3"></i></a>
                   </li>
                </ul>
                     
                
                 
                     
  
</div>
            
          </div>
        );
    }
}

export default SideNav