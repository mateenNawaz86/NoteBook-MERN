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
  const [alert, setAlert] = useState(null);

  // function for alert functionality
  const showAlertHandler = (message, color) => {
    setAlert({
      msg: message,
      clr: color,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // function for grab all notes from DB
  const getAllNotes = async () => {
    try {
      // API call
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
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
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const jsonResponse = response.json();
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
      showAlertHandler("YOUR Note IS ADDED SUCCESSFULLY", "success");
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
          "auth-token": localStorage.getItem("token"),
        },
      });

      // logic for frontend deleteNote
      setNotes(
        notes.filter((item) => {
          return item._id !== id;
        })
      );
      showAlertHandler("Your note is deleted!", "warning");
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
          "auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ title, description, tag, id }),
      });

      const jsonResponse = response.json();

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
      showAlertHandler("Your note is updated!", "info");
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
        alert,
        showAlertHandler,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
