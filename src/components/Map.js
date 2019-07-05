import React, { PureComponent } from 'react'
import ReactMapboxGl from 'react-mapbox-gl'
import Darkness from './layers/darkness'
import axios from 'axios'

export default class Map extends PureComponent {

  constructor(props: Props) {
    super(props);
    this.state = {
      mapStyle: 'mapbox://styles/mapbox/satellite-streets-v9',
      darkness: undefined,
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

  async componentDidMount() {
    const { data }  = await axios.get('http://127.0.0.1:3001/api/darkness');
    this.setState({darkness: data});

  }

  render() {
    const { viewport, mapStyle, darkness } = this.state;

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
        <Darkness darkness={darkness}/>
      </Map>
    )
  }
}

