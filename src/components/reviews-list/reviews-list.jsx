import Form from '../form/form';
import PropTypes from 'prop-types';
import React from 'react';
import ReviewItem from './../review-item/review-item';
import {AuthorizationStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/user-data-selectors';

const ReviewsList = ({reviews, authorizationStatus}) => {
  const reviewsSorted = reviews.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });

  const isLogged = (authorizationStatus === AuthorizationStatus.AUTH) ? 1 : 0;

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
  authorizationStatus: PropTypes.string.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
