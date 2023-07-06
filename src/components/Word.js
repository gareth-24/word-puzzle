import React from "react";
import PropTypes from "prop-types";

function Word(props){
  return(
    <React.Fragment>
      <h3>{props.revealedLetters}</h3>
      <p>The word has a length of {props.length}</p>
    </React.Fragment>
    );
}
// ex: word = "REACT"
// revealedLetters: "-----"
// length = 5
Word.propTypes = {
  letters: PropTypes.string,
  revealedLetters: PropTypes.string,
  length: PropTypes.number,
  id: PropTypes.string
}

export default Word;

