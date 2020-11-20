import {ActionType} from '../action';
import {adaptReviews} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  reviews: [],
  loading: true,
  comment: ``,
  rating: ``,
  date: ``
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: adaptReviews(action.payload),
        loading: false,
      });
    case ActionType.POST_REVIEW:
      return extend(state, {
        reviews: adaptReviews([...state.reviews, {
          comment: action.payload.comment,
          rating: action.payload.rating
        }]),
      });
    default:
      return state;
  }
};
