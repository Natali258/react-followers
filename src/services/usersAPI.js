import axios from "axios";

export const usersAPI = axios.create({
  baseURL: "https://65d617adf6967ba8e3bd7da4.mockapi.io/",
});
