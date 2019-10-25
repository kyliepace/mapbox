import React from 'react'
import Geojson from './geojson'

const Paths = (props) => {
  console.log(props)
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

  return props.geojson && props.geojson.map((geojson, index) => {
      return (
        <Geojson
          id={`path_${index}`}
          number={index}
          geojson={geojson}
          sourceId={'the_paths'}
          style={style}
        />
      )
    })

};

export default Paths;