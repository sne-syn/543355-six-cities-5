import React, {PureComponent} from 'react';
import List from '../list/list';

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
    return (
      <List resetCardMarkerHover={this._resetCardMarkerHover} setCardMarkerHover={this._setCardMarkerHover} {...this.props}/>
    );
  }
}

export default ListHoverOnMap;
