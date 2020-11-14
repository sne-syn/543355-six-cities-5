import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {adaptOffer, adaptOffers, adaptReviews} from '../../utils/adapter';

const initialState = {
  offer: {},
  loadingOffer: false,
};

const loadingOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_OFFER:
      return extend(state, {
        offers: adaptOffer(action.payload),
      });
    case ActionType.LOADING_OFFERS:
      return extend(state, {
        offers: adaptOffers(action.payload),
      });
    case ActionType.LOADING_REVIEWS:
      return extend(state, {
        reviews: adaptReviews(action.payload),
      });
    case ActionType.LOADING_FAVORITES:
      return extend(state, {
        reviews: adaptOffers(action.payload),
      });
    default:
      return state;
  }
};

export default loadingOfferReducer;
