import React from 'react';
import {Switch, Redirect, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import PropTypes from 'prop-types';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';
import browserHistory from "../../browser-history";
import {APIRoute, AppRoute, AuthorizationStatus} from '../../utils/const';
import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-data/user-data-selectors';

const onConditionComponent = (condition, firstComponent, secondComponent) => {
  return condition ? (firstComponent) : (secondComponent);
};

const App = (props) => {
  const {authorizationStatus} = props;
  const isLogged = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT} >
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          {onConditionComponent(isLogged, <Redirect to={AppRoute.ROOT} />, <LoginPage />)}
        </Route>
        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => {
            return (
              <FavoritesPage />
            );
          }}
        />
        <Route exact path={`${APIRoute.OFFERS}/:id`}
          render={({match}) => (<PropertyPage id={match.params.id}/>)}/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

export {App};
export default connect(mapStateToProps)(App);
