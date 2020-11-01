import {CITIES} from '../utils/const';
import {extend} from '../utils/common';
import {ActionType} from "./action";
import {generateOffers} from '../mocks/offers.js';
import {filterData} from './../core';
const offers = generateOffers(20);

const initialState = {
  activeElement: CITIES[0],
  offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_ON_LOAD:
      return extend(state, {
        activeElement: CITIES[0],
        offers: filterData(offers, state.activeElement)
      });
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        offers: filterData(offers, action.payload)
      });
    default:
      return state;
  }
};

export {reducer};
