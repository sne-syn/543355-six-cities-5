import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {nearPlaces} from './near-places-reducers';
import {ActionType} from '../action';
import {fetchNearPlaces} from '../api-actions';
import {APIRoute} from '../../utils/const';

const api = createAPI(() => {});
const offer = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
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
};

const offerFavorite = {
  bedrooms: 3,
  city: {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
    name: `Amsterdam`,
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
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(nearPlaces(void 0, {})).toEqual({
    nearPlaces: [],
  });
});

it(`Reducer should update nearPlaces`, () => {
  expect(nearPlaces({
    nearPlaces: [offer],
  }, {
    type: ActionType.UPDATE_NEAR_PLACES,
    payload: offerFavorite
  })).toEqual({
    nearPlaces: [offerFavorite],
  });
});

it(`Should make a correct API call to /nearby and fetch nearPlaces offers`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const offerId = 2;
  const nearPlacesLoader = fetchNearPlaces(offerId);

  apiMock
    .onGet(`${APIRoute.OFFERS}/${offerId}${APIRoute.OFFERS_NEARBY}`)
    .reply(200, [offer]);

  return nearPlacesLoader(dispatch, () => {}, api)
  .then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.LOAD_NEAR_PLACES,
      payload: [offer]
    });
  });
});
