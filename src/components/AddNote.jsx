import React from "react";

const AddNote = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="title"
          />
          <div id="title" className="form-text">
            Title must be atleast 3 characters
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="5"
          ></textarea>
          <div id="title" className="form-text">
            Description must be atleast 8 characters
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            aria-describedby="tag"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="profile" className="form-label">
            Profile
          </label>
          <input
            type="file"
            className="form-control"
            id="profile"
            aria-describedby="profile"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddNote;
