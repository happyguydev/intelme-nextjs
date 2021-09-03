import { HYDRATE } from 'next-redux-wrapper';

import { GET_MESSAGES } from '../types';

const initialState = {
  messages: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.paylod,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
