import React, { PureComponent } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import Paths from './layers/paths'
import Polygons from './layers/polygons'
import Points from './layers/points'

export default class Map extends PureComponent {

  constructor(props: Props) {
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
    const { paths, points, polygons } = this.props;
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
        <Paths geojson={paths} />
        <Polygons geojson={polygons} />
        <Points geojson={points} />
      </Map>
    )
  }
}

