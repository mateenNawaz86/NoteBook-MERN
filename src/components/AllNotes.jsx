import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "./context/notes/noteContext";
import NoteItem from "./NoteItem";

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes, getAllNotes } = context;
  const ref = useRef(null);

  // Function for loading notes from DB
  useEffect(() => {
    getAllNotes();
    // eslint-disable-next-line
  }, []);

  const [enteredNote, setEnteredNote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  // Function for update Note
  const updateNote = (curNote) => {
    ref.current.click();
    setEnteredNote({
      etitle: curNote.title,
      edescription: curNote.description,
      etag: curNote.tag,
    });
  };

  // Function for handling inputs
  const onChangeHandler = (event) => {
    setEnteredNote({ ...enteredNote, [event.target.name]: event.target.value });
  };

  return (
    <>
      {/* Modal code start */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        ref={ref}
      >
        Open modal for @mdo
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={enteredNote.etitle}
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="col-form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={enteredNote.edescription}
                    onChange={onChangeHandler}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="etage" className="col-form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etage"
                    name="etage"
                    value={enteredNote.etag}
                    onChange={onChangeHandler}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal code end */}

      <h2 className="text-center text-primary mb-5">Your Notes</h2>
      <div className="card__container">
        {notes.length !== 0 ? (
          notes.map((item, index) => {
            return (
              <NoteItem
                key={index}
                note={item}
                title={item.title}
                description={item.description}
                tag={item.tag}
                id={item._id}
                updateNote={updateNote}
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
