import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { width, height } from '@material-ui/system';
import {Animated} from "react-animated-css";




class SimpleModal extends React.Component {
  constructor(props){
    super(props)
 this.state ={
   open : false,
   
 }
  }
  
  componentWillReceiveProps(nextProps) {
   // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.open !== this.state.open) {
      this.setState({ open : nextProps.open });
    }
}
handleClick = (link) =>{
  const id = link
  window.open(id);
}
render(){
  

  return (
    
    <div  > 
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.props.handleClose}
      >
        <Animated animationIn="slideInRight" animationOut="fadeOut" isVisible={true}>
          <div className="p-3 mb-2 bg-dark  border-top rounded border-danger text-white  mt-3 mr-5 w-600  float-right"  >
         
              <h1  className="text-center text1 ">{this.props.title}</h1>
              <hr className="bg-danger"/>
              <p>{this.props.prag}</p>
             
             
              <br/>
              <br/>
              <div className="text-center" >
                <a  href={this.props.link} target="_blank" className="btn btn-outline-danger"   >Live Preview</a>
              </div>
   
         
        
        </div>
        </Animated>  
      </Modal>
    </div>
    
  );
 }
  
}

export default SimpleModal;
