import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../page/login-page/login-page';
import FavoritesPage from '../page/favorites-page/favorites-page';
import MainPage from '../page/main-page/main-page';
import PropertyPage from '../page/property-page/property-page';

const App = ({offers, reviews, hosts, isLogged}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (
          <MainPage offers={offers} isLogged={isLogged} />
        )}
        />
        <Route exact path='/login'>
          {(isLogged) ? (
            <Redirect to="/" />
          ) :
            (<LoginPage isLogged={isLogged}/>)
          }

        </Route>
        <Route exact path='/favorites'>

          {(!isLogged) ? (
            <Redirect to="/login" />
          ) :
            (<FavoritesPage isLogged={isLogged} offers={offers} />)
          }

        </Route>
        <Route exact path='/offer/:id'>
          <PropertyPage offers={offers} offer={offers[0]} reviews={reviews} hosts={hosts} isLogged={isLogged} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  hosts: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
