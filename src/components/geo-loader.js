import React, { PureComponent } from 'react';
import Analysis from './buttons/analysis';
import Calculate from './buttons/calculate';
import { callServer } from '../functions/get-data';

const clearData = (name, callback) => e => {
  callback(name, []);
};

const GeoButton = ({name, checked, callback, description}) => {
  return (
    <div className='menuButton'>
      <h3>{name}</h3>
      <input type='checkbox'
        checked={checked}
        onChange={checked ? clearData(name, callback) : callServer(name, callback)}
      ></input>
      <span>{description}</span>
    </div>
  )
};


class GeometryLoader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    }
  }

  select(callback) {
    return (name, data) => {
      this.setState({selected: name});
      console.log(this.state)
      callback(name, data);
    }
  }

  render() {
    const { selected } = this.state;
    const { onClick, onAnalyze, hasPoints, hasLines, hasPolygons } = this.props;

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexFlow: 'row wrap'
      }}>
        <div style={{display: 'flex'}}>
          <GeoButton
            name='points'
            checked={hasPoints}
            callback={onClick}
            description='"geometry.type" = "Point"'
          />
          <GeoButton
            name='paths'
            checked={hasLines}
            callback={onClick}
            description='"geometry.type" = "LineString"'
          />
          <GeoButton
            name='polygons'
            checked={hasPolygons}
            callback={onClick}
            description='"geometry.type" = "Polygon"'
          />
        </div>
        <Analysis callback={this.select(onAnalyze)} selected={selected} />

        <Calculate
          callback={this.select(onClick)}
          analyze={this.select(onAnalyze)}
          selected={this.state.selected}
        />
      </div>
    )
  };
};

export default GeometryLoader;