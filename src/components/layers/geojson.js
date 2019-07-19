import React from 'react'
import { GeoJSONLayer } from 'react-mapbox-gl'

const Geojson = (props) => {
  const { geojson, sourceId, id, style } = props;
  if (!geojson){ return null}

  const featureCollection = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: geojson
    }]
  };
  console.log(geojson)
  return (
    <GeoJSONLayer
      id={id}
      key={1}
      data = {featureCollection}
      sourceId={sourceId}
      type={style.type}
      fillLayout={style.fillLayout}
      fillPaint={style.fillPain}
    />
  )
};

export default Geojson;