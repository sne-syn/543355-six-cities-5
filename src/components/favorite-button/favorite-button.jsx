import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import withToggler from '../../HOCs/with-toggler/with-toggler';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {addToFavorites} from '../../store/api-actions';
import {redirectToRoute, updateNearPlacesInStore, updateOfferItemInStore, updateOffersInStore} from '../../store/action';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/user-data-selectors';
import {getNearPlaces} from '../../store/near-places/near-places-selectors';
import {getOfferItem} from '../../store/offer-item/offer-item-selectors';
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
    this._handleItemUpdate = this._handleItemUpdate.bind(this);
    this._handleOffersUpdate = this._handleOffersUpdate.bind(this);
  }

  _handleItemUpdate(item) {
    const newItem = Object.assign({}, item, {isFavorite: !this.props.on});
    return newItem;
  }

  _handleOffersUpdate(id, action, offers) {
    const offerShouldUpdate = offers.find((offer) => offer.id === id);
    if (offerShouldUpdate) {
      action(this._handleItemUpdate(offerShouldUpdate), id);
    }
  }

  _handleAddToFavorite(id) {
    const {nearPlaces, offerItem, offers, onFavoriteButtonClickAction, updateNearPlacesInStoreAction, updateOfferItemInStoreAction, updateOffersInStoreAction} = this.props;
    const isFavorite = !this.props.on;

    if (nearPlaces.length !== 0) {
      this._handleOffersUpdate(id, updateNearPlacesInStoreAction, nearPlaces);
    }
    if (offers.length !== 0) {
      this._handleOffersUpdate(id, updateOffersInStoreAction, offers);
    }
    if (offerItem && offerItem.id === id) {
      updateOfferItemInStoreAction(this._handleItemUpdate(offerItem));
    }
    onFavoriteButtonClickAction(id, Number(isFavorite));
  }

  render() {
    const {authorizationStatus, componentName, offerId, on, redirectToLoginAction, toggleComponent} = this.props;
    const isLogged = authorizationStatus === AuthorizationStatus.AUTH;
    let buttonClass = `${componentName}__bookmark-button button `;
    buttonClass += (on) ? `${componentName}__bookmark-button--active` : ``;
    const iconSize = getIconSize(componentName);
    const favoriteButtonPlaceholder = `${on ? (`In`) : (`To`)} bookmarks`;
    const onClickActions = isLogged ? () => {
      toggleComponent(); this._handleAddToFavorite(offerId);
    } : redirectToLoginAction;

    return (
      <button className={buttonClass} onClick={onClickActions} type="button">
        <svg className={`place-card__bookmark-icon`} width={`${iconSize.width}`} height={`${iconSize.height}`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{favoriteButtonPlaceholder}</span>
      </button>
    );
  }
}

FavoriteButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
  nearPlaces: PropTypes.array.isRequired,
  offerItem: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        zoom: PropTypes.number,
      }),
      name: PropTypes.string,
    }),
    title: PropTypes.string,
    images: PropTypes.array,
    price: PropTypes.number,
    type: PropTypes.string,
    rating: PropTypes.number,
    goods: PropTypes.array,
    bedrooms: PropTypes.number,
    maxGuests: PropTypes.number,
    description: PropTypes.string,
    host: PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isPro: PropTypes.bool
    }),
    isPremium: PropTypes.bool,
    isFavorite: PropTypes.bool,
  }).isRequired,
  offerId: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  on: PropTypes.bool.isRequired,
  onFavoriteButtonClickAction: PropTypes.func.isRequired,
  redirectToLoginAction: PropTypes.func.isRequired,
  toggleComponent: PropTypes.func.isRequired,
  updateOfferItemInStoreAction: PropTypes.func.isRequired,
  updateOffersInStoreAction: PropTypes.func.isRequired,
  updateNearPlacesInStoreAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  offerItem: getOfferItem(state),
  offers: getOffers(state),
  nearPlaces: getNearPlaces(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClickAction(id, status) {
    dispatch(addToFavorites(id, status));
  },
  updateOffersInStoreAction(offer) {
    dispatch(updateOffersInStore(offer));
  },
  updateNearPlacesInStoreAction(offer) {
    dispatch(updateNearPlacesInStore(offer));
  },
  updateOfferItemInStoreAction(offer) {
    dispatch(updateOfferItemInStore(offer));
  },
  redirectToLoginAction() {
    dispatch(redirectToRoute(AppRoute.LOGIN));
  }
});

export {FavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(withToggler(FavoriteButton));
