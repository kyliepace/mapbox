import React, { PureComponent } from 'react'
import { GeoJSONLayer } from 'react-mapbox-gl'
import axios from 'axios'

export default class Darkness extends PureComponent {
  constructor(props: Props){
    super(props);
    this.state = {
      darkness: undefined
    }
  }


  async componentDidMount() {
    console.log('mounted')
    const { data }  = await axios.get('http://127.0.0.1:3001/api/darkness');
    this.setState({darkness: data});
  }

  render() {
    const { darkness } = this.state;
    console.log('darkness: ', darkness)
    if (!darkness){ return null}
    return (   
      <GeoJSONLayer
        id='darkness'
        data = {darkness}
        paintLayout = {{
          'background-color': '#00000',
          'fill-color': '#00000'
        }}
      />
    )
  }
}