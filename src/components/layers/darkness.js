import React from 'react'
import Geojson from './geojson'

const Darkness = (props) => {
  console.log('render darkness')
  const style = {
    type: 'fill',
    fillLayout: {
      visibility: 'visible'
    },
    fillPaint: {
      'fill-color': 'black',
      'fill-opacity': 1
    }
  };

  return (
    <Geojson
      id='darkness'
      key={1}
      sourceId='the_darkness'
      geojson={props.geojson}
      style={style}
    />
  )
};

export default Darkness;