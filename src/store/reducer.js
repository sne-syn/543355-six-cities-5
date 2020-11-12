import {CITIES, AuthorizationStatus, SortType} from '../utils/const';
import {extend} from '../utils/common';
import {ActionType} from "./action";
import {filterData, filterFavorites, getSortedMovies} from './../core';

const DEFAULT_CITY = CITIES[0];
const initialState = {
  offers: [],
  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
  highlightedOfferID: ``,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  filteredData: [],
  unsortedOffers: []
  // get filteredOffers() {
  //   return filterData(this.offers, DEFAULT_CITY);
  // },
  // get unsortedOffers() {
  //   return this.filteredOffers;
  // },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_ELEMENT:
      return extend(state, {
        activeElement: action.payload,
        filteredOffers: filterData(state.offers, action.payload),
        activeSortType: SortType.get(`DEFAULT`),
        get unsortedOffers() {
          return this.filteredOffers;
        },
      });
    case ActionType.SHOW_FAVORITES:
      return extend(state, {
        filteredOffers: filterFavorites(state.offers)
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        filteredOffers: getSortedMovies(state.filteredOffers, state.unsortedOffers, action.payload),
        activeSortType: action.payload
      });
    case ActionType.SET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: action.payload
      });
    case ActionType.RESET_ACTIVE_CARD_ID:
      return extend(state, {
        highlightedOfferID: ``
      });
    default:
      return state;
  }
};

export {reducer};
