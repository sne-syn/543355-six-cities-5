import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';

const initialState = {
  favorites: [],
  loadingFavorites: false,
};

const loadingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_FAVORITES:
      return extend(state, {
        reviews: adaptOffers(action.payload),
      });
    default:
      return state;
  }
};

export default loadingDataReducer;
