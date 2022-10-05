import React, { useState } from "react";
import NoteContext from "./noteContext";

// function
const NoteState = (props) => {
  // variable for API Call
  const host = "http://localhost:5000";

  // Notes is here
  const allNotes = [];
  const [notes, setNotes] = useState(allNotes);
  const [loading, setLoading] = useState(true);

  // function for grab all notes from DB
  const getAllNotes = async () => {
    try {
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
      setLoading(false);
    } catch (error) {
      console.error(error);
      console.log("Some error occured!");
    }
  };

  // Function for add a new note
  const addNote = async (title, description, tag, id) => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/addnote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const jsonResponse = response.json();
      console.log(jsonResponse);
      const noteCopy = {
        _id: id,
        user: "6338f25209613d5459ff2863",
        title: title,
        description: description,
        tag: tag,
        date: "2022-10-02T07:12:50.225Z",
        __v: 0,
      };

      // render new note to UI
      setNotes(notes.concat(noteCopy));
    } catch (error) {
      console.error(error);
      console.log("Some error occured!");
    }
  };

  // Function for Delete existing note
  const deleteNote = async (id) => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
        },
      });
      console.log(response);

      // logic for frontend deleteNote
      setNotes(
        notes.filter((item) => {
          return item._id !== id;
        })
      );
    } catch (error) {
      console.error(error);
      console.log("Some error occured!");
    }
  };

  // Function for Edit a existing note
  const editNote = async (id, title, description, tag) => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMzYTk1NmUyOWZkZDVkMDBlZGE5NTVkIn0sImlhdCI6MTY2NDc4Mzc1OH0.s7Q92FWTGzIHhcZh_8sPdKn7vbAFxEIkQwYoE1k8DvQ",
        },
        body: JSON.stringify({ title, description, tag, id }),
      });

      const jsonResponse = response.json();
      console.log(jsonResponse);

      // logic for edit the existing notes on client-side
      let updateValues = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < notes.length; index++) {
        const element = updateValues[index];
        if (element._id === id) {
          updateValues[index].title = title;
          updateValues[index].description = description;
          updateValues[index].tag = tag;
          break;
        }
      }

      // set previous note into new values
      setNotes(updateValues);
    } catch (error) {
      console.error(error);
      console.log("Some error occured!");
    }
  };
  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        deleteNote,
        editNote,
        getAllNotes,
        loading,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
