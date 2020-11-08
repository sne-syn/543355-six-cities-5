import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import '../../../node_modules/leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconActive from '../../../public/img/pin-active.svg';

let IconTypes = {
  ICON_DEFAULT: icon,
  ICON_ACTIVE: iconActive
};
let marker;

const getIcon = (iconTypes) => {
  let DefaultIcon = leaflet.icon({
    iconID: ``,
    iconUrl: iconTypes,
    shadowUrl: iconShadow,
    iconSize: [24, 36],
    iconAnchor: [12, 36]
  });
  leaflet.Marker.prototype.options.icon = DefaultIcon;
  return DefaultIcon;
};

class MapSection extends PureComponent {
  constructor(props) {
    super(props);
    this._mapSection = React.createRef();
    this._map = null;
    this._layerGroup = null;
  }

  _createPin(offer, iconType = getIcon(IconTypes.ICON_DEFAULT)) {
    marker = leaflet.marker(offer.location, {iconID: offer.id, iconUrl: iconType}).addTo(this._layerGroup);
    return marker;
  }

  _addPins() {
    this._layerGroup.clearLayers();
    this.props.unsortedOffers.map((offer) => {
      this._createPin(offer);
    });
  }

  _showActivePin() {
    this._layerGroup.clearLayers();
    let iconToShow;
    this.props.unsortedOffers.map((offer) => {
      if (this.props.highlightedOfferID !== offer.id) {
        iconToShow = getIcon(IconTypes.ICON_DEFAULT);
      } else {
        iconToShow = getIcon(IconTypes.ICON_ACTIVE);
      }
      this._createPin(offer, iconToShow);
    });
  }

  componentDidUpdate(prevProps) {
    const {activeElement, unsortedOffers} = this.props;
    const {latitude, longitude, zoom} = unsortedOffers[0].city.location;
    const shouldUpdateList = activeElement !== prevProps.activeElement;
    if (shouldUpdateList) {
      this._layerGroup.clearLayers();
      this._map.setView([latitude, longitude], zoom);
    }
    this._showActivePin();
  }

  componentDidMount() {
    const {unsortedOffers} = this.props;
    const {latitude, longitude, zoom} = unsortedOffers[0].city.location;
    this._map = leaflet.map(this._mapSection.current, {
      center: [latitude, longitude],
      zoom,
      zoomControl: false,
      marker: true,
    });

    this._map.setView([latitude, longitude], zoom);

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
  activeElement: PropTypes.string.isRequired,
  highlightedOfferID: PropTypes.string.isRequired,
  unsortedOffers: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      city: PropTypes.shape({
        location: PropTypes.shape({
          latitude: PropTypes.number.isRequired,
          longitude: PropTypes.number.isRequired,
          zoom: PropTypes.number.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
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
    activeElement: state.activeElement,
    unsortedOffers: state.unsortedOffers,
    highlightedOfferID: state.highlightedOfferID
  };
}

export {MapSection};
export default connect(mapStateToProps)(MapSection);
