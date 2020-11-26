import PropTypes from 'prop-types';
import React from 'react';

const TextareaInput = ({handleInputChange}) => {
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleInputChange}></textarea>
  );
};

TextareaInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired
};

export default TextareaInput;
