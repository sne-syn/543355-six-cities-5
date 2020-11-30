import FavoriteButton from '../favorite-button/favorite-button';
import PremiumMark from '../premium-mark/premium-mark';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import StarBar from '../star-bar/star-bar';
import {AccomodationTypes, ComponentType} from '../../utils/const';
import {Link} from 'react-router-dom';
import {offerPropTypesMock} from '../../utils/prop-types-mocks';

const getImageSize = (type) => {
  switch (type) {
    case ComponentType.FAVORITE:
      return {
        width: 150,
        height: 110,
      };
    default:
      return {
        width: 260,
        height: 200,
      };
  }
};

class CardDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, offer} = this.props;
    const imageSize = getImageSize(type);
    return (
      <React.Fragment>
        {offer.isPremium && (<PremiumMark componentName={`place-card`}/>)}
        <div className={`${type}__image-wrapper place-card__image-wrapper`}>
          <Link to={`/hotels/${offer.id}`}>
            <img className="place-card__image" src={offer.previewImage} width={imageSize.width} height={imageSize.height} alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <FavoriteButton defaultOnValue={offer.isFavorite} componentName={`place-card`} offerId={offer.id} type={type}/>
          </div>
          <StarBar rating={offer.rating} />
          <h2 className="place-card__name">
            <Link to={`/hotels/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{AccomodationTypes[offer.type]}</p>
        </div>
      </React.Fragment>
    );
  }
}

CardDetails.propTypes = {
  type: PropTypes.string.isRequired,
  offer: offerPropTypesMock,
};

export default CardDetails;
