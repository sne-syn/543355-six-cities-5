import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconActive from '../../../public/img/pin-active.svg';

const CoordinatesMap = {
  AMSTERDAM: [52.38333, 4.9],
  DUSSELDORF: [51.225402, 6.776314],
  COLOGNE: [50.938361, 6.959974],
  HAMBURG: [53.550341, 10.000654],
  PARIS: [48.85661, 2.351499],
  BRUSSELS: [50.846557, 4.351697]
};

let IconTypes = {
  ICON_DEFAULT: icon,
  ICON_ACTIVE: iconActive
};

const getIcon = (iconTypes) => {
  let DefaultIcon = leaflet.icon({
    iconUrl: iconTypes,
    shadowUrl: iconShadow,
    iconSize: [24, 36],
    iconAnchor: [12, 36]
  });
  leaflet.Marker.prototype.options.icon = DefaultIcon;
  return DefaultIcon;
};

const getAreaCoordinats = (city) => {
  return CoordinatesMap[city.toUpperCase()];
};

class MapSection extends PureComponent {
  constructor(props) {
    super(props);
    this._mapSection = React.createRef();
    this._map = null;
    this._layerGroup = null;
    this._zoom = 13;
  }

  _addPins() {
    this._layerGroup.clearLayers();
    this.props.unsortedOffers.map((it) => {
      const marker = leaflet.marker(it.location, {pin: getIcon(IconTypes.ICON_DEFAULT)}).addTo(this._layerGroup);
      return marker;
    });
  }

  _showActivePin() {
    this._layerGroup.clearLayers();
    let iconToShow;
    this.props.unsortedOffers.map((it) => {
      if (this.props.highlightedOfferID !== it.id) {
        iconToShow = getIcon(IconTypes.ICON_DEFAULT);
      } else {
        iconToShow = getIcon(IconTypes.ICON_ACTIVE);
      }
      const marker = leaflet.marker(it.location, {pin: iconToShow}).addTo(this._layerGroup);
      return marker;
    });
  }

  componentDidUpdate(prevProps) {
    const shouldUpdate = this.props.currentCity !== prevProps.currentCity;
    if (shouldUpdate) {
      this._layerGroup.clearLayers();
      this._map.setView(getAreaCoordinats(this.props.currentCity), this._zoom);
    }
    this._showActivePin();
  }

  componentDidMount() {
    const {currentCity} = this.props;
    this._map = leaflet.map(this._mapSection.current, {
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
    this._layerGroup = leaflet.layerGroup().addTo(this._map);
    this._addPins();
  }

  render() {
    return (
      <div id="map" ref={this._mapSection} style={{height: `100%`}} />
    );
  }
}

MapSection.propTypes = {
  currentCity: PropTypes.string.isRequired,
  highlightedOfferID: PropTypes.string.isRequired,
  unsortedOffers: PropTypes.oneOfType([
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

function mapStateToProps(state) {
  return {
    currentCity: state.activeElement,
    unsortedOffers: state.unsortedOffers,
    highlightedOfferID: state.highlightedOfferID
  };
}

export {MapSection};
export default connect(mapStateToProps)(MapSection);
