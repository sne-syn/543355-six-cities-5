import PropTypes from 'prop-types';
import React from 'react';
import withToggler from '../../HOCs/with-toggler';

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

const FavoriteButton = ({toggleComponent, on, componentName}) => {
  const iconSize = getIconSize(componentName);
  return (
    <button className={`${componentName}__bookmark-button button ${on && (`${componentName}__bookmark-button--active`)}`} onClick={toggleComponent} type="button">
      <svg className={`place-card__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${on ? (`In`) : (`To`)} bookmarks`}</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  toggleComponent: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired
};

export default withToggler(FavoriteButton);
