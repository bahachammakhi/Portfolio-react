import React,{Component} from "react"
import {Collapse } from 'reactstrap';
import me from '../img/me.jpg'; // Tell Webpack this JS file uses this image 
class SideNav extends Component {
    constructor(props) {
        super(props)
      
    
       this.state = {
          collapsed: false
        }
        
      }
  
     componentWillReceiveProps(){
         if (this.state.collapsed !== this.props.collapsed){
             this.setState({
            collapsed: this.props.collapsed})
         }
        
        
     }
    
    
      render() {
        return (
          <div>
           
             
              <Collapse isOpen={!this.state.collapsed} navbar>
              <div class="sidenav">
                 <img src={me} alt="me" className="me rounded"/> 
                 <h4 className=" ml-3 mt-3  headernav">Baha Chammakhi</h4>
                <ul className="list-unstyled">
                    <li className="nav-item"><a className="  font-weight-light" href='#portfolio'><i class="fas fa-briefcase fa-xs mr-3"></i>PORTFOLIO</a></li>
                    <li className="nav-item"> <a className="  font-weight-light" href='#about'><i class="fas fa-user-alt fa-xs mr-3"></i>ABOUT</a></li>
                    <li className="nav-item"><a className="  font-weight-light" href='#contact'><i class="fas fa-envelope fa-xs mr-3"></i>CONTACT</a></li>
                </ul>
                     
                
                 
                     
  
</div>
            </Collapse>
          </div>
        );
    }
}

export default SideNav