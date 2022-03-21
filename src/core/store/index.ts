import { postReducer } from "./Post.slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    post: postReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
