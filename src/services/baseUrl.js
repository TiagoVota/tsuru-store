/* eslint-disable no-undef */
const { NODE_ENV } = process.env;

const BASE_URL = (NODE_ENV === 'production')
  ? 'https://tsuru-store.herokuapp.com/'
  : 'http://localhost:4042';


export default BASE_URL;