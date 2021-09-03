import { HYDRATE } from 'next-redux-wrapper';
import { GET_PRIORITIES } from '../types';

const initialState = {
  priorities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case GET_PRIORITIES:
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
