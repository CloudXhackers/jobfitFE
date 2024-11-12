import type { Job } from "../dummyData/jobs";
import { jobs } from "../dummyData/jobs"
import { createAppSlice } from "../../app/createAppSlice";

export type JobsState = {
  jobs: Job[]
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: JobsState = {
  jobs: jobs,
  loading: "idle",
  error: null,
}

export const jobsSlice = createAppSlice({
  name: "jobs",
  initialState,
  reducers: {},
})

export default jobsSlice.reducer
