import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginPage from '../loginPage/loginPage';
import FavoritesPage from '../favoritesPage/favoritesPage';
import MainPage from '../mainPage/mainPage';
import PropertyPage from '../propertyPage/propertyPage';

const App = (props) => {
  const {offers, reviews, host} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage offers={offers} /></Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route exact path='/offer/:id' offers={offers} reviews={reviews} host={host}>
          <PropertyPage />
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
};

export default App;
