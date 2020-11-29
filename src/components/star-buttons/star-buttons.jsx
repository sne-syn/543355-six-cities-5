import PropTypes from 'prop-types';
import React from 'react';
import {MAX_RATING} from '../../utils/const';
import {connect} from 'react-redux';
import {getReviewRating} from '../../store/reviews/reviews-selectors';

const starButtonsTitle = {
  5: `perfect`,
  4: `good`,
  3: `not bad`,
  2: `badly`,
  1: `terribly`,
};

const StarButtons = ({onStarClick, rating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {[...Array(MAX_RATING)].map((_star, i) => {
        return (
          <React.Fragment key={i}>
            <input className="form__rating-input visually-hidden" name="rating" value={MAX_RATING - i} id={`${MAX_RATING - i}-star`} type="radio" checked={rating === (MAX_RATING - i)} onChange={onStarClick} />
            <label htmlFor={`${MAX_RATING - i}-star`} className="reviews__rating-label form__rating-label" title={starButtonsTitle[+MAX_RATING - i]}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        );
      }
      )}
    </div>
  );
};

StarButtons.propTypes = {
  onStarClick: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  rating: getReviewRating(state),
});

export {StarButtons};
export default connect(mapStateToProps)(StarButtons);
