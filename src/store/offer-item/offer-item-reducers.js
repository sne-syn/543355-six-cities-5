import {ActionType} from '../action';
import {adaptOffer} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  offerItem: {},
  offerItemId: ``,
  loading: true,
};

export const offerItem = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFER_ITEM:
      return extend(state, {
        offerItem: adaptOffer(action.payload),
        loading: false,
        offerItemId: action.payload.id,
      });
    default:
      return state;
  }
};
