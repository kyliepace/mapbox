import React from 'react'
import { GeoJSONLayer } from 'react-mapbox-gl'

const Darkness = (props) => {
  const { darkness } = props;
  if (!darkness){ return null}

  const featureCollection = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      properties: darkness.properties,
      geometry: darkness.feature.geometry
    }]
  };

  return (
    <GeoJSONLayer
      id='darkness'
      key={1}
      data = {featureCollection}
      sourceId='the_darkness'
      type='fill'
      fillLayout={{
        visibility: 'visible',
      }}
      fillPaint={{
        'fill-color': 'black',
        'fill-opacity': 1
      }}
    />
  )
};

export default Darkness;