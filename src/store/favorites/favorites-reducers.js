import {ActionType} from '../action';
import {extend} from '../../utils/common';

const initialState = {
  favorites: [],
  loading: true
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_FAVORITES_ELEMENTS:
      return extend(state, {
        favorites: action.payload,
        loading: false,
      });
    default:
      return state;
  }
};
