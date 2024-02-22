// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { usersAPI } from "../../services/usersAPI";

// axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await usersAPI.get("/users");
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
