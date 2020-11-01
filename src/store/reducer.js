import {CITIES} from '../utils/const';
import {extend} from '../utils/common';
import {offers} from './../index';
import {ActionType} from "./action";

const initialState = {
  activeElement: CITIES[0],
  filteredOffers: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ON_LOAD:
      return extend(state, {
        activeElement: CITIES[0],
        filteredOffers: action.payload.filter((offer) =>
          (offer.city === state.activeElement))
      });
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        filteredOffers: offers.filter((offer) =>
          (offer.city === action.payload))
      });
    default:
      return state;
  }
};

export {reducer};
