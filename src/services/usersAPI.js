import axios from "axios";

export const usersAPI = axios.create({
  baseURL: "https://65d617adf6967ba8e3bd7da4.mockapi.io/",
});

// export const setToken = (token) => {
//   conectAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// export const clearToken = () => {
//   conectAPI.defaults.headers.common.Authorization = "";
// };
