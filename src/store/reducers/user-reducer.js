import {AuthorizationStatus} from '../../utils/const';
import {extend} from '../../utils/common';
import {ActionType} from '../action';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
};

export default userReducer;
