import React from 'react'
import Geojson from './geojson'

const Darkness = (props) => {
  console.log('render darkness')
  const style = {
    type: 'fill',
    fillPaint: {
      'fill-color': 'rgba(0, 0, 255, 0.3)',
      // 'fill-opacity': 0.1
    },
  };

  return (
    <Geojson
      id='darkness'
      number={1}
      sourceId='the_darkness'
      geojson={props.geojson}
      style={style}
    />
  )
};

export default Darkness;