import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';

const initialState = {
  offers: [],
  loadingOffers: false,
};

const loadingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_OFFERS:
      return extend(state, {
        offers: adaptOffers(action.payload),
      });
    default:
      return state;
  }
};

export default loadingDataReducer;
