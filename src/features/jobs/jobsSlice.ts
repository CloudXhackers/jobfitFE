import { createSlice } from "@reduxjs/toolkit"
//import type { PayloadAction } from '@reduxjs/toolkit';

export type Job = {
  id: number
  title: string
  company: string
  location: string
  type: string
  salary: string
  level: string
  skills: string[]
  sponsorship?: string
  posted: string
  matchPercentage?: number
  workType: string
  description: string
  requirements: string[]
  qualifications: string[]
  benefits?: string[]
  responsibilities: string[]
}

export type Jobs = Job[]

export type JobsState = {
  jobs: Jobs | []
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: JobsState = {
  jobs: [],
  loading: "idle",
  error: null,
}

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
})

export default jobsSlice.reducer
