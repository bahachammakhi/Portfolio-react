import React ,{Component} from "react"
import "./timeline.css"
class TimeLine extends Component{
    render(){
        return(
            <div className="container">
  <div className="page-header">
    <h3 id="timeline" className="header mt-3">Education:</h3>
  </div>
  <ul className="timeline ">
    <li>
      <div className="timeline-badge"></div>
      <div className="timeline-panel bg-dark">
        <div className="timeline-heading">
          <h4 className="timeline-title">High school 2 mars wardia</h4>
          <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i>2017/2018</small></p>
        </div>
        <div className="timeline-body">
          <p >DEGREE BACCALAURÉAT TECHNIQUE</p>
        </div>
      </div>
    </li>
    <li className="timeline-inverted">
      <div className="timeline-badge "><i className="glyphicon glyphicon-credit-card"></i></div>
      <div className="timeline-panel bg-dark">
        <div className="timeline-heading">
          <h4 className="timeline-title titlet">
The Higher Institute of Information Technologies and Communications (ISTIC)</h4>
<p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 2018/2021</small></p>
        </div>
        <div className="timeline-body pap">
          <p>Bachelor of computer science,network,
            telecomunications</p>
        </div>
      </div>
    </li>
   
 
   
  </ul>
</div>
        )
    }
}
export default TimeLine