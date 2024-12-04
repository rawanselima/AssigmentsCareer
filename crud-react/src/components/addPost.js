import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchPosts, PostPosts } from "../network/fetchposts";
import Card_Component from "./cardpost";
export default function BasicTextFields() {
  let [newPost, setNewPost] = useState({
    id: 500,
    title: "", // only title was updated
    body: "",
    userId: 121,
    tags: ["history", "american", "crime"],
    reactions: {
      likes: 192,
      dislikes: 25,
    },
  });

  let data = useSelector((state) => state.poststore);

  let dispatch = useDispatch();

  return (
    <>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(PostPosts(newPost)).then(
            setNewPost({ ...newPost, title: "", body: "" })
          );
        }}
      >
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
        />
        <Button variant="contained" type="submit">
          Add Post
        </Button>
      </Box>
    </>
  );
}
