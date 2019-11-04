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

  const key = `${Math.random(100)}`;
  return (
    <GeoJSONLayer
      id={id}
      key={key}
      data = {featureCollection}
      sourceId={sourceId}
      type={style.type}
      fillPaint={style.fillPaint}
      lineLayout={style.lineLayout}
      linePaint={style.linePaint}
      circlePaint={style.circlePaint}
      paint={style.paint}
    />
  )
};

export default Geojson;