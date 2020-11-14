import {extend} from '../../utils/common';
import {ActionType} from '../action';

const initialState = {
  highlightedOfferID: ``,
};

const activeCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: action.payload
      });
    case ActionType.RESET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: ``
      });
    default:
      return state;
  }
};

export default activeCardReducer;
