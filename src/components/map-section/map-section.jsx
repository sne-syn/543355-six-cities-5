import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';

import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet';

class MapSection extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._pin = leaflet.icon({
      iconUrl: `/img/pin.svg`,
    });

    this._city = [52.38333, 4.9];
    this._zoom = 10;
  }

  _addPin() {
    const offerCords = [52.3709553943508, 4.89309666406198];
    leaflet
      .marker(offerCords, this._pin)
      .addTo(this._map);
  }

  componentDidMount() {
    this._map = leaflet.map(this._mapRef.current, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true,
    });
    this._map.setView(this._city, this._zoom);
    leaflet
    .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {
          attribution: `
            &copy;
            <a href="https://www.openstreetmap.org/copyright">
                OpenStreetMap
            </a> contributors &copy;
            <a href="https://carto.com/attributions">
              CARTO
            </a>
          `,
        }
    )
    .addTo(this._map);
    this._addPin();
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}>
      </div>
    );
  }
}

export default MapSection;

