import React, { PureComponent } from 'react';
import { callServer, postServer } from './get-data';

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

export default class Analysis extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      callback: props.callback
    }
  }

  selectButton(name) {
    const callback = this.state.callback;
    return (e) => {
      this.setState({selected: name});
      callServer(name, callback)(e);
    }
  }

  findNear(name, distance = 500) {
    const { callback } = this.state;
    return (e) => {
      postServer(name, distance, callback)(e);
    }
  }

  render() {
    const { selected } = this.state;
    return (
      <div style={{display: 'flex'}}>
        <AnalysisButton
          name='analysis/geoWithin'
          description='find all geometries within the big polygon'
          onClick={this.selectButton.bind(this)}
          selected={selected}
        >
          $geoWithin
        </AnalysisButton>
        <AnalysisButton
          name='analysis/near'
          onClick={this.findNear.bind(this)}
          description='find all geometries near PSN by meters'
          selected={selected}
          askDistance={true}
        >
          $near
        </AnalysisButton>
        <AnalysisButton
          name='analysis/intersects'
          onClick={this.selectButton.bind(this)}
          disabled={true}
          selected={selected}
          description='find all geometries that intersect the big polygon'
        >
          $geoIntersects
        </AnalysisButton>
      </div>
    )
  }
}