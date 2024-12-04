import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export let FetchPosts = createAsyncThunk("get/fetchPosts", async () => {
  let response = await axios.get("https://dummyjson.com/posts");
  let posts = await response.data;

  return posts.posts;
});

export let PostPosts = createAsyncThunk("post/fetchposts", async (infoPost) => {
  let response = await axios.post("https://dummyjson.com/posts/add", infoPost, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  let posts = await response.data;

  return posts;
});

export let DeletePosts = createAsyncThunk("delete/fetchPosts", async (id) => {
  let response = await axios.delete(`https://dummyjson.com/posts/${id}`);
  let data = response.data;
  console.log("res", data);

  return data;
});
