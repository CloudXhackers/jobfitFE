import { createAppSlice } from "../../app/createAppSlice"
import { applications, type Application } from "./applicationsData"

export type ApplicationsState = {
  applications: Application[]
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: ApplicationsState = {
  applications: applications,
  loading: "idle",
  error: null,
}

export const applicationsSlice = createAppSlice({
  name: "applications",
  initialState,
  reducers: {},
})

export default applicationsSlice.reducer
