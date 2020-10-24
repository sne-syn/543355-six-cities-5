import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import {ComponentType} from '../../utils/const';

const getListClass = (type) => {
  switch (type) {
    case ComponentType.CITIES:
      return `cities__places-list tabs__content`;
    case ComponentType.NEAR:
      return `near-places__list`;
  }

  return ``;
};

const List = ({type, offers}) => {
  const componentType = type;
  return (
    <div className={`${getListClass(componentType)} places__list`}>
      {offers.map((offer) => (
        <Card cardType={componentType} key={offer.id} offer={offer} />
      ))}
    </div>
  );
};

List.propTypes = {
  type: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default List;
