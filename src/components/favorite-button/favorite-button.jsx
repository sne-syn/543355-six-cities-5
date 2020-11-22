import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import withToggler from '../../HOCs/with-toggler';
import {addToFavorites} from '../../store/api-actions';
import {updateOffersInStore} from '../../store/action';
import {connect} from 'react-redux';
import {getOffers} from '../../store/offers-data/offers-data-selectors';

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
    this._handleAddToFavorite = this._handleAddToFavorite.bind(this);
  }

  _handleAddToFavorite(id) {
    const {updateOffersInStoreAction, onFavoriteButtonClickAction, offers} = this.props;
    const isFavorite = !this.props.on;
    if (offers !== 0) {
      const offerShouldUpdate = offers.find((offer) => offer.id === id);
      const newOffer = Object.assign({}, offerShouldUpdate, {isFavorite: !this.props.on});
      updateOffersInStoreAction(newOffer, id);
    }

    onFavoriteButtonClickAction(id, Number(isFavorite));
  }

  render() {
    const {toggleComponent, on, componentName, offerId} = this.props;
    const iconSize = getIconSize(componentName);
    return (
      <button className={`${componentName}__bookmark-button button ${on && (`${componentName}__bookmark-button--active`)}`} onClick={() => {
        toggleComponent(); this._handleAddToFavorite(offerId);
      } } type="button">
        <svg className={`place-card__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{`${on ? (`In`) : (`To`)} bookmarks`}</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  componentName: PropTypes.string.isRequired,
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  on: PropTypes.bool.isRequired,
  onFavoriteButtonClickAction: PropTypes.func.isRequired,
  toggleComponent: PropTypes.func.isRequired,
  updateOffersInStoreAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClickAction(id, status) {
    dispatch(addToFavorites(id, status));
  },
  updateOffersInStoreAction(offer) {
    dispatch(updateOffersInStore(offer));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(withToggler(FavoriteButton));
