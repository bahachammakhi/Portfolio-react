import React,{Component} from "react"
import me from "../img/me.jpg"
class AboutMe extends Component{
    render(){
        return(
            <div>
                <img className="img-thumbnail rounded meimg ml-3 " src={me}/>
                <img className="img-thumbnail rounded meimg ml-3 meimg2" src={me}/>
                <h3 className="mt-3  header">About me</h3>
                <hr className="hr"/>
                <p className="mt-3 font-weight-light ">A passionate web developer, Computer science, network, and telecommunications Student, always learning from my projects, experiences always want to learn new technologies, I have a principal knowledge is power.</p>
            <h3 className="header">Technical skills:</h3>
<p>HTML5 / CSS3 /Bootstrap / JS</p>
            <div class="progress ml-3 mr-3">
  <div class="progress-bar progress-bar-striped prog1 progress-bar-animated bg-danger" role="progressbar "  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div>
<p className="mt-3">React.js</p>
            <div class="progress ml-3 mr-3">
  <div class="progress-bar progress-bar-striped prog2 progress-bar-animated bg-danger " role="progressbar "  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
            </div>
        )
    }
}
export default AboutMe