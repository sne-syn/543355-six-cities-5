import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class FavoriteButton extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.isFavorite
    };
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    this.setState((prevState) => {
      return {
        isFavorite: !prevState.isFavorite
      };
    });
  }

  render() {
    const {componentName, iconWidth, iconHeight} = this.props;
    return (
      <button className={`${componentName}__bookmark-button button ${this.state.isFavorite && (`${componentName}__bookmark-button--active`)}`} onClick={this.toggleFavorite} type="button">
        <svg className={`place-card__bookmark-icon`} width={`${iconWidth}`} height={`${iconHeight}`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{`${this.state.isFavorite ? (`In`) : (`To`)} bookmarks`}</span>
      </button>
    );
  }
}

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
