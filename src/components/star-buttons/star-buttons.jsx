import React from 'react';
import PropTypes from 'prop-types';
const COUNT_STARS = 5;

const StarButtons = ({onStarClick}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {[...Array(COUNT_STARS)].map((star, i) => {
        return (
          <React.Fragment key={i}>
            <input className="form__rating-input visually-hidden" name="rating" value={COUNT_STARS - i} id={`${COUNT_STARS - i}-star`} type="radio" onClick={onStarClick}/>
            <label htmlFor={`${COUNT_STARS - i}-star`} className="reviews__rating-label form__rating-label" title="terribly">
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

export default StarButtons;
