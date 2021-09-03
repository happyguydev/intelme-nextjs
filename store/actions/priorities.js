import Api from '../../api';
import { GET_PRIORITIES } from '../types';

const api = new Api();

export const getPriorities = () => async (dispatch) => {
  const res = await api.getPriorities();
  dispatch({
    type: GET_PRIORITIES,
    payload: res,
  });
  return res;
};
