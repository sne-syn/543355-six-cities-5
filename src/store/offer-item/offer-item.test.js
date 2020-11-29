import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {offerItem} from './offer-item-reducers';
import {ActionType} from '../action';
import {fetchOfferItem} from '../api-actions';
import {APIRoute} from '../../utils/const';
import {offer, offerModified} from '../../test-data/offer-test-data';

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offerItem(void 0, {})).toEqual({
    offerItem: {},
    offerItemId: ``,
    loading: true,
  });
});

it(`Reducer should update offerItem`, () => {
  expect(offerItem({
    offerItem: offer,
  }, {
    type: ActionType.UPDATE_OFFER_ITEM,
    payload: offerModified
  })).toEqual({
    offerItem: offerModified,
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /nearby and fetch nearPlaces offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 2;
    const offerItemLoader = fetchOfferItem(offerId);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${offerId}`)
      .reply(200, offer);

    return offerItemLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFER_ITEM,
        payload: offer
      });
    });
  });
});
