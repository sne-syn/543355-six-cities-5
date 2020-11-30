import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './footer';

configure({adapter: new Adapter()});

describe(`Footer tests`, () => {
  it(`click on Footer link`, () => {
    const onFooterLinkClick = jest.fn();

    const wrapper = shallow(
        <Footer/>
    );

    wrapper.find(`.footer__logo-link`).simulate(`click`);
    expect(onFooterLinkClick).toHaveBeenCalledTimes(0);
  });
});
