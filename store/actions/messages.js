import Api from '../../api';
import { GET_MESSAGES, READ_MESSAGE } from '../types';

const api = new Api();

export const getMessages = () => async (dispatch) => {
  const res = await api.getMessages({ read: 'unread' });
  dispatch({
    type: GET_MESSAGES,
    payload: res,
  });
  return res;
};

export const readMessage = (messageId) => async (dispatch) => {
  const res = await api.readMessage({ messageId });
  dispatch({
    type: READ_MESSAGE,
    payload: res,
  });
  return res;
};
