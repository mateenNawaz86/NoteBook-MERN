import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import AddNote from "./components/AddNote";
import NoteState from "./components/context/notes/NoteState";
import AlertCom from "./components/AlertCom";

const App = () => {
  return (
    <NoteState>
      <Navbar />
      <AlertCom message="Note is deleted" />
      <div className="container" id="main__container">
        <Routes>
          <Route exact path="/" element={<AllNotes />} />
          <Route exact path="/addNote" element={<AddNote />} />
          <Route exact path="/allNotes" element={<AllNotes />} />
        </Routes>
      </div>
    </NoteState>
  );
};

export default App;
