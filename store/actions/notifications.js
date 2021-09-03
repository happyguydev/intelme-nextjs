import Api from '../../api';
import { GET_NOTIFICATIONS, READ_NOTIFICATION } from '../types';

const api = new Api();

export const getNotifications = () => async (dispatch) => {
  const res = await api.getNotifications({ read: 'unread' });
  dispatch({
    type: GET_NOTIFICATIONS,
    payload: res,
  });
  return res;
};

export const readNotification = ({ notificationId }) => async (dispatch) => {
  const res = await api.readNotification({ notificationId });
  dispatch({
    type: READ_NOTIFICATION,
    payload: res,
  });
  return res;
};
