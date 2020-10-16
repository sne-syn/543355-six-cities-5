import React from 'react';
import PropTypes from 'prop-types';
import Form from '../form/form';
import StarBar from '../star-bar/star-bar';
import {MONTH_NAMES} from '../../utils/const';

// format date month yyyy
const formateDate = (date) => {
  const monthNumberConverted = Number(date.slice(5, 7).replace(/^0+/, ``));
  const formatedDate = `${MONTH_NAMES[monthNumberConverted - 1]} ${date.slice(0, 4)}`;
  return formatedDate;
};

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
              <StarBar rating={review.rating} />
              <p className="reviews__text">{review.text}
              </p>
              <time className="reviews__time" dateTime={`${review.date.slice(0, 10)}`}>{formateDate(review.date)}</time>
            </div>
          </li>
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
