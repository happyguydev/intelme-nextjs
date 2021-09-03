import Api from '../../api';
import {
  LOGOUT,
  SET_AUTH_DETAILS,
  SET_USER_ROLES,
  USER_PROFILE,
} from '../types';

const api = new Api();

export const authLogin = ({
  tenant,
  username,
  password,
  remember_me,
}) => async (dispatch) => {
  const res = await api.login({ tenant, username, password, remember_me });
  dispatch({
    type: SET_AUTH_DETAILS,
    payload: res,
  });
  return res;
};

export const setRole = ({ username }) => async (dispatch) => {
  const res = await api.getUserRoles(username);
  dispatch({
    type: SET_USER_ROLES,
    payload: res,
  });
  return res;
};

export const getUserProfile = ({ username }) => async (dispatch) => {
  const res = await api.getUserProfile({ username });
  dispatch({
    type: USER_PROFILE,
    payload: res,
  });
  return res;
};

export const logout = () => async (dispatch) => {
  await api.logout();

  dispatch({
    type: LOGOUT,
  });
};
