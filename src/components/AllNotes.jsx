import React, { useContext, useEffect } from "react";
import NoteContext from "./context/notes/noteContext";

const AllNotes = () => {
  const context = useContext(NoteContext);

  useEffect(() => {
    context.updateVal();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>My name is {context.state.name}</h2>
      <small>I'm {context.state.age} years old.</small>
    </div>
  );
};

export default AllNotes;
