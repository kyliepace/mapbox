import React, { PureComponent } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import Darkness from './layers/darkness'

export default class Map extends PureComponent {

  constructor(props: Props) {
    super(props);
    this.state = {
      mapStyle: 'mapbox://styles/mapbox/satellite-streets-v9',
      viewport: {
        center: [ -2.3, 51.4],
        zoom: [10], 
        bearing: [0],
        pitch: [0]
      }
    };
  }

  onViewportChange = viewport => {
    this.setState({viewport});
  }

  render() {
    const Map = ReactMapboxGl({
      accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
      logoPosition: 'bottom-left',
      dragRotate: true
    });
    
    const { viewport, mapStyle } = this.state;
    return (
      <Map
        style={mapStyle}
       {...viewport}
        containerStyle={{
          height: '90vh',
          width: '100vw'
        }}
      >
        <Darkness />
      </Map>
    )
  }
}
