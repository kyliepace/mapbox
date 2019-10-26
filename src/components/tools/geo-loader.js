import React from 'react';
import Analysis from './analysis';
import Calculate from './calculate';
import { callServer } from './get-data';

const clearData = (name, callback) => e => {
  callback(name, []);
};

const GeoButton = ({name, checked, callback, description}) => {
  return (
    <div className='menuButton'>
      <h3>{name}</h3>
      <input type='checkbox'
        checked={checked}
        onChange={checked ? clearData(name, callback) : callServer(name, callback)}
      ></input>
      <span>{description}</span>
    </div>
  )
};



const GeometryLoader = ({onClick, onAnalyze, ...props}) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      flexFlow: 'row wrap'
    }}>
      <div style={{display: 'flex'}}>
        <GeoButton
          name='points'
          checked={props.hasPoints}
          callback={onClick}
          description='"geometry.type" = "Point"'
        />
        <GeoButton
          name='paths'
          checked={props.hasLines}
          callback={onClick}
          description='"geometry.type" = "LineString"'
        />
        <GeoButton
          name='polygons'
          checked={props.hasPolygons}
          callback={onClick}
          description='"geometry.type" = "Polygon"'
        />
      </div>
      <Analysis callback={onAnalyze}/>

      <Calculate callback={onClick}/>

    </div>
  )
};

export default GeometryLoader;