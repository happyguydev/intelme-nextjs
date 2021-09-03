import Api from '../../api';
import { GET_PROJECTS, GET_PROJECT, DASHBOARD_RECENT_PROJECTS } from '../types';

const api = new Api();

export const getProjects = () => async (dispatch) => {
  const res = await api.getProjects();
  dispatch({
    type: GET_PROJECTS,
    payload: res,
  });
  return res;
};

export const getRecentProjects = () => async (dispatch) => {
  const res = await api.getRecentProjects();
  dispatch({
    type: DASHBOARD_RECENT_PROJECTS,
    payload: res,
  });
  return res;
};

export const getProject = ({ projectId }) => async (dispatch) => {
  const res = await api.getProject({ projectId });
  dispatch({
    type: GET_PROJECT,
    payload: res,
  });
  return res;
};
