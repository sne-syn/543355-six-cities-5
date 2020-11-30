import CardDetails from '../card-details/card-details';
import PropTypes from 'prop-types';
import React from 'react';
import {offerPropTypesMock} from '../../utils/prop-types-mocks';

const CardCities = (props) => {
  const {offer, setActiveCardIdAction, resetActiveCardIdAction} = props;
  return (
    <article id={`${offer.id}`} className={`place-card cities__place-card`} onMouseEnter={setActiveCardIdAction} onMouseLeave={resetActiveCardIdAction}>
      <CardDetails offer={offer} {...props}/>
    </article>
  );
};

CardCities.propTypes = {
  offer: offerPropTypesMock,
  setActiveCardIdAction: PropTypes.func.isRequired,
  resetActiveCardIdAction: PropTypes.func.isRequired
};

export default CardCities;
