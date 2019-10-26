import React from 'react'
import Geojson from './geojson'

const Polygons = (props) => {
  const style = {
    type: 'fill',
    fillPaint: {
      'fill-color': 'rgba(0, 0, 255, 0.3)',
      // 'fill-opacity': 0.1
    },
  };

  return props.geojson && props.geojson.map((geojson, index) => {
    return (
      <Geojson
        id={`polygon_${index}`}
        number={index}
        sourceId='the_polygons'
        geojson={geojson}
        style={style}
      />
    );
  });

};

export default Polygons;