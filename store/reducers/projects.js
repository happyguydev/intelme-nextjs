import { HYDRATE } from 'next-redux-wrapper';

import {
  CLEAR_PROJECT,
  CLEAR_PROJECTS,
  DASHBOARD_RECENT_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS,
} from '../types';

const initialState = {
  projects: [],
  recentProjects: [],
  project: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case DASHBOARD_RECENT_PROJECTS:
      return {
        ...state,
        recentProjects: action.payload,
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT:
      return {
        ...state,
        project: action.payload,
      };

    case CLEAR_PROJECTS:
      return {
        ...state,
        projects: [],
      };
    case CLEAR_PROJECT:
      return {
        ...state,
        project: {},
      };
    default:
      return state;
  }
};

export default reducer;
