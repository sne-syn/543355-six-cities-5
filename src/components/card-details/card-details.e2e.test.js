import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardDetails from './card-details';
import {offer} from '../../test-data/offer-test-data';
import {ComponentType} from '../../utils/const';
configure({adapter: new Adapter()});

describe(`CardDetails tests`, () => {
  it(`click on CardDetails image`, () => {
    const onCardDetailsClick = jest.fn();

    const wrapper = shallow(
        <CardDetails
          offer={offer}
          type={ComponentType.FAVORITE}
        />
    );

    wrapper.find(`.place-card__image-wrapper`).simulate(`click`);
    expect(onCardDetailsClick).toHaveBeenCalledTimes(0);
  });

  it(`click on CardDetails title`, () => {
    const onCardDetailsClick = jest.fn();

    const wrapper = shallow(
        <CardDetails
          offer={offer}
          type={ComponentType.FAVORITE}
        />
    );

    wrapper.find(`.place-card__name`).simulate(`click`);
    expect(onCardDetailsClick).toHaveBeenCalledTimes(0);
  });
});
