import React, { useEffect, useState } from "react";

function Buttons(props) {
  const currentIndex = props.currentIndex;
  //   console.log("props from App:", currentIndex);
  const [index, setIndex] = useState(currentIndex);

  function minusIndex() {
    if (currentIndex > 1) {
      const updateIndex = currentIndex - 1;
      setIndex(updateIndex);
    }
  }

  function addIndex() {
    if (currentIndex < 150) {
      const updateIndex = currentIndex + 1;
      setIndex(updateIndex);
    }
  }
  //logData
  useEffect(() => {
    // console.log("set index", index);
    //pass updated index back to App.js
    props.getIndex(index);
  }, [index]);

  return (
    <div className="buttons-container">
      <button onClick={minusIndex}>Previous</button>
      <button onClick={addIndex}>Next</button>
    </div>
  );
}

export default Buttons;