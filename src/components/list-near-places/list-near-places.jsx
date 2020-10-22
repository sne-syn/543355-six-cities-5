import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardNearPlaces from '../card/card-near-places/card-near-places';

class ListNearPlaces extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      card: null
    };
    this._handleCardHover = this._handleCardHover.bind(this);
  }

  _handleCardHover(evt) {
    this.setState({
      card: evt
    });
  }

  render() {
    const {listClass, offers} = this.props;
    return (
      <div className={`${listClass}`}>
        {offers.map((offer) => (
          <CardNearPlaces key={offer.id} offer={offer} onCardHover={this._handleCardHover}/>
        ))}
      </div>
    );
  }
}

ListNearPlaces.propTypes = {
  listClass: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default ListNearPlaces;
