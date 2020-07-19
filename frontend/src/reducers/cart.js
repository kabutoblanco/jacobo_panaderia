import {
  CART_LOADED,
  CART_LOADING,
  ADD_CART,
  SET_CART,
  DELETE_CART,
} from '../actions/types';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  let products = [];
  switch (action.type) {
    case CART_LOADED:
      const { local, remote } = action.payload;
      for (let i = 0; i < remote.products.length; i++) {
        const pr = remote.products[i];
        for (let j = 0; j < local.length; j++) {
          const pl = local[j];
          if (pr.id === pl.presentation.id) {
            products = products.concat({ ...pl, ...{ presentation: pr } });
            break;
          }
        }
      }
      return {
        ...state,
        products: products,
      };
    case ADD_CART:
      products = state.products.concat(action.payload);
      localStorage.setItem('products', JSON.stringify(products));
      return {
        ...state,
        products: products,
      };
    case SET_CART:
      products = state.products.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, ...action.payload };
        return item;
      });
      localStorage.setItem('products', JSON.stringify(products));
      return {
        ...state,
        products: products,
      };
    case DELETE_CART:
      products = state.products.filter(
        (item) =>
          item.id !== action.payload.id ||
          item.presentation.id !== action.payload.presentation
      );
      localStorage.setItem('products', JSON.stringify(products));
      return {
        ...state,
        products: products,
      };

    default:
      return state;
  }
}
