import {ActionType} from '../action';
import {extend} from '../../utils/common';

const initialState = {
  highlightedOfferId: ``,
};

export const activeCard = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.RESET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferId: ``
      });
    case ActionType.SET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferId: action.payload
      });
    default:
      return state;
  }
};
