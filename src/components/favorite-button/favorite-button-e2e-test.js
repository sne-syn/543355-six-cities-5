import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {offer} from '../../test-data/offer-test-data';
import {ComponentType} from '../../utils/const';
import {FavoriteButton} from './favorite-button';

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should callback be click actions`, () => {
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
  );

  const favoriteButton = wrapper.find(`.button`);

  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleFavoriteButtonClickAction).toHaveBeenCalledTimes(1);

  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleRedirectToLoginAction).toHaveBeenCalledTimes(1);
  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleToggleComponent).toHaveBeenCalledTimes(1);
  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleUpdateOfferItemInStoreAction).toHaveBeenCalledTimes(1);
  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleUpdateOffersInStoreAction).toHaveBeenCalledTimes(1);
  // favoriteButton.simulate(`click`, mockEvent);
  // expect(handleUpdateNearPlacesInStoreAction).toHaveBeenCalledTimes(1);
});

import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferBookmarkBtn} from "./offer-bookmark-btn";
import {mockOffer} from "../../utils";
import {AuthStatus} from "../../constants";

configure({adapter: new Adapter()});

describe(`OfferBookmarkBtn e2e tests`, () => {
  test(`Click on OfferBookmarkBtn AuthStatus.NO_AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();

    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          authStatus={AuthStatus.NO_AUTH}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {preventDefault() {}});
    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(0);
  });

  test(`Click on OfferBookmarkBtn AuthStatus AUTH`, () => {
    const bookmarkBtnClickAction = jest.fn();

    const wrapper = shallow(
        <OfferBookmarkBtn
          offer={mockOffer}
          bookmarkType={`MAIN`}
          bookmarkBtnClickAction={bookmarkBtnClickAction}
          authStatus={AuthStatus.AUTH}
        />
    );

    wrapper.find(`.button`).simulate(`click`, {preventDefault() {}});
    expect(bookmarkBtnClickAction).toHaveBeenCalledTimes(1);
  });
});


describe(`FavoriteButton behavior`, () => {
  it(`when authorization status is AUTH`, () => {

    const redirectToLoginPage = jest.fn();
    const changeOfferStatus = jest.fn();
    const authorizationStatus = AuthorizationStatus.AUTH;

    const wrapper = shallow(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.Property.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.Property.WIDTH }
          buttonHeight={ FavoriteButtonProperty.Property.WIDTH }
          authorizationStatus={ authorizationStatus }
          id={ 1 }
          redirectToLoginPage={ redirectToLoginPage }
          changeOfferStatus={ changeOfferStatus }
        />
    );

    const button = wrapper.find(`button`);

    button.simulate(`click`);

    expect(changeOfferStatus).toHaveBeenCalledTimes(1);
    expect(redirectToLoginPage).toHaveBeenCalledTimes(0);

  });

  it(`when authorization status is NO_AUTH`, () => {

    const redirectToLoginPage = jest.fn();
    const changeOfferStatus = jest.fn();
    const authorizationStatus = AuthorizationStatus.NO_AUTH;

    const wrapper = shallow(
        <FavoriteButton
          isFavorite={ true }
          className={ FavoriteButtonProperty.Property.CLASS_NAME }
          buttonWidth={ FavoriteButtonProperty.Property.WIDTH }
          buttonHeight={ FavoriteButtonProperty.Property.WIDTH }
          authorizationStatus={ authorizationStatus }
          id={ 1 }
          redirectToLoginPage={ redirectToLoginPage }
          changeOfferStatus={ changeOfferStatus }
        />
    );

    const button = wrapper.find(`button`);

    button.simulate(`click`);

    expect(changeOfferStatus).toHaveBeenCalledTimes(0);
    expect(redirectToLoginPage).toHaveBeenCalledTimes(1);

  });
});
