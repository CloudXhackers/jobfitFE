import type { Job } from "./jobsData"
import { jobs } from "./jobsData"
import { createAppSlice } from "../../app/createAppSlice"
import type { EntityId, EntityState } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"

const jobsAdapter = createEntityAdapter<Job>()

export interface JobsState extends EntityState<Job, EntityId> {
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: JobsState = jobsAdapter.getInitialState(
  {
    loading: "idle",
    error: null,
  },
  jobs,
)

export const jobsSlice = createAppSlice({
  name: "jobs",
  initialState,
  reducers: {},
})

export const selectAllJobs = (state: { jobs: JobsState }) => 
  jobsAdapter.getSelectors().selectAll(state.jobs)

export const selectJobById = (state: { jobs: JobsState }, id: number) => 
  jobsAdapter.getSelectors().selectById(state.jobs, id)

export default jobsSlice.reducer
