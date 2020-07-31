import axios from 'axios';

import { GET_PRODUCTS } from './types';

export const getProducts = (name) => (dispatch) => {
  axios
    .get(`/api/categories/${name}/products`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.products,
      });
    })
    .catch((err) => console.log(err));
};
