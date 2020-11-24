import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {postReview} from '../store/api-actions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getOfferItem, getOfferItemId} from '../store/offer-item/offer-item-selectors';
import {getUserAvatar, getUserId, getUserIsPro, getUserName} from '../store/user-data/user-data-selectors';
import {updateReviewsInStore} from '../store/action';

const withInputs = (Component) => {
  class WithInputs extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: null,
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
      const {onSubmitAction, offerItemId, userAvatar, userId, userIsPro, userName, updateReviewsInStoreAction} = this.props;

      evt.preventDefault();
      const review = {
        rating: +this.state.rating,
        comment: this.state.comment,
      };

      const reviewForStore = {
        author: userName,
        avatar: userAvatar,
        date: new Date().toISOString(),
        isPro: userIsPro,
        rating: +this.state.rating,
        comment: this.state.comment,
        userId,
      };
      onSubmitAction(offerItemId, review);
      updateReviewsInStoreAction(reviewForStore);
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
      const isDisabled = this.state.commentLength < 50 || this.state.commentLength > 300 || this.state.rating <= 0;
      return isDisabled;
    }

    render() {
      return (
        <Component
          buttonDisabled={this.state.buttonDisabled} handleRatingChange={this._handleRatingChange} handleTextareaChange={this._handleTextareaChange}
          handleSubmit={this._handleSubmit}
          {...this.props}
        />
      );
    }
  }

  WithInputs.propTypes = {
    onSubmitAction: PropTypes.func.isRequired,
    offerItemId: PropTypes.number.isRequired,
    updateReviewsInStoreAction: PropTypes.func.isRequired,
    userAvatar: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    userIsPro: PropTypes.bool.isRequired,
    userName: PropTypes.string.isRequired,
  };

  return WithInputs;
};

const mapStateToProps = (state) => ({
  userAvatar: getUserAvatar(state),
  userId: getUserId(state),
  userName: getUserName(state),
  userIsPro: getUserIsPro(state),
  offer: getOfferItem(state),
  offerItemId: getOfferItemId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmitAction(review, id) {
    dispatch(postReview(review, id));
  },
  updateReviewsInStoreAction(review) {
    dispatch(updateReviewsInStore(review));
  },
});

const composedInputs = compose(connect(mapStateToProps, mapDispatchToProps), withInputs);
export default composedInputs;
