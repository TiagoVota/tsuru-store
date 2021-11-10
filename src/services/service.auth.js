import axios from 'axios';


const BASE_URL = 'http://localhost:4042';


const postSignUp = (body) => {
  return axios.post(`${BASE_URL}/sign-up`, body);
};

const postSignIn = (body) => {
  return axios.post(`${BASE_URL}/sign-up`, body);
};


export {
  postSignUp,
  postSignIn,
};
