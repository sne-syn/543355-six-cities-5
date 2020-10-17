import React from 'react';
import PropTypes from 'prop-types';

const FavoriteButton = ({isFavorite, componentName, iconWidth, iconHeight}) => {
  return (
    <button className={`${componentName}__bookmark-button button ${isFavorite && (`${componentName}__bookmark-button--active`)}`} type="button">
      <svg className={`place-card__bookmark-icon`} width={`${iconWidth}`} height={`${iconHeight}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? (`In`) : (`To`)} bookmarks`}</span>
    </button>
  );
};

FavoriteButton.defaultProps = {
  iconWidth: 18,
  iconHeight: 19
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired,
  iconWidth: PropTypes.number.isRequired,
  iconHeight: PropTypes.number.isRequired,
};

export default FavoriteButton;
