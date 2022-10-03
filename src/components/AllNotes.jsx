import React, { useContext } from "react";
import NoteContext from "./context/notes/noteContext";
import NoteItem from "./NoteItem";

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes } = context;

  return (
    <>
      <h2 className="text-center text-primary mb-5">Your Notes</h2>
      <div className="card__container">
        {notes.map((item, index) => {
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
        })}
      </div>
    </>
  );
};

export default AllNotes;
