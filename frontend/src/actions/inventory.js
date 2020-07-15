import axios from 'axios';

import { GET_PRODUCTS } from './types';

export const getProducts = () => (dispatch) => {
  axios
    .get('/products/api/list')
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.products,
      });
    })
    .catch((err) => console.log(err));
};
