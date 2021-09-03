import { HYDRATE } from 'next-redux-wrapper';

import { SEARCH_FILES } from '../types';

const initialState = {
  files: [],
  file: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    case SEARCH_FILES:
      return {
        ...state,
        files: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
