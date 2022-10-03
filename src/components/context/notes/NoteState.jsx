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
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:10:07.611Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      img: "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      img: "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      img: "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
    {
      _id: "633939f2ab8b4a7eb2e1f143",
      user: "6338f25209613d5459ff2863",
      title: "Note updated 1.1",
      description: "Hey, I'm your updated note!",
      tag: "update",
      img: "https://images.pexels.com/photos/2726046/pexels-photo-2726046.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2022-10-02T07:12:50.225Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(allNotes);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
