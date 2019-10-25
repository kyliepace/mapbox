import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Map from './components/Map';
import GeometryLoader from './components/tools/geo-loader';
import 'mapbox-gl/dist/mapbox-gl.css';

class Application extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      paths: [],
      points: [],
      darkness: undefined
    }
  }

  update = (name, data) => {
    const newState = { [name]: data };
    this.setState(newState);
  }

  async componentDidMount() {
    const { data }  = await axios.get('http://127.0.0.1:3001/api/darkness');
    this.setState({darkness: data});
  }

  render(){
    const { paths, points } = this.state;
    console.log(this.state.points.length)
    console.log(this.state.paths.length)
    return (
      <main>
        <GeometryLoader
          onClick={this.update}
          hasLines={paths.length > 0}
          hasPoints={points.length > 0}
        />
        <Map
          paths={paths}
          darkness={this.state.darkness}
        />
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));