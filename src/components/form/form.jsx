import React, {PureComponent} from 'react';
import StarButtons from '../star-buttons/star-buttons';

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      date: ``,
      text: ``,
      textLength: 0,
      buttonDisabled: true,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleTextareaChange = this._handleTextareaChange.bind(this);
    this._handleButtonDisable = this._handleButtonDisable.bind(this);
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      rating: null,
      date: ``,
      text: ``,
      textLength: 0,
      buttonDisabled: true,
    });
    document.querySelector(`.reviews__form`).reset();
  }

  _handleRatingChange(evt) {
    this.setState({
      rating: evt.target.value,
      buttonDisabled: this.handleButtonDisable()
    });
  }

  _handleTextareaChange(evt) {
    this.setState({
      text: evt.target.value,
      textLength: evt.target.value.length,
      buttonDisabled: this.handleButtonDisable()
    });
  }

  _handleButtonDisable() {
    if (this.state.textLength >= 50 && this.state.textLength < 300 && this.state.rating > 0) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <form className="reviews__form form" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarButtons onStarClick={this._handleRatingChange}/>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onInput = {this.handleTextareaChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={this.state.buttonDisabled}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
