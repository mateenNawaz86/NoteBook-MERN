import React, { useContext, useEffect } from "react";
import NoteContext from "./context/notes/noteContext";
import NoteItem from "./NoteItem";

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes } = context;

  // Function for loading notes from DB
  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <>
      <h2 className="text-center text-primary mb-5">Your Notes</h2>
      <div className="card__container">
        {notes.length !== 0 ? (
          notes.map((item, index) => {
            return (
              <NoteItem
                key={index}
                title={item.title}
                description={item.description}
                profile={item.profile}
                tag={item.tag}
                id={item._id}
              />
            );
          })
        ) : (
          <p id="no_notes">NO NOTES FOUND!</p>
        )}
      </div>
    </>
  );
};

export default AllNotes;
