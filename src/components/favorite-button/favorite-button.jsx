import React from 'react';
import PropTypes from 'prop-types';
import Toggler from '../toggler/toggler';

const getIconSize = (componentName) => {
  return (componentName === `property`) ? {
    width: 31,
    height: 33,
  } :
    {
      width: 18,
      height: 19,
    };
};

const FavoriteButton = ({isFavorite, componentName}) => {
  const iconSize = getIconSize(componentName);
  return (
    <Toggler defaultOnValue={isFavorite} renderWithToggle={
      (on, toggleComponent) => {
        return (
          <button className={`${componentName}__bookmark-button button ${on && (`${componentName}__bookmark-button--active`)}`} onClick={toggleComponent} type="button">
            <svg className={`place-card__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{`${on ? (`In`) : (`To`)} bookmarks`}</span>
          </button>
        );
      }
    }
    />
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired
};

export default FavoriteButton;
