import React from 'react';
import {Switch, Redirect, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import PropTypes from 'prop-types';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites/favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {generateReviews} from '../../mocks/reviews';
import {getAuthorizationStatus} from '../../store/user-data/user-data-selectors';
import {getOffers} from '../../store/offers-data/offers-data-selectors';

const reviews = generateReviews(10);

const App = (props) => {
  const {authorizationStatus, offers} = props;
  const isLogged = (authorizationStatus === AuthorizationStatus.AUTH) ? 1 : 0;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={() => (
            <MainPage />
          )}
        />
        <Route exact
          path={AppRoute.LOGIN}>
          {(isLogged) ? (
            <Redirect to={AppRoute.ROOT} />
          ) :
            (<LoginPage />)
          }
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesPage />
            );
          }}
        />
        <Route exact path={`${AppRoute.OFFER}:id`}
          render={() => (<PropertyPage offers={offers} offer={offers} reviews={reviews} />)}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  offers: getOffers(state),
});

export {App};
export default connect(mapStateToProps)(App);
