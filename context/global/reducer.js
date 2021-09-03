import {
  SET_USER_AND_AUTH,
  SET_NOTIFICATIONS,
  SET_AUTH_DETAILS,
  SET_MESSAGES,
  SET_USER_PROFILE,
  SET_USER_ROLES,
} from "./constants";

export const initialState = {
  user: {
    roles: [],
  },
  notifications: {},
  messages: {},
  auth: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_AND_AUTH:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user,
        },
        auth: {
          ...state.auth,
          accessToken: action.payload.auth,
        },
      };
    case SET_AUTH_DETAILS:
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload,
        },
      };

    case SET_USER_ROLES:
      return {
        ...state,
        user: {
          ...state.user,
          roles: [...action.payload],
        },
      };

    case SET_NOTIFICATIONS: {
      return {
        ...state,
        notifications: { ...state.notifications, ...action.payload },
      };
    }
    case SET_MESSAGES: {
      return {
        ...state,
        messages: { ...state.messages, ...action.payload },
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
