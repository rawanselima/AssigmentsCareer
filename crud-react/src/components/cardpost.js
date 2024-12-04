import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { DeletePosts } from "../network/fetchposts";

function Card_Component(props) {
  let dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 800, marginTop: 5 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.posts.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.posts.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button
          size="small"
          className="MuiCardActions-root"
          onClick={() => {
            dispatch(DeletePosts(props.posts.id));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Card_Component;
