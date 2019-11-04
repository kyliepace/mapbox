import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map';
import GeometryLoader from './components/tools/geo-loader';
import Paths from './components/layers/paths'
import Polygons from './components/layers/polygons'
import Points from './components/layers/points'
import 'mapbox-gl/dist/mapbox-gl.css';

class Application extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      paths: [],
      points: [],
      polygons: [],
      PSN: [{
        type: 'Point',
        coordinates: [ -2.364099, 51.382239 ]
      }]
    }
  }

  update = (name, data) => {
    const newState = { [name]: data };
    this.setState(newState);
  }

  reset = (name, data) => {
    const newState = {paths: [], points: [], polygons: []};

    data.forEach(geometry => {
      const { type } = geometry;
      switch(type) {
        case 'Point':
          newState.points.push(geometry);
          break;
        case 'Polygon':
          newState.polygons.push(geometry);
          break;
        case 'LineString':
          newState.paths.push(geometry);
          break;
        default:
          break;
      }
    });
    this.setState(newState);
  };

  render(){
    const { paths, points, polygons, PSN } = this.state;

    return (
      <main>
        <GeometryLoader
          onClick={this.update}
          hasLines={paths.length > 0}
          hasPoints={points.length > 0}
          hasPolygons={polygons.length > 0}
          onAnalyze={this.reset}
        />
        <Map>
          <Paths geojson={paths} />
          <Polygons geojson={polygons} />
          <Points geojson={[...points, ...PSN]} />
        </Map>
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));