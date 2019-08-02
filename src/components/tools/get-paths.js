import React from 'react';
import axios from 'axios';

const getPaths = async (e, callback) => {
  const { data } = await axios.get('http://127.0.0.1:3001/api/paths');
  return callback(data)
};

const uploadPath = async (e, callback) => {
  let reader = new FileReader();
  const name = e.target.files[0].name;
  reader.onload = async event => {
    let data = JSON.parse(event.target.result);
    data.name = name;
    await axios.post('http://127.0.0.1:3001/api/paths', data);
    callback([data.features[0].geometry]);
  }

  reader.readAsText(e.target.files[0]);
  document.getElementById('geojsonfile').value = '';
};

const PolylinePicker = (props) => {
  const onClick = pathFunction => e => {
    e.preventDefault();
    pathFunction(e, props.onPick);
  };

  return (
    <div>
        <button onClick={onClick(getPaths)}>Choose Path</button>
        <form>
          <input
            type='file'
            id='geojsonfile'
            onChange={onClick(uploadPath)}
            accept=".geojson"
          />
        </form>

    </div>
  )
};

export default PolylinePicker;