import React from 'react';
import PropTypes from 'prop-types';

const IconSize = new Map();
IconSize.set(`property`, {
  width: 31,
  height: 33
});
IconSize.set(`place-card`, {
  width: 18,
  height: 19
});

const FavoriteButton = ({isFavorite, componentName}) => {
  const iconSize = IconSize.get(componentName);
  return (
    <button className={`${componentName}__bookmark-button button ${isFavorite && (`${componentName}__bookmark-button--active`)}`} type="button">
      <svg className={`${componentName}__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${isFavorite ? (`In`) : (`To`)} bookmarks`}</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired
};

export default FavoriteButton;
