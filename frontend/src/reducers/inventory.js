import { ADD_BUY, ADD_SALE, GET_PRODUCTS, RESET_PRODUCTS } from '../actions/types';

const initialState = {
  products: [],
  sales: [],
  buys: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: state.sales.concat(action.payload),
      };
    case ADD_BUY:
      return {
        ...state,
        buys: state.buys.concat(action.payload),
      };
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
