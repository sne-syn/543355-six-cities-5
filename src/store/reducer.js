import {CITIES} from '../utils/const';
import {extend} from '../utils/common';
import {ActionType} from "./action";
import {generateOffers} from '../mocks/offers.js';
import {filterData, filterFavorites} from './../core';
const offers = generateOffers(20);
const DEFUALT_CITY = CITIES[0];
const initialState = {
  offers,
  activeElement: DEFUALT_CITY,
  filteredOffers: filterData(offers, DEFUALT_CITY),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
