import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {favorites} from './favorites-reducers';
import {ActionType} from '../action';
import {fetchFavorites} from '../api-actions';
import {APIRoute} from '../../utils/const';
import {offers} from '../../test-data/offers-test-data';
const offer = offers[0];

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(favorites(void 0, {})).toEqual({
    favorites: [],
    loading: true
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /favorites and fetch favorites offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 2;
    const fetchFavoritesLoader = fetchFavorites(offerId);

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [offers]);

    return fetchFavoritesLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.SHOW_FAVORITES_ELEMENTS,
        payload: [offers]
      });
    });
  });
  it(`Should make a correct API call to /favorites and update favorites offers`, () => {
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/2/1`)
      .reply(200, offer);
  });
});
