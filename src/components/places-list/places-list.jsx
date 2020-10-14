import React, {PureComponent} from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
const PLACE_CARD_COUNT = 4;

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
  }

  render() {
    const {offers, onCardClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.slice(0, PLACE_CARD_COUNT).map((offer) => (
          <PlaceCard
            key={offer.id}
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
  offers: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default withRouter(PlacesList);
