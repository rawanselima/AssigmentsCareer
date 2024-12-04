import { createSlice } from "@reduxjs/toolkit";
import { DeletePosts, FetchPosts, PostPosts } from "../network/fetchposts";

let postsSlice = createSlice({
  initialState: [],
  name: "posts",

  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
      .addCase(PostPosts.fulfilled, (state, action) => {
        state.push(action.payload);
        return state;
      })
      .addCase(DeletePosts.fulfilled, (state, action) => {
        state = state.filter((ele) =>
          ele.id !== action.payload.id ? ele : null
        );
        console.log("state reducer", state);
        console.log("action payload", action.payload);
        return state;
      });
  },
});

export default postsSlice.reducer;
