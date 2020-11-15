import PropTypes from 'prop-types';
import React from 'react';
import StarButtons from '../star-buttons/star-buttons';
import withInputs from '../../HOCs/with-inputs';

const Form = ({handleSubmit, handleRatingChange, handleTextareaChange, buttonDisabled}) => {
  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <StarButtons onStarClick={handleRatingChange}/>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onInput = {handleTextareaChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={buttonDisabled}>Submit</button>
      </div>
    </form>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
};

export default withInputs(Form);
