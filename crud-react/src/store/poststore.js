import { configureStore } from "@reduxjs/toolkit";

import postreducer from "../reducers/postreducer";
let store = configureStore({
  reducer: {
    poststore: postreducer,
  },
});

export default store;
