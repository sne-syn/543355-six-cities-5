import React from 'react';
import PropTypes from 'prop-types';
import StarBar from '../star-bar/star-bar';
import {MONTH_NAMES} from '../../utils/const';

// format date month yyyy
const formateDate = (date) => {
  const monthNumberConverted = Number(date.slice(5, 7).replace(/^0+/, ``));
  const formatedDate = `${MONTH_NAMES[monthNumberConverted - 1]} ${date.slice(0, 4)}`;
  return formatedDate;
};

const ReviewItem = ({review}) => {
  const {avatar, author, rating, text, date} = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <StarBar rating={rating} />
        <p className="reviews__text">{text}
        </p>
        <time className="reviews__time" dateTime={`${date.slice(0, 10)}`}>{formateDate(date)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: PropTypes.PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default ReviewItem;
