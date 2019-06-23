import React,{Component} from "react"
import me from "../img/me.jpg"
import TimeLine from "./TimeLine"
import me1 from "../img/me2.jpg"
import reacticon from"../img/iconfinder_React.js_logo_1174949.png"
class AboutMe extends Component{
    render(){
        return(
            <div>
                <img className="img-thumbnail rounded meimg ml-3 border-danger" src={me}/>
                <img className="img-thumbnail rounded meimg ml-3 meimg2 border-danger" src={me1}/>
                <h3 className="mt-3  header">About me</h3>
                <hr className="hr"/>
                <p className="mt-3  text-dark font-weigth-bold">A passionate web developer, Computer science, network, and telecommunications Student, always learning from my projects, experiences always want to learn new technologies, I have a principal knowledge is power.</p>
           <hr/>
            <h3 className="header">Technical skills:</h3>
<p className="text-dark font-weight-bold">HTML5 / CSS3 /Bootstrap / JS</p>
            <div class="progress ml-3 mr-3">
  <div class="progress-bar progress-bar-striped prog1 progress-bar-animated bg-danger" role="progressbar "  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
</div> 
<p className="mt-3 text-dark font-weight-bold">React.js</p>
            <div class="progress ml-3 mr-3">
  <div className="progress-bar progress-bar-striped prog2 progress-bar-animated bg-danger " role="progressbar "  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
</div>
<hr/>
<div className="mt-3 mb-3 text-center bg-ligth animated flash infinite slower "> <img className="ml-3 mb-5" src={reacticon}/><img className="ml-3 mb-5" src="https://img.icons8.com/color/48/000000/bootstrap.png"/> <img className="mb-5 ml-3" src="https://img.icons8.com/color/48/000000/git.png"/> <img className="mb-5 ml-3" src="https://img.icons8.com/color/48/000000/firebase.png"/></div>
<hr/>
<div><TimeLine /></div>
<hr/>
            </div>
        )
    }
}
export default AboutMe