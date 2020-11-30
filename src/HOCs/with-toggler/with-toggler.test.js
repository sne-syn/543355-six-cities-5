import React from 'react';
import renderer from 'react-test-renderer';
import PropTypes from 'prop-types';
import withToggler from './with-toggler';
import {offers} from '../../test-data/offers-test-data';
const noop = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withToggler(MockComponent);

it(`withToggler is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      authorizationStatus={`AUTH`}
      comnponentName={`place-card`}
      on={false}
      offerId={1}
      offers={offers}
      onFavoriteButtonClickAction={noop}
      redirectToLoginAction={noop}
      updateOffersInStoreAction={noop}
      toggleComponent={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
