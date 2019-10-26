import axios from 'axios';

export const callServer = (type, callback) => async e => {
  e.preventDefault();
  try {
    const { data } = await axios.get(`http://127.0.0.1:3001/api/${type}`);
    return callback(type, data);
  }
  catch(err) { return; }
};
