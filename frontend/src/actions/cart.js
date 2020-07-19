import {
  CART_LOADED,
  CART_LOADING,
  ADD_CART,
  SET_CART,
  DELETE_CART,
} from './types';

import axios from 'axios';

export const loadCart = () => (dispatch) => {
  dispatch({ type: CART_LOADING });
  const products =
    localStorage.getItem('products') !== null
      ? JSON.parse(localStorage.getItem('products'))
      : [];
  const ids = products.map((item) => {
    return item.presentation.id;
  });
  const data = JSON.stringify(ids);
  axios.get('/products/api/product/' + data + '/').then((res) => {
    dispatch({
      type: CART_LOADED,
      payload: { remote: res.data, local: products },
    });
  });
};

export const addCart = (product) => (dispatch) => {
  dispatch({
    type: ADD_CART,
    payload: product,
  });
};

export const setCart = (product) => (dispatch) => {
  dispatch({
    type: SET_CART,
    payload: product,
  });
};

export const deleteCart = (id, presentation) => (dispatch) => {
  dispatch({
    type: DELETE_CART,
    payload: { id: id, presentation: presentation },
  });
};
