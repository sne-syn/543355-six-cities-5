import React from 'react';
import renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../utils/const';
import {FavoriteButton} from '../favorite-button/favorite-button';

const noop = () => {};

describe(`<FavoriteButton /> test`, () => {
  it(`renders FavoriteButton active`, () => {
    const tree = renderer
    .create(
        <FavoriteButton
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          componentName={`place-card`}
          defaultOnValue={true}
          offerId={1}
          offers={[]}
          on={true}
          onFavoriteButtonClickAction={noop}
          redirectToLoginAction={noop}
          toggleComponent={noop}
          updateOffersInStoreAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders FavoriteButton no-active`, () => {
    const tree = renderer
    .create(

        <FavoriteButton
          authorizationStatus={AuthorizationStatus.AUTH}
          componentName={`place-card`}
          defaultOnValue={false}
          offerId={1}
          offers={[]}
          on={false}
          onFavoriteButtonClickAction={noop}
          redirectToLoginAction={noop}
          toggleComponent={noop}
          updateOffersInStoreAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`renders FavoriteButton for property-place`, () => {
    const tree = renderer
    .create(

        <FavoriteButton
          authorizationStatus={AuthorizationStatus.AUTH}
          componentName={`property`}
          defaultOnValue={false}
          offerId={1}
          offers={[]}
          on={false}
          onFavoriteButtonClickAction={noop}
          redirectToLoginAction={noop}
          toggleComponent={noop}
          updateOffersInStoreAction={noop} />
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

