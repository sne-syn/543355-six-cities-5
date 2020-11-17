import {ActionType} from '../action';
import {adaptOffers} from '../../utils/adapter';
import {extend} from '../../utils/common';
import {CITIES, SortType} from '../../utils/const';
import {filterData, getSortedMovies} from '../../core';

const DEFAULT_CITY = CITIES[0];
const initialState = {
  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
  filteredOffers: [],
  offers: [],
  unsortedOffers: [],
  loading: true
};

export const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.OFFERS_LOADING_FAIL:
      return extend(state, {
        errorMsg: `Unable to load offers`,
        loading: false,
      });
    case ActionType.OFFERS_LOADING_SUCCESS:
      return extend(state, {
        errorMsg: ``,
        loading: false,
        offers: adaptOffers(action.payload),
      });
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
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        loading: false,
        offers: adaptOffers(action.payload)});
    case ActionType.SHOW_OFFERS_ON_LOAD:
      return extend(state, {
        filteredOffers: filterData(state.offers, state.activeElement),
        get unsortedOffers() {
          return this.filteredOffers;
        }});
    default:
      return state;
  }
};

