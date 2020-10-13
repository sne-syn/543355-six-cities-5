import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../loginPage/loginPage';
import FavoritesPage from '../favoritesPage/favoritesPage';
import MainPage from '../mainPage/mainPage';
import PropertyPage from '../propertyPage/propertyPage';

const App = ({offers, reviews, host, isLogged}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({history}) => (
          <MainPage offers={offers} isLogged={isLogged} onCardClick={() => history.push(`/offer/:id`)} />
        )}
        />
        <Route exact path='/login'>
          <LoginPage isLogged={isLogged}/>
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage isLogged={isLogged}/>
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
