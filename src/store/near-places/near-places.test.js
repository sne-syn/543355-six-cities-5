import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {nearPlaces} from './near-places-reducers';
import {ActionType} from '../action';
import {fetchNearPlaces} from '../api-actions';
import {APIRoute} from '../../utils/const';
import {offer, offerModified} from '../../test-data/offer-test-data';

const api = createAPI(() => {});

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
    payload: offerModified
  })).toEqual({
    nearPlaces: [offerModified]
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
