import React,{Component} from "react"
import SimpleModal from "./SimpleModal"
class Portfolio extends Component{
    constructor(){
        super()
        this.state ={
            open : false
        }
        this.handleClose = this.handleClose.bind(this)
    }
    handleOpen = () => {
        this.setState ({
          open : true
        })
       }
       handleClose(){
        this.setState({
          open : false
        })
      }
    render(){
        return(
            <div >
                
                <div className="card mt-3 ml-3 w-75 bg-dark border-danger" >
  <img className="card-img-top" src={this.props.img} alt="Card image cap" onClick={this.handleOpen} />
  
  
  
</div>
<SimpleModal updated={this.props.timeUpdated} link={this.props.link} prag={this.props.prag} title={this.props.title} open={this.state.open} handleClose={this.handleClose} />
</div>



          
        )
    }
}
export default Portfolio