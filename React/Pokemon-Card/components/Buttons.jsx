import React, { useEffect, useState } from "react";

function Buttons(props) {
  const currentIndex = props.currentIndex;
  //   console.log("props:", currentIndex);
  const [index, setIndex] = useState(currentIndex);

  function minusIndex() {
    if (index > 1) {
      const updateIndex = index - 1;
      setIndex(updateIndex);
    }
  }

  function addIndex() {
    if (index < 150) {
      const updateIndex = index + 1;
      setIndex(updateIndex);
    }
  }

  //logData
  useEffect(() => {
    console.log("set index", index);
    //pass updated index back to App.js
    props.getIndex(index);
  }, [index]);

  return (
    <div>
      <button onClick={minusIndex}>Previous</button>
      <button onClick={addIndex}>Next</button>
    </div>
  );
}

export default Buttons;
