import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';

class Application extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showRoute: false
    };
    this.getRoute = this.getRoute.bind(this);
  }

  getRoute(){
    this.setState({
      showRoute: true
    });
  }

  render() {
    return (
      <main>
        {/* <Strava chooseRoute={this.chooseRoute}/> */}
        <div>
          <button onClick={this.getRoute}>Get Route</button>
        </div>
        <Map showRoute={this.state.showRoute}/>
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));