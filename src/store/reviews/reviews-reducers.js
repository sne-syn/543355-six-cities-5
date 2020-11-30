import {ActionType} from '../action';
import {adaptReviews} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  reviews: [],
  comment: ``,
  rating: 0
};

const updateReviews = (reviews, newReview) => {
  newReview.id = reviews.length + 1;
  const newArray = [...reviews, newReview];
  return newArray;
};

export const reviews = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: adaptReviews(action.payload),
      });
    case ActionType.SET_REVIEW_COMMENT:
      return extend(state, {
        comment: action.payload
      });
    case ActionType.SET_REVIEW_RATING:
      return extend(state, {
        rating: Number(action.payload)
      });
    case ActionType.UPDATE_REVIEWS:
      return extend(state, {
        reviews: updateReviews(state.reviews, action.payload)});
    default:
      return state;
  }
};
