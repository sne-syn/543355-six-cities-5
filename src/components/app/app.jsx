import React from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../login-page/login-page';
import FavoritesPage from '../favoritesPage/favoritesPage';
import MainPage from '../main-page/main-page';
import PropertyPage from '../property-page/property-page';

const App = ({offers, reviews, host, isLogged}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({history}) => (
          <MainPage offers={offers} isLogged={isLogged} onCardClick={() => history.push(`/offer/5`)} />
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
            (<FavoritesPage isLogged={isLogged}/>)
          }

        </Route>
        <Route exact path='/offer/:id'>
          <PropertyPage offer={offers[0]} reviews={reviews} host={host} isLogged={isLogged} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
  host: PropTypes.shape({
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default App;
