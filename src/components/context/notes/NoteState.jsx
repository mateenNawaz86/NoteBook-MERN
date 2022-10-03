import React, { useState } from "react";
import NoteContext from "./noteContext";

// function
const NoteState = (props) => {
  // Notes is here
  const allNotes = [
    {
      _id: "6339394fab8b4a7eb2e1f13e",
      user: "6338f25209613d5459ff2863",
      title: "Note updated",
      description: "Hey, I'm your updated note!",
      tag: "public",
      profile:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:10:07.611Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      profile:
        "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      profile:
        "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      profile:
        "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      profile:
        "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(allNotes);

  // Function for add a new note
  const addNote = (title, description, tag, profile, id) => {
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
  const deleteNote = (id) => {
    console.log("Your note is delete with this id: " + id);
    setNotes(
      notes.filter((item) => {
        return item._id !== id;
      })
    );
  };

  // Function for Edit a existing note
  const editNote = (id, title, description, profile) => {
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
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
