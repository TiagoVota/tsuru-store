import axios from 'axios';
import BASE_URL from './baseUrl';


const postCartProduct = (productId, quantity, config) => {
  const body = { quantity };
  return axios.post(`${BASE_URL}/single-product/${productId}`, body, config);
};

const postCheckout = (config) => {
  return axios.post(`${BASE_URL}/checkout`, config);
};

const getCartList = (config) => {
  return axios.get(`${BASE_URL}/cart`, config);
};

export {
  postCartProduct,
  postCheckout,
  getCartList,
};