import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getFilteredOffers} from '../../store/offers-data/offers-data-selectors';
import {getHighlightedOfferID} from '../../store/active-card/active-card-selectors';
import {setActiveCardID, resetActiveCardID} from "../../store/action";

const ListCities = (props) => {
  const {children, resetActiveCardIDAction, setActiveCardIDAction} = props;
  return (
    <div className={`cities__places-list tabs__content  places__list`}>
      {React.Children.map(children, (child) => (
        React.cloneElement(child, {
          onMouseEnter: setActiveCardIDAction,
          onMouseLeave: resetActiveCardIDAction
        })
      ))}
    </div>
  );
};

ListCities.propTypes = {
  children: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => ({
  highlightedOfferID: getHighlightedOfferID(state),
  offers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardIDAction(evt) {
    dispatch(setActiveCardID(evt));
  },
  resetActiveCardIDAction() {
    dispatch(resetActiveCardID());
  }
});

export {ListCities};
export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
