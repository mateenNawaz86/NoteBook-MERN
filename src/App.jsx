import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import AddNote from "./components/AddNote";
import NoteState from "./components/context/notes/NoteState";

const App = () => {
  return (
    <NoteState>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<AllNotes />} />
        <Route exact path="/addNote" element={<AddNote />} />
        <Route exact path="/allNotes" element={<AllNotes />} />
      </Routes>
    </NoteState>
  );
};

export default App;
