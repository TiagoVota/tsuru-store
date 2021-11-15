import axios from 'axios';
import BASE_URL from './baseUrl';

const postCheckout = (token) => {
  return axios.post(`${BASE_URL}/checkout`, { token });
};

export {
  postCheckout
};