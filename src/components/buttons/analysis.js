import React from 'react';
import { callServer, postServer } from '../../functions/get-data';

const AnalysisButton = ({name, onClick, children, description, selected, ...props}) => {
  const isSelected = selected === name;
  return (
    <div
      className={`menuButton ${isSelected ? 'selected' : ''}`}
      onClick={onClick(name)}
    >
      <h3>{children}</h3>
      {props.askDistance &&
        <input
          type='number'
          onChange={(e) => e.target.value > 100 && onClick(name, e.target.value)(e)}
        />
      }
      <span>{description}</span>
    </div>
  )
};

const selectButton = callback => (name) => {
  return (e) => {
    callServer(name, callback)(e);
  }
}

const findNear = callback => (name, distance = 500) => {
  return (e) => {
    postServer(name, distance, callback)(e);
  }
}

const Analysis = (props) => {
    const { selected, callback } = props;

    return (
      <div style={{display: 'flex'}}>
        <AnalysisButton
          name='analysis/geoWithin'
          description='find all geometries within the big polygon'
          onClick={selectButton(callback)}
          selected={selected}
        >
          $geoWithin
        </AnalysisButton>

        <AnalysisButton
          name='analysis/near'
          onClick={findNear(callback)}
          description='find all geometries near PSN by meters'
          selected={selected}
          askDistance={true}
        >
          $near
        </AnalysisButton>

        <AnalysisButton
          name='analysis/intersects'
          onClick={selectButton(callback)}
          disabled={true}
          selected={selected}
          description='find all geometries that intersect the big polygon'
        >
          $geoIntersects
        </AnalysisButton>
      </div>
    )
}

export default Analysis;