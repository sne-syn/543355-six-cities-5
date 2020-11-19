import {ActionType} from '../action';
import {adaptOffer, adaptOffers, adaptReviews} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  offerItem: {},
  reviews: [],
  nearPlaces: [],
  offerItemId: ``,
  loading: true,
};

export const offerItem = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_DATA_FOR_PROPERTY_PAGE:
    console.log(action.payload[2].data)
      return extend(state, {
        offerItem: adaptOffer(action.payload[0].data),
        loading: false,
        offerItemId: action.payload[0].data.id,
        reviews: adaptReviews(action.payload[1].data),
        nearPlaces: adaptOffers(action.payload[2].data),
      });
    default:
      return state;
  }
};
