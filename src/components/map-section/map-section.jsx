import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const CoordinatesMap = {
  PARIS: [48.85341, 2.3488],
  AMSTERDAM: [52.38333, 4.9],
};

const getAreaCoordinats = (city) => {
  return CoordinatesMap[city.toUpperCase()];
};

class MapSection extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._pin = leaflet.icon({
      iconUrl: `/img/pin.svg`,
    });
    this._currentCenter = null;
    this._zoom = 10;
  }

  _addPins() {
    const {filteredOffers} = this.props;
    const currentOffersCoords = filteredOffers.map((it) => it.location);
    currentOffersCoords.map((it) => {
      leaflet
      .marker(it, this._pin)
      .addTo(this._map);
    });
  }

  // временная консоль
  componentDidUpdate() {
    console.log(this.props.currentCity);
  }

  componentDidMount() {
    const {currentCity} = this.props;
    this._map = leaflet.map(this._mapRef.current, {
      center: getAreaCoordinats(currentCity),
      zoom: this._zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView(getAreaCoordinats(currentCity), this._zoom);

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
    this._addPins();
  }

  render() {
    return (
      <div id="map" ref={this._mapRef} style={{height: `100%`}}>
      </div>
    );
  }
}

MapSection.propTypes = {
  currentCity: PropTypes.string.isRequired,
  filteredOffers: PropTypes.array.isRequired
};

export default MapSection;

