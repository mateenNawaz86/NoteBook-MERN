import React, { useState } from "react";
import NoteContext from "./noteContext";

// function
const NoteState = (props) => {
  // variable for API Call
  const host = "http://localhost:5000";

  // Notes is here
  const allNotes = [];
  const [notes, setNotes] = useState(allNotes);

  // function for grab all notes from DB
  const getAllNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Function for add a new note
  const addNote = async (title, description, tag, profile, id) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
      },
      body: JSON.stringify({ title, description, tag, profile }),
    });

    const jsonResponse = response.json();
    const noteCopy = {
      _id: id,
      user: "6338f25209613d5459ff2863",
      title: title,
      description: description,
      tag: tag,
      img: profile,
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    };

    console.log("Add a new note ");
    setNotes(notes.concat(noteCopy));
  };

  // Function for Delete existing note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
      },
    });

    // logic for frontend deleteNote
    setNotes(
      notes.filter((item) => {
        return item._id !== id;
      })
    );
  };

  // Function for Edit a existing note
  const editNote = async (id, title, description, tag, profile) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
      },
      body: JSON.stringify({ title, description, tag, profile, id }),
    });

    const jsonResponse = response.json();

    // logic for edit the existing notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.profile = profile;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
