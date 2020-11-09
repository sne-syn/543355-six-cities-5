import React from 'react';
import PropTypes from 'prop-types';
import {MAX_RATING} from '../../utils/const';

const countStarPainting = (rating) => {
  return `${100 / MAX_RATING * rating}%`;
};

const StarBar = ({rating, containerClassName, children}) => {
  return (
    <div className={`${containerClassName}__rating rating`}>
      <div className={`${containerClassName}__stars rating__stars`}>
        <span style={{width: countStarPainting(rating)}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {children}
    </div>
  );
};

StarBar.defaultProps = {
  containerClassName: `place-card`,
  children: ``
};

StarBar.propTypes = {
  containerClassName: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default StarBar;
