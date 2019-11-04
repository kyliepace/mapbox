import React, { PureComponent } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'

export default class Map extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      mapStyle: 'mapbox://styles/mapbox/satellite-streets-v9',
      viewport: {
        center: [ -2.3, 51.4],
        zoom: [6],
        bearing: [0],
        pitch: [0]
      }
    };
  }

  render() {
    const { viewport, mapStyle } = this.state;

    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      logoPosition: 'bottom-left',
      dragRotate: true,
    });

    return (
      <Map
        style={mapStyle}
        {...viewport}
        containerStyle={{
          height: '80vh',
          width: '100vw'
        }}
      >
        {this.props.children}
      </Map>
    )
  }
}

