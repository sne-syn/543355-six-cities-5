import {ActionType} from '../action';
import {extend} from '../../utils/common';

const initialState = {
  offerItem: {},
};

export const offerItem = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER_ITEM_ID:
      return extend(state, {
        offerId: action.payload,
      });
    case ActionType.LOAD_OFFER_ITEM:
      return extend(state, {
        offerItem: action.payload,
      });
    default:
      return state;
  }
};
