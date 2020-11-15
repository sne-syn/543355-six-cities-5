import {ActionType} from '../action';
import {AuthorizationStatus} from '../../utils/const';
import {extend} from '../../utils/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userId: null,
  userName: ``,
  userEmail: ``,
  userAvatar: ``,
  userIsPro: null,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.LOAD_USER_INFORMATION:
      return extend(state, {
        userId: action.payload.id,
        userName: action.payload.name,
        userEmail: action.payload.email,
        userAvatar: action.payload.avatar_url,
        userIsPro: action.payload.is_pro
      });
    default:
      return state;
  }
};
