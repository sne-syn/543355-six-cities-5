import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import StarButtons from '../star-buttons/star-buttons';
import TextareaInput from '../textarea-input/textarea-input';
import {connect} from 'react-redux';
import {getOfferItem, getOfferItemId} from '../../store/offer-item/offer-item-selectors';
import {getUserAvatar, getUserId, getUserIsPro, getUserName} from '../../store/user-data/user-data-selectors';
import {postReview} from '../../store/api-actions';
import {setReviewComment, updateReviewsInStore} from '../../store/action';
import {getReviewComment, getReviewRating} from '../../store/reviews/reviews-selectors';

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleButtonDisable = this._handleButtonDisable.bind(this);
    this._handleTextareaChange = this._handleTextareaChange.bind(this);
  }

  _handleSubmit(evt) {
    const {onSubmitAction, offerItemId, userAvatar, userId, userIsPro, userName, updateReviewsInStoreAction} = this.props;

    evt.preventDefault();
    const review = {
      rating: +this.props.rating,
      comment: this.props.comment,
    };

    const reviewForStore = {
      author: userName,
      avatar: userAvatar,
      date: new Date().toISOString(),
      isPro: userIsPro,
      rating: +this.props.rating,
      comment: this.props.comment,
      userId,
    };
    onSubmitAction(offerItemId, review);
    updateReviewsInStoreAction(reviewForStore);
    document.querySelector(`.reviews__form`).reset();
  }

  _handleTextareaChange(evt) {
    evt.persist();
    this.props.onChangeAction(evt);
  }

  _handleButtonDisable() {
    const {comment, rating} = this.props;
    const isDisabled = comment.length < 50 || comment.length > 300 || rating <= 0;
    return isDisabled;
  }

  render() {
    return (
      <form className="reviews__form form" onSubmit={this._handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <StarButtons />
        <TextareaInput handleInputChange={this._handleTextareaChange}/>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={this._handleButtonDisable()}>Submit</button>
        </div>
      </form>
    );
  }
}

ReviewForm.propTypes = {
  comment: PropTypes.string.isRequired,
  onChangeAction: PropTypes.func.isRequired,
  onSubmitAction: PropTypes.func.isRequired,
  offerItemId: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  updateReviewsInStoreAction: PropTypes.func.isRequired,
  userAvatar: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  userIsPro: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  comment: getReviewComment(state),
  offer: getOfferItem(state),
  offerItemId: getOfferItemId(state),
  rating: getReviewRating(state),
  userAvatar: getUserAvatar(state),
  userId: getUserId(state),
  userName: getUserName(state),
  userIsPro: getUserIsPro(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(review, id) {
    dispatch(postReview(review, id));
  },
  updateReviewsInStoreAction(review) {
    dispatch(updateReviewsInStore(review));
  },
  onChangeAction(evt) {
    dispatch(setReviewComment(evt.target.value));
  },
});

export {ReviewForm};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
