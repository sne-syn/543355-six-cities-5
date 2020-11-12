import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let IconTypes = {
  ICON_DEFAULT: `../img/pin.svg`,
  ICON_ACTIVE: `../img/pin-active.svg`
};

const getIcon = (iconTypes) => {
  let DefaultIcon = leaflet.icon({
    iconID: ``,
    iconUrl: iconTypes,
    shadowUrl: `../${iconShadow}`,
    iconSize: [27, 39],
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
    let marker = leaflet.marker(offer.location, {iconID: offer.id, iconUrl: iconType}).addTo(this._layerGroup);
    return marker;
  }

  _addPins() {
    this._layerGroup.clearLayers();
    this.props.offersToShowOnMap.map((offer) => {
      this._createPin(offer);
    });
  }

  _showActivePin() {
    this._layerGroup.clearLayers();
    let iconToShow;
    this.props.offersToShowOnMap.map((offer) => {
      if (this.props.activeOffer !== offer.id) {
        iconToShow = getIcon(IconTypes.ICON_DEFAULT);
      } else {
        iconToShow = getIcon(IconTypes.ICON_ACTIVE);
      }
      this._createPin(offer, iconToShow);
    });
  }

  componentDidUpdate(prevProps) {
    const {activeCity, offersToShowOnMap} = this.props;
    const {latitude, longitude, zoom} = offersToShowOnMap[0].city.location;
    const shouldUpdateList = activeCity !== prevProps.activeCity;
    if (shouldUpdateList) {
      this._layerGroup.clearLayers();
      this._map.setView([latitude, longitude], zoom);
    }
    this._showActivePin();
  }

  componentDidMount() {
    const {offersToShowOnMap} = this.props;
    const {latitude, longitude, zoom} = offersToShowOnMap[0].city.location;
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
    if (this.props.activeOffer) {
      this._showActivePin();
    } else {
      this._addPins();
    }
  }

  render() {
    return (
      <div id="map" ref={this._mapSection} style={{height: `100%`}} />
    );
  }
}

MapSection.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffer: PropTypes.string.isRequired,
  offersToShowOnMap: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
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
      goods: PropTypes.array.isRequired,
      bedrooms: PropTypes.number.isRequired,
      maxGuests: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      reviews: PropTypes.array.isRequired,
      host: PropTypes.string.isRequired,
      isPremium: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })]).isRequired
};

export default React.memo(MapSection);
