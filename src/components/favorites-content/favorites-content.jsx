import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card';
import FavoriteButton from '../favorite-button/favorite-button';
import StarBar from '../star-bar/star-bar';

const FavoritesContent = ({favoritesOffersOnly}) => {
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <PlaceCard
                  key={favoritesOffersOnly[1].id}
                  containerCardClass={`favorites__card`}
                  imageCardClass={`favorites__image-wrapper `}
                  imgWidth={150}
                  imgHeight={110}
                  offer={favoritesOffersOnly[1]}
                />
              </div>
            </li>

            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Cologne</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                <article className="favorites__card place-card">
                  <div className="favorites__image-wrapper place-card__image-wrapper">
                    <a href="#">
                      <img className="place-card__image" src="img/apartment-small-04.jpg" width="150" height="110" alt="Place image" />
                    </a>
                  </div>
                  <div className="favorites__card-info place-card__info">
                    <div className="place-card__price-wrapper">
                      <div className="place-card__price">
                        <b className="place-card__price-value">&euro;180</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                      </div>
                      <FavoriteButton isFavorite={true} componentName={`place-card`} />
                    </div>
                    <StarBar rating={favoritesOffersOnly[1].rating}/>

                    <h2 className="place-card__name">
                      <a href="#">White castle</a>
                    </h2>
                    <p className="place-card__type">Apartment</p>
                  </div>
                </article>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

FavoritesContent.propTypes = {
  favoritesOffersOnly: PropTypes.array.isRequired
};

export default FavoritesContent;
