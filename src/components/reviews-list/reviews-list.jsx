import React from 'react';
import PropTypes from 'prop-types';
import ReviewItem from './../review-item/review-item';
import Form from '../form/form';

const ReviewsList = ({reviews, isLogged}) => {
  const reviewsSorted = reviews.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsSorted.slice(0, 10).map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
      {isLogged && (<Form />)}
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired
};

export default ReviewsList;
