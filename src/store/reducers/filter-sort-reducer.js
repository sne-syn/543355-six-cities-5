import {CITIES, SortType} from '../../utils/const';
import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {filterData, getSortedMovies} from '../../core';

const DEFAULT_CITY = CITIES[0];
const initialState = {

  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
  get filteredOffers() {
    return filterData(this.offers, DEFAULT_CITY);
  },
  get unsortedOffers() {
    return this.filteredOffers;
  },
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        filteredOffers: filterData(state.offers, action.payload),
        activeSortType: SortType.get(`DEFAULT`),
        get unsortedOffers() {
          return this.filteredOffers;
        },
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        filteredOffers: getSortedMovies(state.filteredOffers, state.unsortedOffers, action.payload),
        activeSortType: action.payload
      });
    default:
      return state;
  }
};

export default offersReducer;
