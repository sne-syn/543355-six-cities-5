import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {offersData} from './offers-data-reducers';
import {ActionType} from '../action';
import {CITIES, SortType} from '../../utils/const';
import {fetchOffers} from '../api-actions';
import {offers} from '../../test-data/offers-test-data';
import {offer, offerModified} from '../../test-data/offer-test-data';
import {APIRoute} from '../../utils/const';
import {extend} from '../../utils/common';

const DEFAULT_CITY = CITIES[0];
const api = createAPI(() => {});
const initOffersData = {
  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
  filteredOffers: [],
  offers: [],
  unsortedOffers: [],
  loading: true
};
const basicOffersData = {
  activeElement: DEFAULT_CITY,
  activeSortType: SortType.get(`DEFAULT`),
  filteredOffers: offers,
  offers,
  unsortedOffers: offers,
  loading: false
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offersData(void 0, {})).toEqual(initOffersData);
});

it(`Reducer should update offers when city changes`, () => {
  expect(offersData(basicOffersData, {
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: CITIES[2]
  })).toEqual(extend(basicOffersData, {
    activeElement: CITIES[2],
    filteredOffers: [offers[1]],
    unsortedOffers: [offers[1]],
  }));
});

it(`Reducer should update offers with sort-action`, () => {
  expect(offersData(basicOffersData, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: `Price: low to high`
  })).toEqual(extend(basicOffersData, {
    activeSortType: SortType.get(`PRICE_LOW_HIGH`),
    filteredOffers: [offers[1], offers[0]],
  }));
});

it(`Reducer should update nearPlaces`, () => {
  expect(offersData(extend(basicOffersData, {
    filteredOffers: [offer],
    offers: [offer],
    unsortedOffers: [offer],
  }), {
    type: ActionType.UPDATE_OFFERS,
    payload: offerModified
  })).toEqual(extend(basicOffersData, {
    filteredOffers: [offerModified],
    offers: [offerModified],
    unsortedOffers: [offerModified],
  }));
});

it(`Should make a correct API call to /hotels`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fetchOffersLoader = fetchOffers();

  apiMock
    .onGet(APIRoute.OFFERS)
    .reply(200, offers);

  return fetchOffersLoader(dispatch, () => {}, api)
  .then(() => {
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_OFFERS,
      payload: offers
    });
    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.SHOW_OFFERS_ON_LOAD,
    });
  });
});
