import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favorites/favorites-page/favorites-page';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';
import {generateOffers} from '../../mocks/offers.js';

const offers = generateOffers(20);

const App = (props) => {
  const {reviews, hosts, isLogged} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => (
          <MainPage isLogged={isLogged} />
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
            (<FavoritesPage isLogged={isLogged} />)
          }

        </Route>
        <Route exact path='/offer/:id'>
          <PropertyPage offer={offers[0]} offers={offers} reviews={reviews} hosts={hosts} isLogged={isLogged} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.array.isRequired,
  hosts: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
