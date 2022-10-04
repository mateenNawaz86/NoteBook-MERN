import React, {useState} from "react";

const Modal = (props) => {
  const [enteredNote, setEnteredNote] = useState({
    title: "",
    description: "",
    tag: "",
    id: "",
  });
  const { refVal } = props;

  // Function for handling inputs
  const onChangeHandler = (event) => {
    setEnteredNote({ ...enteredNote, [event.target.name]: event.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        ref={refVal}
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
    </>
  );
};

export default Modal;
