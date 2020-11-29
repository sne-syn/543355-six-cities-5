import MockAdapter from 'axios-mock-adapter';
import {updateItemInItemsCollection} from '../../utils/common';
import {createAPI} from '../../services/api';
import {offersData} from './offers-data-reducers';
import {ActionType} from '../action';
import {CITIES, SortType} from '../../utils/const';
import {fetchOffers} from '../api-actions';
import {APIRoute} from '../../utils/const';
import {filterData, getSortedMovies} from '../../core';

const DEFAULT_CITY = CITIES[0];
const api = createAPI(() => {});
const offers = [{
  bedrooms: 1,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Paris`,
  },
  description: `Gran suite con entrada independiente y baño interior privado en el centro de Segovia. Privacidad y comodidad a tan sólo tres minutos del acueducto.Amplia y luminosa, con 2 camas de 105 (+ 1 opcional de 90), baño completo, calefacción, mininevera, microondas, vajilla, cubertería básica, Internet y un balcón grande y soleado.I speak English, Italian and Spanish`,
  goods: [`cabel TV`, `heating`, `kitchen`, `towels`, `washing machine`, `washer`, `dishwasher`, `conditioner`, `elevator`, `coffee machine`],
  host: {
    avatar: `https://robohash.org/28?set=set2&size=74x74`,
    id: 4,
    isPro: false,
    name: `Salom`,
  },
  id: 1,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/34LWdhj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/33Qpecj`, `https://bit.ly/30YVQif`, `https://bit.ly/36TgIv7`, `https://bit.ly/3lEt2DG`],
  isFavorite: true,
  isPremium: false,
  location: {latitude: 48.865610000000004,
    longitude: 2.350499,
    zoom: 5},
  maxGuests: 8,
  price: 207,
  rating: 1.4018800815887484,
  title: `La Latina- Small Charming Studio`,
  type: `room`,
}, {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Brussels`,
  },
  description: `In full nature and very close to public transport. Green area surrounded by all kinds of sports facilities including a golf course, paddle, artificial grass soccer, pelota court. In an urbanization of villas with landscaped plots of about 500 m2`,
  goods: [`elevator`, `dishwasher`, `coffee machine`, `washer`, `washing machine`],
  host: {
    avatar: `https://robohash.org/82?set=set2&size=74x74`,
    id: 6,
    isPro: false,
    name: `Whitney`,
  },
  id: 2,
  previewImage: `https://bit.ly/34LWdhj`,
  images: [`https://bit.ly/30YVQif`, `https://bit.ly/3lEt2DG`, `https://bit.ly/36TgIv7`, `https://bit.ly/33Qpecj`, `https://bit.ly/36Ys6Wn`, `https://bit.ly/34LWdhj`],
  isFavorite: false,
  isPremium: false,
  location: {latitude: 48.865610000000004,
    longitude: 2.350499,
    zoom: 5},
  maxGuests: 5,
  price: 194,
  rating: 1.9069547983791004,
  title: `Estudio/suite completo en el centro de Segovia`,
  type: `house`,
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offersData(void 0, {})).toEqual({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: [],
    offers: [],
    unsortedOffers: [],
    loading: true
  });
});

it(`Reducer should update offers when city changes`, () => {
  expect(offersData({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: filterData(offers, DEFAULT_CITY),
    offers,
    unsortedOffers: filterData(offers, DEFAULT_CITY),
    loading: false
  }, {
    type: ActionType.CHANGE_ACTIVE_ELEMENT,
    payload: CITIES[2]
  })).toEqual({
    activeElement: CITIES[2],
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: filterData(offers, CITIES[2]),
    offers,
    unsortedOffers: filterData(offers, CITIES[2]),
    loading: false
  });
});

it(`Reducer should update offers with sort-action`, () => {
  expect(offersData({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: filterData(offers, DEFAULT_CITY),
    offers,
    unsortedOffers: filterData(offers, DEFAULT_CITY),
    loading: false
  }, {
    type: ActionType.CHANGE_SORT_TYPE,
    payload: `Price: low to high`
  })).toEqual({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`PRICE_LOW_HIGH`),
    filteredOffers: getSortedMovies(filterData(offers, DEFAULT_CITY), filterData(offers, DEFAULT_CITY), `Price: low to high`),
    offers,
    unsortedOffers: filterData(offers, DEFAULT_CITY),
    loading: false
  });
});

it(`Reducer should update nearPlaces`, () => {
  expect(offersData({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: filterData([offers[1]], DEFAULT_CITY),
    offers: [offers[1]],
    unsortedOffers: filterData([offers[1]], DEFAULT_CITY),
    loading: false
  }, {
    type: ActionType.UPDATE_OFFERS,
    payload: offers[0]
  })).toEqual({
    activeElement: DEFAULT_CITY,
    activeSortType: SortType.get(`DEFAULT`),
    filteredOffers: updateItemInItemsCollection([offers[1]], [offers[0]]),
    offers: updateItemInItemsCollection([offers[1]], [offers[0]]),
    unsortedOffers: updateItemInItemsCollection([offers[1]], [offers[0]]),
    loading: false
  });
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
