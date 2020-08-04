import axios from 'axios';

import { ADD_SALE, ADD_BUY, GET_PRODUCTS, RESET_PRODUCTS } from './types';

export const addSale = (action) => (dispatch) => {
  const data = action;
  console.log(data);
  axios
    .post(`/api/sales`, data)
    .then((res) => {
      dispatch({
        type: ADD_SALE,
        payload: res.data.sale,
      });
    })
    .catch((err) => console.log(err));
};

export const addBuy = (action) => (dispatch) => {
  const data = action;
  axios
    .post(`/api/buys`, data)
    .then((res) => {
      dispatch({
        type: ADD_BUY,
        payload: res.data.buy,
      });
    })
    .catch((err) => console.log(err));
};

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
