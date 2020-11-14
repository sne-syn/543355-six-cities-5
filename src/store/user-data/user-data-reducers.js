import {ActionType} from '../action';
import {AuthorizationStatus} from '../../utils/const';
import {extend} from '../../utils/common';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

