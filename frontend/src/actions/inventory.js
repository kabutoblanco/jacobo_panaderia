import axios from 'axios';

import { GET_PRODUCTS, RESET_PRODUCTS } from './types';

export const getProducts = (name, type) => (dispatch) => {
  axios
    .get(`/api/categories/${name}/${type}/products`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.products,
      });
    })
    .catch((err) => console.log(err));
};

export const resetProducts = () => (dispatch) => {
  dispatch({
    type: RESET_PRODUCTS,
    payload: [],
  });
};
