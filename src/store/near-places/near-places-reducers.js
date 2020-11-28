import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';
import {extend, updateItemInItemsCollection} from '../../utils/common';

const initialState = {
  nearPlaces: [],
};

export const nearPlaces = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_NEAR_PLACES:
      return extend(state, {
        nearPlaces: adaptOffers(action.payload),
      });
    case ActionType.UPDATE_NEAR_PLACES:
      return extend(state, {
        nearPlaces: updateItemInItemsCollection(state.nearPlaces, action.payload)});
    default:
      return state;
  }
};
