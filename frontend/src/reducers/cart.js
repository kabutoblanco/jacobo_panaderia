import { ADD_CART, SET_CART, DELETE_CART } from '../actions/types';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        products: state.products.concat(action.payload),
      };
    case SET_CART:
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.payload.id)
            return { ...item, ...action.payload };
          return item;
        }),
      };
    case DELETE_CART:
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      }

    default:
      return state;
  }
}
