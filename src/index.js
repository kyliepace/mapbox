import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Map from './components/Map';
import PolylinePicker from './components/tools/get-paths';
import 'mapbox-gl/dist/mapbox-gl.css';

class Application extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      paths: [],
      darkness: undefined
    }
  }

  updatePaths = paths => {
    console.log('update paths: ', paths)
    this.setState({paths})
  }

  async componentDidMount() {
    const { data }  = await axios.get('http://127.0.0.1:3001/api/darkness');
    this.setState({darkness: data});
  }

  render(){

    return (
      <main>
        <PolylinePicker onPick={this.updatePaths}/>
        <Map paths={this.state.paths} darkness={this.state.darkness}/>
      </main>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById('app'));