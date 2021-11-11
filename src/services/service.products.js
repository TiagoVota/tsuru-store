import axios from 'axios';

import BASE_URL from './baseUrl';


const getCategories = () => {
  return axios.get(`${BASE_URL}/categories`);
};

const getProducts = () => {
  return axios.get(`${BASE_URL}/products`);
};

const getProduct = (productId) => {
  return axios.get(`${BASE_URL}/single-product/${productId}`);
};


export {
  getCategories,
  getProducts,
  getProduct,
};
