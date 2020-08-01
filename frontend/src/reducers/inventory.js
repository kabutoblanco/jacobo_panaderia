import { GET_PRODUCTS, RESET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET_PRODUCTS:
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
}
