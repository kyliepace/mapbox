import React, { PureComponent } from 'react';
import { callServer } from './get-data';

const Distance = ({distances}) => {
  if (!distances || distances.length < 1) { return null; }
  return distances.map(({distance}) => {
    return distance > 0 && (<p>{distance.toFixed(2)} m</p>)
  })
}
export default class Calculate extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      distances: []
    }
  }

  showDistance(type, data) {
    this.setState({distances: data});
    const geojsons = data.map(({geometry}) => geometry);
    console.log(geojsons)
    this.props.callback('points', geojsons);
  }

  render() {
    return (
      <div className='menuButton' onClick={callServer('/pipeline', this.showDistance.bind(this))}>
        <h3>Distance</h3>
        <Distance distances={this.state.distances} />

        <span>Calculate distance between all points between 5km and 500km from PSN</span>
      </div>
    );
  }
}