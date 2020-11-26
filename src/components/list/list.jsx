import Card from '../card-base/card-base';
import PropTypes from 'prop-types';
import React from 'react';
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

const List = (props) => {
  const {type, offers} = props;
  const restProps = Object.assign({}, props);
  delete restProps.offers;
  const componentType = type;
  return (
    <div className={`${getListClass(componentType)} places__list`}>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          {...restProps}
        />
      ))}
    </div>
  );
};

List.propTypes = {
  type: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default List;
