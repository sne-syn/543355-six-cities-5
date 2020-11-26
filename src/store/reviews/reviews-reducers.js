import {ActionType} from '../action';
import {adaptReviews} from '../../utils/adapter';
import {extend} from '../../utils/common';

const initialState = {
  reviews: [],
  loading: true,
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
        loading: false,
      });
    case ActionType.SET_REVIEW_COMMENT:
      return extend(state, {
        comment: action.payload.target.value
      });
    case ActionType.SET_REVIEW_RATING:
      return extend(state, {
        rating: Number(action.payload.target.value)
      });
    case ActionType.UPDATE_REVIEWS:
      return extend(state, {
        reviews: updateReviews(state.reviews, action.payload)});
    default:
      return state;
  }
};
