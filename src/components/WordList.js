import React from "react";
import Word from "./Word";
import PropTypes from "prop-types";

function WordList(props){
  return (
    <React.Fragment>
      {Array.values(props.wordList).map((word) =>
        <Word
          letters={word.letters}
          revealedLetters={word.revealedLetters}
          length={word.length}
          id={word.id}
          key={word.id}
          />
      )}
    </React.Fragment>
  );
}

WordList.propTypes = {
  wordList: PropTypes.array,
  // onWordSelection: PropTypes.func
};

export default WordList;