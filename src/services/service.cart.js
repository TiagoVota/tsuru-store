import axios from 'axios';
import BASE_URL from './baseUrl';


const postCartProduct = (productId, quantity, config) => {
  const body = { quantity };
  return axios.post(`${BASE_URL}/single-product/${productId}`, body, config);
};

const postCheckout = (config, body) => {
  return axios.post(`${BASE_URL}/checkout`, body, config);
};

const getCartList = (config) => {
  return axios.get(`${BASE_URL}/cart`, config);
};

const deleteCartProduct = (productId, config) => {
  return axios.delete(`${BASE_URL}/single-product/${productId}`, config);
};

export {
  postCartProduct,
  postCheckout,
  getCartList,
  deleteCartProduct,
};