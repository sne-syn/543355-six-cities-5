import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import StarButtons from '../star-buttons/star-buttons';
import {postReview} from '../../store/api-actions';
import {connect} from 'react-redux';
import {getOfferItem, getOfferItemId} from '../../store/offer-item/offer-item-selectors';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rating: null,
      date: ``,
      comment: ``,
      commentLength: 0,
      buttonDisabled: true,
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleRatingChange = this._handleRatingChange.bind(this);
    this._handleTextareaChange = this._handleTextareaChange.bind(this);
    this._handleButtonDisable = this._handleButtonDisable.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmit, offerItemId} = this.props;

    evt.preventDefault();
    const review = {
      rating: +this.state.rating,
      comment: this.state.comment
    };

    document.querySelector(`.reviews__form`).reset();
  }

  _handleRatingChange(evt) {
    this.setState({
      rating: evt.target.value,
      buttonDisabled: this._handleButtonDisable()
    });
  }

  _handleTextareaChange(evt) {
    this.setState({
      comment: evt.target.value,
      commentLength: evt.target.value.length,
      buttonDisabled: this._handleButtonDisable()
    });
  }

  _handleButtonDisable() {
    console.log(this.state.commentLength < 50 )
    const isDisabled = this.state.commentLength < 50 && this.state.commentLength > 300 && this.state.rating <= 0;
    return isDisabled;
  }

  render() {
    return (
      <form className="reviews__form form" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarButtons onStarClick={this._handleRatingChange}/>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onInput={this._handleTextareaChange}></textarea>
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

ReviewForm.propTypes = {
  // handleSubmit: PropTypes.func.isRequired,
  // handleRatingChange: PropTypes.func.isRequired,
  // handleTextareaChange: PropTypes.func.isRequired,
  // buttonDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offer: getOfferItem(state),
  offerItemId: getOfferItemId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(review, id) {
    dispatch(postReview(review, id));
  }
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
