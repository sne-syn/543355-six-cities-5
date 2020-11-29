import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyPage} from './property-page';
import {offer, offerPremium} from '../../test-data/offer-test-data';

const noop = () => {};
jest.mock(`../favorite-button/favorite-button`, () => `FavoriteButton`);
jest.mock(`../header/header`, () => `Header`);
jest.mock(`../host/host`, () => `Host`);
jest.mock(`../loader/loader`, () => `Loader`);
jest.mock(`../map-section/map-section`, () => `MapSection`);
jest.mock(`../near-places/near-places`, () => `NearPlaces`);
jest.mock(`../premium-mark/premium-mark`, () => `PremiumMark`);
jest.mock(`../property-features/property-features`, () => `PropertyFeatures`);
jest.mock(`../reviews-list/reviews-list`, () => `ReviewsList`);
jest.mock(`../star-bar/star-bar`, () => `StarBar`);

describe(`<PropertyPage /> test`, () => {
  it(`renders PropertyPage with loader`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={true}
          nearPlaces={[]}
          offer={{}}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders PropertyPage with fetched data`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={false}
          nearPlaces={[]}
          offer={offer}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders PropertyPage with fetched data and Premium mark`, () => {
    const tree = renderer
    .create(
        <PropertyPage
          authorizationStatus={`AUTH`}
          fetchPropertyPageAction={noop}
          id={`24`}
          loading={false}
          nearPlaces={[]}
          offer={offerPremium}
          reviews={[]}
        />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
