import React from 'react';
import axios from 'axios';
import polyline from '@mapbox/polyline'

class Strava extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      athlete: {
        id: '36272530'
      }
    };
    this.getRoutes = this.getRoutes.bind(this);
  }

  async getRoutes(){
    const id = this.state.athlete.id;
    const url = `https://www.strava.com/api/v3/athletes/${id}/routes`;

    const routes = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_STRAVA_TOKEN}`
      }
    });
    const routeJSON = polyline.toGeoJSON(routes.data[0].map.summary_polyline) || {};
    this.setState({
      athlete: routes.data[0].athlete,
      route: routeJSON
    })
    console.log('got routes: ', this.state.route);
  }

  render(){
    return(
      <div>
        <button onClick={this.getRoutes}>Get my routes</button>
      </div>
    )
  }
}

export default Strava;