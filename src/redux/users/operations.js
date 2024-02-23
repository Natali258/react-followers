// import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../services/usersAPI";

// axios.defaults.baseURL = "https://65d617adf6967ba8e3bd7da4.mockapi.io/users?page=1&limit=3";
export const changePage = createAction("changePage");
export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (page, thunkAPI) => {
    try {
      const { data } = await usersAPI.get(`/users?page=${page}&limit=3`);
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
      console.log(followers);
      // const { data } = await usersAPI.put(`/users/${id}`, user);
      const { data } = await usersAPI.put(`/users/${id}`, {
        followers: followers,
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
