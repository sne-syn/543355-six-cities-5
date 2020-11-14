import {extend} from '../../utils/common';
import {ActionType} from '../action';
import {adaptReviews} from '../../utils/adapter';

const initialState = {
  reviews: [],
  loadingReviews: false,
};

const loadingDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOADING_REVIEWS:
      return extend(state, {
        reviews: adaptReviews(action.payload),
      });
    default:
      return state;
  }
};

export default loadingDataReducer;
