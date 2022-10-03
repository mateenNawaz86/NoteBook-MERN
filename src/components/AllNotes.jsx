import React, { useContext } from "react";
import NoteContext from "./context/notes/noteContext";

// Material UI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const AllNotes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <>
      <h2 className="text-center text-primary mb-5">Your Notes</h2>
      <div className="card__container">
        {notes.map((item, index) => {
          return (
            <Card key={index}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.img}
                  className="card_img"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.tag}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Update
                </Button>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default AllNotes;
