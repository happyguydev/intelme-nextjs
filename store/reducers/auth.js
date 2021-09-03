import { HYDRATE } from 'next-redux-wrapper';
// import { persistReducer } from 'redux-persist';
import {
  LOGOUT,
  SET_AUTH_DETAILS,
  USER_PROFILE,
  SET_USER_ROLES,
} from '../types';

const initialState = {
  user: {},
  profile: {},
  roles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case SET_AUTH_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_ROLES:
      return {
        ...state,
        roles: action.payload,
      };
    case USER_PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case LOGOUT: {
      return {
        user: {},
        roles: [],
        profile: {},
      };
    }
    default:
      return state;
  }
};

export default reducer;
// export default persistReducer(persistConfig, reducer);
