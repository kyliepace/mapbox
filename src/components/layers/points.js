import React from 'react'
import Geojson from './geojson'

const Points = (props) => {
  const style = {
    type: 'circle',
    circlePaint: {
      'circle-color': '#8df542',
      'circle-radius': 5
    }
  };

  return props.geojson && props.geojson.map((geojson, index) => {
      return (
        <Geojson
          id={`point_${index}`}
          number={index}
          geojson={geojson}
          sourceId={'the_points'}
          style={style}
        />
      )
    })

};

export default Points;