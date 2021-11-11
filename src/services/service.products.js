import axios from 'axios';

import BASE_URL from './baseUrl';


const getCategories = (config) => {
  return axios.get(`${BASE_URL}/categories`, config);
};

const getProducts = (config) => {
  return axios.get(`${BASE_URL}/products`, config);
};

const getProduct = (productId, config) => {
  return axios.get(`${BASE_URL}/single-product/${productId}`, config);
};


export {
  getCategories,
  getProducts,
  getProduct,
};
