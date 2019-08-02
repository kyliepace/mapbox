import React from 'react'
import Geojson from './geojson'

const Paths = (props) => {
  if (!props.geojson || props.geojson.length < 1){ return null; }
  const style = {
    type: 'line',
    lineLayout: {
      'line-cap': 'round',
      visibility: 'visible'
    },
    linePaint: {
      'line-color': '#8df542',
      'line-width': 10
    }
  };

  return (
    <Geojson
      id='paths'
      key={2}
      geojson={props.geojson[0]}
      sourceId={'the_paths'}
      style={style}
    />
  )
};

export default Paths;