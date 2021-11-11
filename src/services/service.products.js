import axios from 'axios';


const BASE_URL = 'http://localhost:4042';


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
