import { ADD_CART, SET_CART, DELETE_CART } from './types';

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
