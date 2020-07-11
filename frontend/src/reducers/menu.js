import { SET_OPTION } from '../actions/types';

const initialState = {
  option: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_OPTION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
