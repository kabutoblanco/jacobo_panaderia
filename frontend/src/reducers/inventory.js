import {
  ADD_BUY,
  ADD_SALE,
  GET_PRODUCTS,
  RESET_PRODUCTS,
  FAIL_REQUEST,
  GET_SALES,
  GET_BUYS,
} from '../actions/types';

const initialState = {
  products: [],
  sales: [],
  buys: [],
  is_sucess: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_SALE:
      return {
        ...state,
        sales: state.sales.concat(action.payload),
        is_sucess: true,
      };
    case ADD_BUY:
      return {
        ...state,
        buys: state.buys.concat(action.payload),
        is_sucess: true,
      };
    case RESET_PRODUCTS:
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        is_sucess: false,
      };
    case GET_SALES:
      return {
        ...state,
        sales: action.payload,
      };
    case GET_BUYS:
      return {
        ...state,
        buys: action.payload,
      };
    default:
      return state;
  }
}
