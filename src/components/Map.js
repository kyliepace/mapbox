import React, { PureComponent } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import Darkness from './layers/darkness'
import Paths from './layers/paths'

export default class Map extends PureComponent {

  constructor(props: Props) {
    super(props);
    this.state = {
      mapStyle: 'mapbox://styles/mapbox/satellite-streets-v9',
      viewport: {
        center: [ -2.3, 51.4],
        zoom: [8],
        bearing: [0],
        pitch: [0]
      }
    };
  }

  render() {
    const { viewport, mapStyle } = this.state;
    console.log('props: ', this.props)

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
          height: '90vh',
          width: '100vw'
        }}
      >
        <Paths geojson={this.props.paths} />
        <Darkness geojson={this.props.darkness}/>
      </Map>
    )
  }
}

