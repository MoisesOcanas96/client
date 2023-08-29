import { API_URL } from "../utils/consts";
import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get(API_URL);
    return res;
  } catch (err) {
    console.log("Error getting the user list");
  }
};

export const getUser = async (id) => {
  try {
    let res = await axios.get(`${API_URL}/${id}`);
    return res;
  } catch (err) {
    console.log("Error getting the user info");
  }
};


export const postUser = async (user) => {
  try {
    let res = await axios.post(`${API_URL}/`, user);
    return res;
  } catch (err) {
    console.log("Error posting the new user");
  }
};

export const editUser = async (user, id) => {
  try {
    let res = await axios.put(`${API_URL}/${id}`, user);
    return res;
  } catch (err) {
    console.log("Error editing the user");
  }
};

export const deleteUser = async (id) => {
  try {
    let res = await axios.delete(`${API_URL}/${id}`)
    return res;
  } catch (err) {
    console.log("Error deleting user");
  }
};
