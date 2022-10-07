import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AllNotes from "./components/AllNotes";
import AddNote from "./components/AddNote";
import NoteState from "./components/context/notes/NoteState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <NoteState>
      <Navbar />
      <div className="container" id="main__container">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/addNote" element={<AddNote />} />
          <Route exact path="/allNotes" element={<AllNotes />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </NoteState>
  );
};

export default App;
