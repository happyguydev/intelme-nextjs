import { HYDRATE } from 'next-redux-wrapper';

import { GET_NOTIFICATIONS } from '../types';

const initialState = {
  notifications: [],
  notification: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case GET_NOTIFICATIONS:
      return {
        ...state,
        notifications: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
