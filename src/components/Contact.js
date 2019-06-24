import React ,{Component} from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 36.763098, lng: 10.194470 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: 36.763098, lng: 10.194470}} onClick={props.onMarkerClick} />}
    </GoogleMap>
  )
class Contact extends Component{
    state = {
        isMarkerShown: false,
      }
    
      componentDidMount() {
        this.delayedShowMarker()
      }
    
      delayedShowMarker = () => {
        setTimeout(() => {
          this.setState({ isMarkerShown: true })
        }, 3000)
      }
    
      handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
      }
   
    render(){
        
        return(
            <div className="row">
                <div className="col-md-4  w-75 h-25 mb-2 cardform border bg-dark border-info rounded  ">
                    <div className="card-body">
<form action="https://formspree.io/bahachammakhi25@gmail.com" method="POST">
                <div class="form-group ">
    <label for="exampleFormControlInput1" className="text-white">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlInput1"  className="text-white">Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="name" placeholder="John snow"/>
  </div>  
  <div class="form-group">
    <label for="exampleFormControlInput1"  className="text-white">Subject</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="subject" placeholder="Work"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1 "  className="text-white">Message</label>
    <textarea class="form-control " id="exampleFormControlTextarea1" name="message" rows="3"></textarea>
  </div> <div className="text-center  "><input type="submit" value="Send" className="btn btn-outline-info btn-lg " /></div>
                
</form>

                    </div>
                
                </div>
                <div className="col-md-6  mr-4 mt-3 w-75">
                <div style={{ height: '100vh', width: '100%' }}>
                <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
      </div>
                </div>
            </div>
        )
    }
}


export default Contact