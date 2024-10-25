import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

export type Job = {
  jobId: string
  title: string
  companyName: string
  companyAddress: string
  description: String
}

export type Jobs = Job[]

export type JobsState = {
  jobs: Jobs | []
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: JobsState = {
  jobs: [],
  loading: 'idle',
  error: null
}

export const jobsSlice = createSlice({
  name: 'jobs', initialState, reducers: {}
})

export default jobsSlice.reducer
