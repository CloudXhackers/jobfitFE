import { createAsyncThunk } from "@reduxjs/toolkit"
import { userData } from "../dummyData/user"
import { createAppSlice } from "../../app/createAppSlice"

export type userState = {
  user: {}
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: userState = {
  user: userData,
  loading: "idle",
  error: null,
}

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    try {
      //not working yet
      const res = await setTimeout(() => userData, 3000)
      return res
    } catch (error) {
      console.log("error fetching userData")
    }
  },
)

export const userSlice = createAppSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload
    },
  },
  extraReducers(builder){
    builder.addCase(fetchUserData.pending, (state) => {
      state.loading = "pending"
    })
    .addCase(fetchUserData.rejected, (state, action) => {
      state.loading = "failed"
      state.error = action.error.message
    })
    .addCase(fetchUserData.fulfilled, (state, action) => {
      state.loading="succeeded"
      state.user=action.payload
    })
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
