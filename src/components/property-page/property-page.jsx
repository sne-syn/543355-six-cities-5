import FavoriteButton from '../favorite-button/favorite-button';
import Header from '../header/header';
import Host from '../host/host';
import Loader from '../loader/loader';
import MapSection from '../map-section/map-section';
import NearPlaces from '../near-places/near-places';
import PremiumMark from '../premium-mark/premium-mark';
import PropTypes from 'prop-types';
import PropertyFeatures from '../property-features/property-features';
import React, {PureComponent} from 'react';
import ReviewsList from '../reviews-list/reviews-list';
import StarBar from '../star-bar/star-bar';
import {capitalizeChar} from '../../utils/common';
import {connect} from 'react-redux';
import {getNearPlaces} from '../../store/near-places/near-places-selectors';
import {getOfferItem, getOfferItemId, getOfferItemLoadingStatus} from '../../store/offer-item/offer-item-selectors';
import {fetchPropertyPage} from '../../store/api-actions';

const COUNT_OFFER_IMAGES = 6;

class PropertyPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPropertyPageAction(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.fetchPropertyPageAction(this.props.id);
      window.scrollTo(0, 0);
    }
  }

  render() {
    const {offer, loading, nearPlaces} = this.props;
    return (
      <div className="page">
        <Header/>
        {loading ? (<Loader />) : (
          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {offer.images.slice(0, COUNT_OFFER_IMAGES).map((img, i) => (
                    <div key={i} className="property__image-wrapper">
                      <img className="property__image" src={img} alt="Photo studio" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {offer.isPremium && (<PremiumMark componentName={`property`}/>)}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {offer.title}
                    </h1>
                    <FavoriteButton defaultOnValue={offer.isFavorite} componentName={`property`} offerId={offer.id}/>
                  </div>
                  <StarBar rating={offer.rating} containerClassName={`property`}>
                    <span className="property__rating-value rating__value">{offer.rating.toFixed(1)}</span>
                  </ StarBar>
                  <PropertyFeatures type={offer.type} bedrooms={offer.bedrooms} maxGuests={offer.maxGuests} />
                  <div className="property__price">
                    <b className="property__price-value">&euro;{offer.price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {offer.goods.map((feature, i) => (
                        <li key={i} className="property__inside-item">
                          {capitalizeChar(feature)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Host description={offer.description} host={offer.host} {...this.props}/>
                  <ReviewsList {...this.props}/>
                </div>
              </div>
              <section className="property__map map">
                <MapSection activeCity={offer.city.name} offersToShowOnMap={[].concat([...nearPlaces], offer)} activeOffer={offer.id}/>
              </section>
            </section>
            <div className="container">
              <NearPlaces offers={nearPlaces}/>
            </div>
          </main>
        )}
      </div>
    );
  }
}

PropertyPage.propTypes = {
  id: PropTypes.string.isRequired,
  fetchPropertyPageAction: PropTypes.func.isRequired,
  nearPlaces: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    goods: PropTypes.array.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  offer: getOfferItem(state),
  offerItemId: getOfferItemId(state),
  loading: getOfferItemLoadingStatus(state),
  nearPlaces: getNearPlaces(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchPropertyPageAction(id) {
    dispatch(fetchPropertyPage(id));
  }
});

export {PropertyPage};
export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
