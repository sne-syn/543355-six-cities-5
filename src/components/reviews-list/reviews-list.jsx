import PropTypes from 'prop-types';
import React from 'react';
import ReviewForm from '../review-form/review-form';
import ReviewItem from './../review-item/review-item';
import {AuthorizationStatus} from '../../utils/const';

const MAX_REVIEWS = 10;
const sortReviews = (reviews) => {
  const reviewsSorted = reviews.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return reviewsSorted;
};

const ReviewsList = (props) => {
  const {reviews, authorizationStatus} = props;
  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortReviews(reviews).slice(0, MAX_REVIEWS).map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
      {isLogged && (<ReviewForm />)}
    </section>
  );
};

ReviewsList.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
