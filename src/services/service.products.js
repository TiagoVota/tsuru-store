import axios from 'axios';


const BASE_URL = 'http://localhost:4042';


const getCategories = () => {
  return axios.post(`${BASE_URL}/categories`);
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
