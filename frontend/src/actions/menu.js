import { SET_OPTION } from './types';

export const setOption = (option) => (dispatch) => {
  dispatch({ type: SET_OPTION, payload: { option: option } });
};
