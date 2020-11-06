import React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import List from '../list/list';

const ListHoverOnMap = (props) => {
  return (
    <List {...props}/>
  );
};

function mapStateToProps(state) {
  return {
    highlightedOfferID: state.highlightedOfferID,
    offers: state.filteredOffers
  };
}

const mapDispatchToProps = (dispatch) => ({
  setActiveCardID(evt) {
    dispatch(ActionCreator.setActiveCardID(evt));
  },
  resetActiveCardID() {
    dispatch(ActionCreator.resetActiveCardID());
  }
});

export {ListHoverOnMap};
export default connect(mapStateToProps, mapDispatchToProps)(ListHoverOnMap);
