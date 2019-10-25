import React from 'react';
import axios from 'axios';


const onClick = (type, callback) => async e => {
  e.preventDefault();
  try {
    const { data } = await axios.get(`http://127.0.0.1:3001/api/${type}`);
    return callback(type, data);
  }
  catch(err) { return; }
};

const clearData = (name, callback) => e => {
  callback(name, []);
};

const GeoButton = ({name, checked, callback}) => {
  return (
    <div
      style={{border: '1px solid black', height: '100px', width: '100px'}}
    >
      <h3>{name}</h3>
      <input type='checkbox'
        checked={checked}
        onChange={checked ? clearData(name, callback) : onClick(name, callback)}
      ></input>
    </div>
  )
}


const GeometryLoader = (props) => {
  return (
    <div>
        <button onClick={onClick('paths', props.onLinePick)}>Load Cheese Line</button>
        <div style={{display: 'flex', border: '1px solid black'}}>

          <GeoButton name='points' checked={props.hasPoints} callback={props.onClick}/>
          <GeoButton name='paths' checked={props.hasLines} callback={props.onClick}/>
        </div>
    </div>
  )
};

export default GeometryLoader;