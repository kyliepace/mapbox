import React from 'react';
import axios from 'axios';

const getPaths = async () => {
  const { data } = await axios.get('http://127.0.0.1:3001/api/paths');
  return data;
};

const uploadPath = (e) => {
  e.preventDefault();
  let reader = new FileReader();
  reader.onload = async event => {
    const data = JSON.parse(event.target.result);
    await axios.post('http://127.0.0.1:3001/api/paths', data);
  }
  reader.readAsText(e.target.files[0]);
  document.getElementById('geojsonfile').value = '';
};

const PolylinePicker = (props) => {
  const onClick = async e => {
    e.preventDefault();
    const paths = await getPaths();
    props.onPick(paths);
  };

  return (
    <div>
        <button onClick={onClick}>Choose Path</button>
        <form>
          <input
            type='file'
            id='geojsonfile'
            onChange={uploadPath}
            accept=".json"
          />
        </form>

    </div>
  )
};

export default PolylinePicker;