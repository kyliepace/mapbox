import React from 'react';
import axios from 'axios';

const getPaths = async (e) => {
  e.preventDefault();
  const paths = await axios.get('http://127.0.0.1:3001/api/paths');
  console.log(paths)
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

const PolylinePicker = () => {
  return (
    <div>
        <button onClick={getPaths}>Choose Path</button>
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