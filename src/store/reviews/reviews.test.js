import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {reviews} from './reviews-reducers';
import {ActionType} from '../action';
import {fetchReviews} from '../api-actions';
import {APIRoute} from '../../utils/const';

const api = createAPI(() => {});
const review = {
  author: `Beaulah`,
  avatar: `https://robohash.org/54?set=set2&size=54x54`,
  date: `2004-09-06T16:12:32.554Z`,
  id: 0,
  rating: 1,
  comment: `Antoni is a great host and us a wonderful home. His suggestions for places to go were killer!10/10 would stay again.`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reviews(void 0, {})).toEqual({
    reviews: [],
    comment: ``,
    rating: 0
  });
});

it(`Reducer should update comment`, () => {
  expect(reviews({
    comment: ``,
  }, {
    type: ActionType.SET_REVIEW_COMMENT,
    payload: `Some comment to be post`
  })).toEqual({
    comment: `Some comment to be post`,
  });
});

it(`Reducer should update comment`, () => {
  expect(reviews({
    rating: 0,
  }, {
    type: ActionType.SET_REVIEW_RATING,
    payload: 5
  })).toEqual({
    rating: 5,
  });
});

it(`Reducer should update reviews`, () => {
  expect(reviews({
    reviews: [],
  }, {
    type: ActionType.UPDATE_REVIEWS,
    payload: review
  })).toEqual({
    reviews: [review],
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /comment and fetch reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerId = 2;
    const fetchReviewsLoader = fetchReviews(offerId);

    apiMock
      .onGet(`${APIRoute.COMMENTS}/${offerId}`)
      .reply(200, review);

    return fetchReviewsLoader(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_REVIEWS,
        payload: review
      });
    });
  });
  it(`Should make a correct API call to /comment and post reviews`, () => {
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`${APIRoute.COMMENTS}/1`)
      .reply(200, [review]);
  });
});
