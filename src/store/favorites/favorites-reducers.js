import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  favorites: [],
  loading: true
};

export const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_FAVORITES_ELEMENTS:
      return extend(state, {
        favorites: adaptOffers(action.payload),
        loading: false,
      });
    default:
      return state;
  }
};
