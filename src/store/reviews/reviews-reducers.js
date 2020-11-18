import {ActionType} from '../action';
import {adaptReviews} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  reviews: [],
  loading: true,
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: adaptReviews(action.payload),
        loading: false,
      });
    default:
      return state;
  }
};
