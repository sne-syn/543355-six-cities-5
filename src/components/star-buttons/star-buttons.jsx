import React from 'react';
import PropTypes from 'prop-types';
import {MAX_RATING} from '../../utils/const';

const StarButtons = ({onStarClick}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {[...Array(MAX_RATING)].map((star, i) => {
        return (
          <React.Fragment key={i}>
            <input className="form__rating-input visually-hidden" name="rating" value={MAX_RATING - i} id={`${MAX_RATING - i}-star`} type="radio" onClick={onStarClick}/>
            <label htmlFor={`${MAX_RATING - i}-star`} className="reviews__rating-label form__rating-label" title="terribly">
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
