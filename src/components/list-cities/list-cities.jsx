import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import CardCities from '../card/card-cities/card-cities';

class ListCities extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardID: ``
    };
    this._setCardMarkerHover = this._setCardMarkerHover.bind(this);
    this._resetCardMarkerHover = this._resetCardMarkerHover.bind(this);
  }

  _setCardMarkerHover(evt) {
    this.setState({
      cardID: evt.currentTarget.id
    });
  }

  _resetCardMarkerHover() {
    this.setState({
      cardID: ``
    });
  }

  render() {
    const {listClass, offersToRender} = this.props;
    return (
      <div className={`${listClass}`}>
        {offersToRender.map((offer) => (
          <CardCities key={offer.id} offer={offer} setCardMarkerHover={this._setCardMarkerHover} resetCardMarkerHover={this._resetCardMarkerHover}/>
        ))
        }
      </div>
    );
  }
}

ListCities.propTypes = {
  listClass: PropTypes.string.isRequired,
  offersToRender: PropTypes.array.isRequired,
};

export default ListCities;
