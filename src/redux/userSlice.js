import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_DEFAULT_INFO } from "../utils/consts";
import { getUsers, getUser, postUser, editUser, deleteUser } from "../utils/api";

const initialState = {
  user: USER_DEFAULT_INFO,
  users: [],
};

export const getUsersAction = createAsyncThunk(
  'users/getUsersAction',
  async () => {
    const res = await getUsers();
    return res.data;
  });

export const getUserAction = createAsyncThunk(
  'users/getUsersAction',
  async (id) => {
    const res = await getUser(id);
    return res.data;
  });

export const postUserAction = createAsyncThunk(
  'users/postUserAction',
  async (body, { rejectWithValue }) => {
    try {
      const res = await postUser(body);
      return res;
    } catch (err) {
      return rejectWithValue('Opps there seems to be an error')
    }
  });

export const editUserAction = createAsyncThunk(
  'users/editUserAction',
  async (body, id, { rejectWithValue }) => {
    try {
      const res = await editUser(body, id);
      return res;
    } catch (err) {
      return rejectWithValue('Opps there seems to be an error editign this user')
    }
  });

  export const deleteUserAction = createAsyncThunk(
    'users/deleteUserAction',
    async ( id, { rejectWithValue }) => {
      try {
        const res = await deleteUser(id);
        return res;
      } catch (err) {
        return rejectWithValue('Opps there seems to be an error editign this user')
      }
    });


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, age, email, userType } = action.payload;
      state.user.name = name;
      state.user.age = age;
      state.user.email = email;
      state.user.userType = userType;
    },
    setDate: (state, action) => {
      state.user.joinDate = action.payload;
    },
    getUserslist: (state, action) => {
      state.users = action.payload
    }
  },
});

export const { setUser, setDate } = userSlice.actions;
export default userSlice.reducer;
