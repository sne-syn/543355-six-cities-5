import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {getReviewComment} from '../../store/reviews/reviews-selectors';
import StarButtons from '../star-buttons/star-buttons';
import composedInputs from '../../hocs/with-inputs/with-inputs';

const ReviewForm = (props) => {
  const {handleSubmit, handleRatingChange, handleTextareaChange, buttonDisabled, comment} = props;
  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarButtons onStarClick={handleRatingChange}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextareaChange} value={comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={buttonDisabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  comment: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  comment: getReviewComment(state),
});

export {ReviewForm};
export default connect(mapStateToProps)(composedInputs(ReviewForm));
