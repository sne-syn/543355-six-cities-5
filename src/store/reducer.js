import {CITIES} from '../utils/const';
import {extend} from '../utils/common';
import {ActionType} from "./action";
import {generateOffers} from '../mocks/offers.js';
import {filterData, filterFavorites} from './../core';
const offers = generateOffers(20);

const initialState = {
  offers,
  activeElement: CITIES[0],
  filteredOffers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ON_LOAD:
      return extend(state, {
        activeElement: CITIES[0],
        filteredOffers: filterData(state.offers, state.activeElement)
      });
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        filteredOffers: filterData(state.offers, action.payload)
      });
    case ActionType.SHOW_FAVORITES:
      return extend(state, {
        filteredOffers: filterFavorites(state.offers)
      });
    default:
      return state;
  }
};

export {reducer};
