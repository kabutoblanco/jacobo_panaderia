import axios from 'axios';

import { GET_PRODUCTS } from './types';

export const getProducts = (category) => (dispatch) => {
  const data = {
    category: category
  }
  axios
    .get(`/products/api/list/${category}/`, data)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data.products,
      });
    })
    .catch((err) => console.log(err));
};
