import { postReducer } from "./Post.slice";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./User.slice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
