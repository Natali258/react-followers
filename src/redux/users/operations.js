import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../services/usersAPI";

export const changePage = createAction("changePage");
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page, thunkAPI) => {
    try {
      const limit = page * 3;
      const { data } = await usersAPI.get(`/users?page=1&limit=${limit}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/addFollowers",
  async ({ id, followers }, thunkAPI) => {
    try {
      const { data } = await usersAPI.put(`/users/${id}`, {
        followers: followers,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
