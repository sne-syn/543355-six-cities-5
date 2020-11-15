import React from 'react';
import {connect} from 'react-redux';
import {setActiveCardID, resetActiveCardID} from "../../store/action";
import {getHighlightedOfferID} from '../../store/active-card/active-card-selectors';
import {getFilteredOffers} from '../../store/offers-data/offers-data-selectors';
import List from '../list/list';

const ListHoverOnMap = (props) => {
  return (
    <List {...props}/>
  );
};

const mapStateToProps = (state) => ({
  highlightedOfferID: getHighlightedOfferID(state),
  offers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardID(evt) {
    dispatch(setActiveCardID(evt));
  },
  resetActiveCardID() {
    dispatch(resetActiveCardID());
  }
});

export {ListHoverOnMap};
export default connect(mapStateToProps, mapDispatchToProps)(ListHoverOnMap);
