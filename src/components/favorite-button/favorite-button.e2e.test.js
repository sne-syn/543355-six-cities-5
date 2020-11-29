import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FavoriteButton} from './favorite-button';

configure({adapter: new Adapter()});

describe(`FavoriteButton`, () => {
  it(`Should redirect if user is no-auth`, () => {
  const handleFavoriteButtonClickAction = jest.fn();
  const handleRedirectToLoginAction = jest.fn();
  const handleToggleComponent = jest.fn();
  const handleUpdateOfferItemInStoreAction = jest.fn();
  const handleUpdateOffersInStoreAction = jest.fn();
  const handleUpdateNearPlacesInStoreAction = jest.fn();

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
        onFavoriteButtonClickAction={handleFavoriteButtonClickAction}
        redirectToLoginAction={handleRedirectToLoginAction}
        toggleComponent={handleToggleComponent}
        updateOfferItemInStoreAction={handleUpdateOfferItemInStoreAction}
        updateOffersInStoreAction={handleUpdateOffersInStoreAction}
        updateNearPlacesInStoreAction={handleUpdateNearPlacesInStoreAction}
      />
  )

    wrapper.find(`button.button`).simulate(`click`);
    expect(handleRedirectToLoginAction).toHaveBeenCalledTimes(1);
  });
  it(`Should callback be click actions`, () => {
    const handleFavoriteButtonClickAction = jest.fn();
    const handleRedirectToLoginAction = jest.fn();
    const handleToggleComponent = jest.fn();
    const handleUpdateOfferItemInStoreAction = jest.fn();
    const handleUpdateOffersInStoreAction = jest.fn();
    const handleUpdateNearPlacesInStoreAction = jest.fn();
  
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
          redirectToLoginAction={handleRedirectToLoginAction}
          toggleComponent={handleToggleComponent}
          updateOfferItemInStoreAction={handleUpdateOfferItemInStoreAction}
          updateOffersInStoreAction={handleUpdateOffersInStoreAction}
          updateNearPlacesInStoreAction={handleUpdateNearPlacesInStoreAction}
        />
    )
  
      wrapper.find(`button.button`).simulate(`click`);
      expect(handleFavoriteButtonClickAction).toHaveBeenCalledTimes(1);
      expect(handleToggleComponent).toHaveBeenCalledTimes(1);
    });
});
