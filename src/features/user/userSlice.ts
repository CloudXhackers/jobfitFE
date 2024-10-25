import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

export type user = {
  fname: string
  lname: string
  email: string
  website?: string
  linkedIn?: string
  interests?: string[]
  tech?: string[]
  resume?: string
}

export type userState = {
  user: user | {}
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: userState = {
  user: {},
  loading: 'idle',
  error: null
}

export const userSlice = createSlice({
  name: 'user', initialState, reducers: {}
})

export default userSlice.reducer
