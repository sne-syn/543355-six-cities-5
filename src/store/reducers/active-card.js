import {ActionType} from '../action';

export const activeCard = (highlightedOfferID = ``, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CARD_ID:
      highlightedOfferID = action.payload;
      return highlightedOfferID;
    case ActionType.RESET_ACTIVE_CARD_ID:
      highlightedOfferID = ``;
      return highlightedOfferID;
    default:
      return highlightedOfferID;
  }
};
