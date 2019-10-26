import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map';
import GeometryLoader from './components/tools/geo-loader';
import 'mapbox-gl/dist/mapbox-gl.css';

class Application extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      paths: [],
      points: [],
      polygons: []
    }
  }

  update = (name, data) => {
    const newState = { [name]: data };
    this.setState(newState);
  }

  // async componentDidMount() {
  //   const { data }  = await axios.get('http://127.0.0.1:3001/api/darkness');
  //   this.setState({darkness: data});
  // }

  render(){
    const { paths, points, polygons } = this.state;

    return (
      <main>
        <GeometryLoader
          onClick={this.update}
          hasLines={paths.length > 0}
          hasPoints={points.length > 0}
          hasPolygons={polygons.length > 0}
        />
        <Map
          paths={paths}
          points={points}
          polygons={polygons}
        />
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));