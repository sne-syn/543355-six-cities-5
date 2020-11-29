import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardDetails from './card-details';
import {offer} from '../../test-data/offer-test-data';
import {ComponentType} from '../../utils/const';

configure({adapter: new Adapter()});

describe(`CardDetails tests`, () => {
  test(`click on CardDetails image`, () => {
    const onOCardDetailsClick = jest.fn();

    const wrapper = shallow(
        <CardDetails
          offer={offer}
          type={ComponentType.FAVORITE}
        />
    );

    wrapper.find(`.place-card__image-wrapper`).simulate(`click`);
    expect(onOCardDetailsClick).toHaveBeenCalledTimes(0);
  });

  test(`click on CardDetails title`, () => {
    const onOCardDetailsClick = jest.fn();

    const wrapper = shallow(
        <CardDetails
          offer={offer}
          type={ComponentType.FAVORITE}
        />
    );

    wrapper.find(`.place-card__name`).simulate(`click`);
    expect(onOCardDetailsClick).toHaveBeenCalledTimes(0);
  });
});
