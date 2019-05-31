import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map';
import Strava from './components/Strava';

class Application extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      route: {}
    };
    this.chooseRoute = this.chooseRoute.bind(this);
  }

  chooseRoute(route){
    this.setState({
      route: route
    });
    
    console.log('got routes: ', this.state.route);
  }

  render() {
    return (
      <main>
        <Strava chooseRoute={this.chooseRoute}/>
        <Map route={this.state.route}/>
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));