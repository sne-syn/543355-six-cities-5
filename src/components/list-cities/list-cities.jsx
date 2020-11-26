import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getFilteredOffers} from '../../store/offers-data/offers-data-selectors';
import {getHighlightedOfferId} from '../../store/active-card/active-card-selectors';
import {setActiveCardId, resetActiveCardId} from "../../store/action";

const ListCities = (props) => {
  const {children, resetActiveCardIdAction, setActiveCardIdAction} = props;
  return (
    <div className={`cities__places-list tabs__content  places__list`}>
      {React.Children.map(children, (child) => {
        return (
          React.cloneElement(child, {
            onMouseEnter: setActiveCardIdAction,
            onMouseLeave: resetActiveCardIdAction
          })
        );
      })}
    </div>
  );
};

ListCities.propTypes = {
  children: PropTypes.any.isRequired,
  resetActiveCardIdAction: PropTypes.func.isRequired,
  setActiveCardIdAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  highlightedOfferId: getHighlightedOfferId(state),
  offers: getFilteredOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardIdAction(evt) {
    dispatch(setActiveCardId(evt));
  },
  resetActiveCardIdAction() {
    dispatch(resetActiveCardId());
  }
});

export {ListCities};
export default connect(mapStateToProps, mapDispatchToProps)(ListCities);
