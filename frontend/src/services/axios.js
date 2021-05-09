import Axios from 'axios';
import config from '../config';

const axios = Axios.create({
  baseURL: config.API_URL
});

const token = localStorage.getItem('shelvesToken');

if (token) {
  axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
}

export default axios;
