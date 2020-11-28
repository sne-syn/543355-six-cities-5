import List from '../list/list';
import React from 'react';
import {connect} from 'react-redux';
import {getFilteredOffers} from '../../store/offers-data/offers-data-selectors';
import {getHighlightedOfferId} from '../../store/active-card/active-card-selectors';
import {setActiveCardId, resetActiveCardId} from "../../store/action";

const ListHoverOnMap = (props) => {
  return (
    <List {...props}/>
  );
};

const mapStateToProps = (state) => ({
  highlightedOfferID: getHighlightedOfferId(state),
  offers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardIdAction(evt) {
    dispatch(setActiveCardId(evt.currentTarget.id));
  },
  resetActiveCardIdAction() {
    dispatch(resetActiveCardId());
  }
});

export {ListHoverOnMap};
export default connect(mapStateToProps, mapDispatchToProps)(ListHoverOnMap);
