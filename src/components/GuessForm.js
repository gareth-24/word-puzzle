import React from 'react'
import PropTypes from "prop-types";

function GuessForm(props) {
  return (
    <React.Fragment>
    <div>GuessForm</div>
    <form onSubmit={props.formSubmissionHandler}>
    <input
      type='text'
      letter='letter'
      placeholder='Please type your letter here' />
    <button type='submit'>{props.buttonText}</button>
    </form>
    </React.Fragment>
  )
}

GuessForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default GuessForm;