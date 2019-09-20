import React from 'react'
import { GeoJSONLayer } from 'react-mapbox-gl'

const Geojson = (props) => {
  const { geojson, sourceId, id, style, number } = props;
  if (!geojson){ return null}

  const featureCollection = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: geojson
    }]
  };
  return (
    <GeoJSONLayer
      id={id}
      key={number}
      data = {featureCollection}
      sourceId={sourceId}
      type={style.type}
      fillPaint={style.fillPaint}
      lineLayout={style.lineLayout}
      linePaint={style.linePaint}
      paint={style.paint}
    />
  )
};

export default Geojson;