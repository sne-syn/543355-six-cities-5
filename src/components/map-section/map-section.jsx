import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';

let DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
leaflet.Marker.prototype.options.icon = DefaultIcon;

const CoordinatesMap = {
  AMSTERDAM: [52.38333, 4.9],
  DUSSELDORF: [51.225402, 6.776314],
  COLOGNE: [50.938361, 6.959974],
  HAMBURG: [53.550341, 10.000654],
  PARIS: [48.85661, 2.351499],
  BRUSSELS: [50.846557, 4.351697]
};

const getAreaCoordinats = (city) => {
  return CoordinatesMap[city.toUpperCase()];
};

class MapSection extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = React.createRef();
    this._pin = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });
    this._currentCenter = null;
    this._zoom = 13;

  }

  _addPins() {
    const {offersToRender} = this.props;

    const currentOffersCoords = offersToRender.map((it) => it.location);
    currentOffersCoords.map((it) => {
      leaflet
      .marker(it, this._pin)
      .addTo(this._map);
    });
  }

  componentDidUpdate(prevProps) {
    const shouldUpdate = this.props.currentCity !== prevProps.currentCity;

    if (shouldUpdate) {
      this._map.setView(getAreaCoordinats(this.props.currentCity), this._zoom);
      this._addPins();
    }
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
      <div id="map" ref={this._mapRef} style={{height: `100%`}} />
    );
  }
}

MapSection.propTypes = {
  currentCity: PropTypes.string.isRequired,
  offersToRender: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      features: PropTypes.array.isRequired,
      bedrooms: PropTypes.number.isRequired,
      maxGuests: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      reviews: PropTypes.array.isRequired,
      host: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })]).isRequired
};

export default MapSection;
