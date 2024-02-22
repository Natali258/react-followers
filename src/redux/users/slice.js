import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, updateUsers } from "./operations";

const initialState = {
  items: [],
  followers: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(updateUsers.fulfilled, (state, action) => {
        state.items = state.items.map((el) =>
          el.id === action.payload.id ? { ...action.payload } : el
        );
        console.log(state.followers.includes(action.payload.id));
        state.followers.includes(action.payload.id)
          ? (state.followers = state.followers.filter((follower) => {
              return Number(follower) !== Number(action.payload.id);
            }))
          : state.followers.push(action.payload.id);
      });
  },
});

export const selectUsers = (state) => state.users.items;
export const selectFollowers = (state) => state.users.followers;
export const selectIsLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;
export const usersReducer = usersSlice.reducer;
