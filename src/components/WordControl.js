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

    };
  }




  render(){
    return (
      <React.Fragment>
        {currentlyVisibleState}
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