import React from 'react';
import {Switch, Redirect, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from "../private-route/private-route";
import PropTypes from 'prop-types';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites/favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';
import {connect} from "react-redux";
import {AuthorizationStatus, AppRoute} from "../../utils/const";
import browserHistory from "../../browser-history";

const App = (props) => {
  const {reviews, authorizationStatus, offers} = props;
  const isLogged = (authorizationStatus === AuthorizationStatus.AUTH) ? true : false;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={AppRoute.ROOT}
          render={() => (
            <MainPage isLogged={isLogged}/>
          )}
        />
        <Route exact
          path={AppRoute.LOGIN}>
          {(isLogged) ? (
            <Redirect to={AppRoute.ROOT} />
          ) :
            (<LoginPage isLogged={isLogged}/>)
          }
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={(_history) => {
            return (
              <FavoritesPage />
            );
          }}
        />
        <Route exact path={AppRoute.OFFER}>
          <PropertyPage offers={offers} offer={offers} reviews={reviews} isLogged={isLogged} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  offers: state.offers
});

export {App};
export default connect(mapStateToProps)(App);
