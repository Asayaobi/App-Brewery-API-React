import React from "react";

function Buttons(props) {
  const currentIndex = props.currentIndex;

  function minusIndex() {
    console.log("click");
  }

  function addIndex(currentIndex) {
    console.log("click");
  }

  return (
    <div>
      <button onClick={minusIndex}>Previous</button>
      <button onClick={addIndex}>Next</button>
    </div>
  );
}

export default Buttons;
