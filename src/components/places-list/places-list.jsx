import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
  }

  render() {
    const {cardListClass, offers, onCardClick, cardsCount} = this.props;
    return (
      <div className={`${cardListClass} places__list`}>
        {offers.slice(0, cardsCount).map((offer) => (
          <PlaceCard
            key={offer.id}
            containerCardClass={`cities__place-card`}
            imageCardClass={`cities__image-wrapper`}
            offer={offer}
            onCardHover={(evt) => this.setState({card: evt.currentTarget})}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    );
  }
}

PlacesList.propTypes = {
  cardListClass: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
  cardsCount: PropTypes.number.isRequired,
};

export default PlacesList;
