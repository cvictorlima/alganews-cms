import {
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User } from "../../sdk/@Types";
import { UserService } from "../../sdk/services";

export const fetchAllEditors = createAsyncThunk(
  "editor/fetchAllEditors",
  async function () {
    return UserService.getAllEditors();
  }
);

interface EditorStoreState {
  fetching: boolean;
  editorsList: User.EditorSummary[];
}

const initialState: EditorStoreState = {
  editorsList: [],
  fetching: false,
};

export const editorReducer = createReducer(initialState, (builder) => {
  const pending = isPending(fetchAllEditors);
  const fulfilled = isFulfilled(fetchAllEditors);
  const rejected = isRejected(fetchAllEditors);
  builder
    .addCase(fetchAllEditors.fulfilled, (state, action) => {
      state.editorsList = action.payload;
    })
    .addMatcher(pending, (state) => {
      state.fetching = true;
    })
    .addMatcher(fulfilled, (state) => {
      state.fetching = false;
    })
    .addMatcher(rejected, (state) => {
      state.fetching = false;
    });
});
