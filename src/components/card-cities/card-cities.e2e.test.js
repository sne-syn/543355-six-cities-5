import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {offer} from '../../test-data/offer-test-data';
import {ComponentType} from '../../utils/const';
import CardCities from './card-cities';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should callback be called on mouse enter and mouse leave actions`, () => {
  const resetActiveCardIdAction = jest.fn();
  const setActiveCardIdAction = jest.fn();

  const wrapper = shallow(
      <CardCities
        offer={offer}
        type={ComponentType.CITIES}
        highlightedOfferID={`0`}
        resetActiveCardIdAction={resetActiveCardIdAction}
        setActiveCardIdAction={setActiveCardIdAction}>
        <React.Fragment />
      </CardCities>

  );

  const card = wrapper.find(`.cities__place-card`);

  card.simulate(`mouseenter`, mockEvent);
  expect(setActiveCardIdAction).toHaveBeenCalledTimes(1);

  card.simulate(`mouseleave`, mockEvent);
  expect(resetActiveCardIdAction).toHaveBeenCalledTimes(1);
});
