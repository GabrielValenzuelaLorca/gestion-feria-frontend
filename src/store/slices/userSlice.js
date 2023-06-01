import { createSlice } from '@reduxjs/toolkit'

const initialState = sessionStorage.getItem('user')
  ? JSON.parse(sessionStorage.getItem('user'))
  : {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => ({...state, ...action.payload}),
    removeUser: _ => ({}),
  },
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer