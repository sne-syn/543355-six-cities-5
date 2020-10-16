import React from 'react';
import PropTypes from 'prop-types';
import {MAX_RATING} from '../../utils/const';

const StarBar = ({rating, containerClassName, children}) => {
  const countStarPainting = `${100 / MAX_RATING * rating}%`;
  return (
    <div className={`${containerClassName}__rating rating`}>
      <div className={`${containerClassName}__stars rating__stars`}>
        <span style={{width: countStarPainting}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};

StarBar.defaultProps = {
  containerClassName: `place-card`,
  children: null
};

StarBar.propTypes = {
  containerClassName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  children: PropTypes.element,
};

export default StarBar;
