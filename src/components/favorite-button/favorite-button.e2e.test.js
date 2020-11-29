import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoriteButton} from './favorite-button';

configure({adapter: new Adapter()});

const noop = () => {};
describe(`FavoriteButton`, () => {
  it(`Should redirect if user is no-auth`, () => {
  const handleRedirectToLoginAction = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        authorizationStatus={`NO_AUTH`}
        componentName={`place-card`}
        defaultOnValue={true}
        offerId={1}
        nearPlaces={[]}
        offerItem={{}}
        offers={[]}
        on={true}
        onFavoriteButtonClickAction={noop}
        redirectToLoginAction={handleRedirectToLoginAction}
        toggleComponent={noop}
        updateOfferItemInStoreAction={noop}
        updateOffersInStoreAction={noop}
        updateNearPlacesInStoreAction={noop}
      />
  )

    wrapper.find(`button.button`).simulate(`click`);
    expect(handleRedirectToLoginAction).toHaveBeenCalledTimes(1);
  });
  it(`Should toggle button and call calback to api-action`, () => {
    const handleFavoriteButtonClickAction = jest.fn();
    const handleToggleComponent = jest.fn();
  
    const wrapper = shallow(
        <FavoriteButton
          authorizationStatus={`AUTH`}
          componentName={`place-card`}
          defaultOnValue={true}
          offerId={1}
          nearPlaces={[]}
          offerItem={{}}
          offers={[]}
          on={true}
          onFavoriteButtonClickAction={handleFavoriteButtonClickAction}
          redirectToLoginAction={noop}
          toggleComponent={handleToggleComponent}
          updateOfferItemInStoreAction={noop}
          updateOffersInStoreAction={noop}
          updateNearPlacesInStoreAction={noop}
        />
    )
  
      wrapper.find(`button.button`).simulate(`click`);
      expect(handleFavoriteButtonClickAction).toHaveBeenCalledTimes(1);
      expect(handleToggleComponent).toHaveBeenCalledTimes(1);
    });
});
