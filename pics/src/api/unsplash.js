import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID f54cde1122e54ddbbb68f2912d264fd39b7a8c4c26aef15ef3aadd274793ccd9'
  }
});
