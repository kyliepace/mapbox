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

const GeoButton = ({name, checked, disabled, callback}) => {
  return (
    <div
      style={{border: '1px solid black', height: '100px', width: '100px'}}
    >
      <h3>{name}</h3>
      <input type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={checked ? clearData(name, callback) : onClick(name, callback)}
      ></input>
    </div>
  )
}

const AnalysisButton = ({checked, disabled, ...props}) => {
  return (
    <div
    style={{border: '1px solid black', height: '100px', width: '100px'}}
  >
    <h3>{props.children}</h3>
    <input type='checkbox'
      checked={checked}
      disabled={disabled}
    ></input>
  </div>
  )
}


const GeometryLoader = ({onClick, ...props}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'row wrap'
    }}>
      <div style={{display: 'flex'}}>
        <GeoButton name='points' checked={props.hasPoints} callback={onClick}/>
        <GeoButton name='paths' checked={props.hasLines} callback={onClick}/>
        <GeoButton name='polygons' checked={props.hasPolygons} callback={onClick} />
      </div>
      <div style={{display: 'flex'}}>
        <AnalysisButton checked={false}>$geoWithin</AnalysisButton>
        <AnalysisButton checked={false}>$near</AnalysisButton>
        <AnalysisButton checked={false} disabled={true}>$geoIntersects</AnalysisButton>
      </div>
    </div>
  )
};

export default GeometryLoader;