import {
  createAsyncThunk,
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit";
import { User } from "../../sdk/@Types";
import { UserService } from "../../sdk/services";

export const fetchEditors = createAsyncThunk(
  "user/fetchEditors",
  async function () {
    const users = await UserService.getAllEditors();
    return users;
  }
);

interface UserSliceState {
  fetching: boolean;
  editors: User.EditorSummary[];
}

const initialState: UserSliceState = {
  fetching: false,
  editors: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    const pendingActions = isPending(fetchEditors);
    const fulfilledActions = isFulfilled(fetchEditors);
    const rejectedActions = isRejected(fetchEditors);
    builder
      .addMatcher(pendingActions, (state) => {
        state.fetching = true;
      })
      .addMatcher(fulfilledActions, (state) => {
        state.fetching = false;
      })
      .addMatcher(rejectedActions, (state) => {
        state.fetching = false;
      });
  },
});

export const userReducer = userSlice.reducer;
