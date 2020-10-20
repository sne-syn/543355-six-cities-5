import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

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

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.isFavorite
    };
    this._toggleFavorite = this._toggleFavorite.bind(this);
  }

  _toggleFavorite() {
    this.setState((prevState) => {
      return {
        isFavorite: !prevState.isFavorite
      };
    });
  }

  render() {
    const {componentName} = this.props;
    const iconSize = getIconSize(componentName);
    return (
      <button className={`${componentName}__bookmark-button button ${this.state.isFavorite && (`${componentName}__bookmark-button--active`)}`} onClick={this._toggleFavorite} type="button">
        <svg className={`place-card__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{`${this.state.isFavorite ? (`In`) : (`To`)} bookmarks`}</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  componentName: PropTypes.string.isRequired
};

export default FavoriteButton;
