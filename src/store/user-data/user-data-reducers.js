import {ActionType} from '../action';
import {AuthorizationStatus} from '../../utils/const';
import {extend} from '../../utils/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userAvatar: ``,
  userEmail: ``,
  userId: null,
  userIsPro: null,
  userName: ``,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER_INFORMATION:
      return extend(state, {
        userEmail: action.payload,
      });
    case ActionType.LOAD_USER_INFORMATION:
      return extend(state, {
        userAvatar: action.payload.userAvatar,
        userEmail: action.payload.userEmail,
        userId: action.payload.userId,
        userIsPro: action.payload.userIsPro,
        userName: action.payload.userName,
      });
    default:
      return state;
  }
};
