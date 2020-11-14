import {ActionType} from '../action';
import {extend} from '../../utils/common';

const initialState = {
  favorites: [],
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_FAVORITES_ELEMENTS:
      return extend(state, {
        favorites: action.payload,
      });
    default:
      return state;
  }
};

