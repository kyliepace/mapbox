import React from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map';
import PolylinePicker from './components/tools/get-paths';
import 'mapbox-gl/dist/mapbox-gl.css';

const Application = () => {
  return (
    <main>
      <PolylinePicker />
      <Map/>
    </main>
  );
}

ReactDOM.render(<Application />, document.getElementById('app'));