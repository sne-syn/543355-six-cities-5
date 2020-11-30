import {activeCard} from './active-card-reducers';
import {ActionType} from '../action';

it(`Reducer without additional parameters should return an initial state`, () => {
  expect(activeCard(void 0, {})).toEqual({
    highlightedOfferId: ``,
  });
});

it(`Reducer should update highlightedOfferId with id from the payload`, () => {
  expect(activeCard({
    highlightedOfferId: ``,
  }, {
    type: ActionType.SET_ACTIVE_CARD_ID,
    payload: 4
  })).toEqual({
    highlightedOfferId: 4,
  });
});

it(`Reducer should reset highlightedOfferId with an empty string`, () => {
  expect(activeCard({
    highlightedOfferId: 5,
  }, {
    type: ActionType.RESET_ACTIVE_CARD_ID
  })).toEqual({
    highlightedOfferId: ``,
  });
});
