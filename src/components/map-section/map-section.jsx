import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import leaflet from 'leaflet';
import {offerPropTypesMock} from '../../utils/prop-types-mocks';

const TITLE_LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const ATTRIBUTION = ` &copy;
<a href="https://www.openstreetmap.org/copyright">
    OpenStreetMap
</a> contributors &copy;
<a href="https://carto.com/attributions">
  CARTO
</a>
`;

const MAP_HEIGHT = 100;
let IconTypes = {
  ICON_DEFAULT: `../img/pin.svg`,
  ICON_ACTIVE: `../img/pin-active.svg`,
};

const getIcon = (iconTypes) => {
  let DefaultIcon = leaflet.icon({
    iconId: ``,
    iconUrl: iconTypes,
    shadowUrl: `../${iconShadow}`,
    iconSize: [27, 39],
    iconAnchor: [12, 36],
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
    this._createPin = this._createPin.bind(this);
    this._addPins = this._addPins.bind(this);
  }

  _createPin(offer, iconType = getIcon(IconTypes.ICON_DEFAULT)) {
    let marker = leaflet
      .marker([offer.location.latitude, offer.location.longitude], {iconId: offer.id, iconUrl: iconType})
      .addTo(this._layerGroup);
    return marker;
  }

  _addPins() {
    this._layerGroup.clearLayers();
    let iconToShow;
    this.props.offersToShowOnMap.map((offer) => {
      if (+this.props.activeOffer === offer.id) {
        iconToShow = getIcon(IconTypes.ICON_ACTIVE);
        return this._createPin(offer, iconToShow);
      }

      iconToShow = getIcon(IconTypes.ICON_DEFAULT);
      return this._createPin(offer, iconToShow);
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
    this._addPins();
  }

  componentDidMount() {
    const {offersToShowOnMap} = this.props;
    const {latitude, longitude, zoom} = offersToShowOnMap[0].city.location;
    this._map = leaflet
      .map(this._mapSection.current, {
        center: [latitude, longitude],
        zoom,
        zoomControl: true,
        marker: true,
      });

    this._map.setView([latitude, longitude], zoom);

    leaflet
      .tileLayer(TITLE_LAYER, {attribution: ATTRIBUTION})
      .addTo(this._map);
    this._layerGroup = leaflet.layerGroup().addTo(this._map);
    this._addPins();
  }

  render() {
    return (
      <div id="map" ref={this._mapSection} style={{height: `${MAP_HEIGHT}%`}} />
    );
  }
}

MapSection.propTypes = {
  activeCity: PropTypes.string.isRequired,
  activeOffer: PropTypes.number.isRequired,
  offersToShowOnMap: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    offerPropTypesMock]).isRequired
};

export default React.memo(MapSection);
