import React from "react";

// console.log.
// Curly brackets en return statement niet aanwezig

const TextInput = props => {
  // console.log(props.submit)
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        maxLength="1"
        value={props.currentChosenLetter}
        disabled={props.gameIsOver ? "disabled" : ""}
        onChange={props.change}
      />
      <input
        type="submit"
        value="guess"
        disabled={props.gameIsOver ? "disabled" : ""}
      />
    </form>
  )
};

export default TextInput;