import React, { useState } from "react";
import NoteContext from "./noteContext";

// function
const NoteState = (props) => {
  const [state, setState] = useState({
    name: "Mateen Nawaz",
    age: 21,
  });

  const updateVal = () => {
    setTimeout(() => {
      setState({
        name: "Mateen Mirani",
        age: 22,
      });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ state, updateVal }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
