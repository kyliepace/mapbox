import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import geojson from './darkness.json'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
class Application extends React.Component {

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: -2.3,
      lat: 51.4,
      zoom: 10
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('load', () => {
      map.addSource('darkness', {
        type: 'geojson',
        data: geojson
      });
      map.addLayer({
        'id': 'the_darkness',
        'type': 'fill',
        'layout': {
          'visibility': 'visible',
        },
        'source': 'darkness'
      });

    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className='inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold'>
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div id='map' ref={el => this.mapContainer = el} className='absolute top right left bottom' />
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));