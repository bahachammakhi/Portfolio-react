import React,{Component} from "react"

class Portfolio extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div >
                
                <div className="card mt-3 ml-3 w-75 bg-ligth border-danger " >
  <img className="card-img-top" src={this.props.img} alt="Card image cap"/>
  <div className="card-body ">
      <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.prag}</p>
    <a href="#" class="btn btn-dark">Check it</a>
  </div>
  
  <div class="card-footer">
      <small class="text-muted"> Updated on {this.props.timeUpdated}</small>
    </div>
</div>
            </div>
        )
    }
}
export default Portfolio