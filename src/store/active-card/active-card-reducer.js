import {ActionType} from '../action';
import {extend} from '../../utils/common';

const initialState = {
  highlightedOfferID: ``,
};

export const activeCard = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: ``
      });
    case ActionType.SET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: action.payload
      });
    default:
      return state;
  }
};
