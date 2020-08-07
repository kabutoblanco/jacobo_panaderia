import axios from 'axios';

import {
  ADD_SALE,
  ADD_BUY,
  GET_PRODUCTS,
  RESET_PRODUCTS,
  FAIL_REQUEST,
  GET_SALES,
  GET_BUYS,
  ACTION_RUNNING,
  ACTION_END,
} from './types';
import { createMessage, returnErrors } from './messages';

export const addSale = (action) => (dispatch) => {
  const data = action;
  dispatch({ type: ACTION_RUNNING });
  axios
    .post(`/api/sales`, data)
    .then((res) => {
      dispatch({
        type: ADD_SALE,
        payload: res.data.sale,
      });
      dispatch({ type: ACTION_END });
      dispatch(createMessage({ addSale: 'Venta registrada' }));
    })
    .catch((err) => {
      dispatch({ type: FAIL_REQUEST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
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
      dispatch(createMessage({ addSale: 'Compra registrada' }));
    })
    .catch((err) => {
      dispatch({ type: FAIL_REQUEST });
      dispatch(returnErrors(err.response.data, err.response.status));
    });
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

export const getSales = () => (dispatch) => {
  axios
    .get(`/api/sales/list`)
    .then((res) => {
      dispatch({
        type: GET_SALES,
        payload: res.data.sales,
      });
    })
    .catch((err) => console.log(err));
};

export const getBuys = () => (dispatch) => {
  axios
    .get(`/api/buys/list`)
    .then((res) => {
      dispatch({
        type: GET_BUYS,
        payload: res.data.buys,
      });
    })
    .catch((err) => console.log(err));
};
