import React from 'react';
// import { connect } from 'react-redux';
import WordList from './WordList';
import Word from './Word';
import Guess from './Guess';
import GuessForm from './GuessForm';
import Results from './Results';
import PropTypes from "prop-types";
// import * as a from './../actions';

class WordControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      resultsVisibleOnPage: false,

    };
  }

  handleClick = () => {

  }

  handleGuess = () => {

  }

  handleChangingSelectedWord = (id) => {
    
  }


  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage != null) {
      // currentlyVisibleState = <Guess
      //   word={this.state.selectedWord}
      //   onClickingGuess={this.handleGuess}
      //   buttonText = "Guess this letter";
    } else {
      currentlyVisibleState = <Results />;
      //show revealedLetters and number of guesses remaining
      buttonText = "Make another guess"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

WordControl.propTypes = {
  mainWordList: PropTypes.array,
      // change to object with redux
  formVisibleOnPage: PropTypes.bool,
  resultsVisibleOnPage: PropTypes.bool
};

export default WordControl;