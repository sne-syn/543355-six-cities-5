import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/form';
import {
  addLeadingZero
} from '../../utils/common.js';
import {
  MONTH_NAMES,
} from '../../utils/const';

// format date month yyyy
const formateDate = (date) => {
  const formatedDate = `${MONTH_NAMES[date.month]} ${date.year}`;
  return formatedDate;
};

const ReviewsList = ({reviews}) => {
  console.log(reviews[0].date)
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(0, 10).map((review) => (
          <li key={review.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={review.avatar} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {review.author}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${100 / 5 * Math.floor(review.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{review.text}
              </p>
              <time className="reviews__time" dateTime={`${review.date.year}-${addLeadingZero(review.date.month)}-${addLeadingZero(review.date.day)}`}>{formateDate(review.date)}</time>
            </div>
          </li>
        ))}
      </ul>
      <Form />
    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
