import {CITIES, SortType} from '../../utils/const';
import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {filterData, getSortedMovies} from '../../core';
import {adaptOffers} from '../../utils/adapter';

const DEFAULT_CITY = CITIES[0];
const initialState = {
  offers: [],
  filteredOffers: [],
  unsortedOffers: [],
  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
};

export const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: adaptOffers(action.payload),
      });
    case ActionType.SHOW_OFFERS_ON_LOAD:
      return extend(state, {
        filteredOffers: filterData(state.offers, DEFAULT_CITY),
        get unsortedOffers() {
          return this.filteredOffers;
        }});
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        filteredOffers: filterData(state.offers, action.payload),
        activeSortType: SortType.get(`DEFAULT`),
        get unsortedOffers() {
          return this.filteredOffers;
        }});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        filteredOffers: getSortedMovies(state.filteredOffers, state.unsortedOffers, action.payload),
        activeSortType: action.payload
      });
    default:
      return state;
  }
};

