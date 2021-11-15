import axios from 'axios';
import BASE_URL from './baseUrl';

const getHistory = (config) => {
  return axios.post(`${BASE_URL}/get-history`, config.headers, config);
};

const getSale = (id, config) => {
  return axios.post(`${BASE_URL}/get-sale`, { id }, config);
};


export { getHistory, getSale };