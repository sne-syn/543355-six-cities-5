import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  nearPlaces: [],
  loading: true,
};

export const nearPlaces = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEAR_PLACES:
      return extend(state, {
        nearPlaces: adaptOffers(action.payload),
        loading: false,
      });
    case ActionType.CLEANUP_NEAR_PLACES:
      return extend(state, {
        nearPlaces: [],
      });
    default:
      return state;
  }
};
