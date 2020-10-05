import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import LoginPage from '../loginPage/loginPage';
import FavoritesPage from '../favoritesPage/favoritesPage';
import MainPage from '../mainPage/mainPage';
import PropertyPage from '../propertyPage/propertyPage';

const App = (props) => {
  const {placesCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage placesCount={placesCount} /></Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/favorites'>
          <FavoritesPage />
        </Route>
        <Route exact path='/offer/:id'>
          <PropertyPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
};

export default App;
