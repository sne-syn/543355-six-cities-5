import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class ListHoverOnMap extends PureComponent {
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
    console.log(this.state.cardID);
    return (
      <React.Fragment>
        {this.props.renderWithCardHover()}
      </React.Fragment>
    );
  }
}

ListHoverOnMap.propTypes = {
  renderWithCardHover: PropTypes.func.isRequired
};

export default ListHoverOnMap;
