import axios from 'axios';

import BASE_URL from './baseUrl';


const postSignUp = (body) => {
  return axios.post(`${BASE_URL}/sign-up`, body);
};

const postSignIn = (body) => {
  return axios.post(`${BASE_URL}/`, body);
};


export {
  postSignUp,
  postSignIn,
};
