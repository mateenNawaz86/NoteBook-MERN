import React, { useContext } from "react";
import NoteContext from "./context/notes/noteContext";

// Material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const NoteItem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  // // function for delete the note
  const noteDeleteHandler = () => {
    console.log("Your note is deleted!");
    deleteNote(props.id);
  };
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.profile}
            className="card_img"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.tag}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
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
