import React, { useContext } from "react";
import NoteContext from "./context/notes/noteContext";

// Material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { id, title, description, tag, updateNote, note } = props;

  // // function for delete the note
  const noteDeleteHandler = () => {
    console.log("Your note is deleted!");
    deleteNote(id);
  };
  return (
    <>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {tag}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              updateNote(note);
            }}
          >
            Edit
          </Button>
          <Button size="small" color="primary" onClick={noteDeleteHandler}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default NoteItem;
