import React, {PureComponent} from 'react';

import StarButtons from '../star-buttons/star-buttons';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      userName: ``,
      date: ``,
      text: ``
    };
  }

  render() {
    return (
      <form className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>

        <StarButtons onStarClick={(evt) => this.setState({rating: evt.target.value})}/>

        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}


export default Form;
