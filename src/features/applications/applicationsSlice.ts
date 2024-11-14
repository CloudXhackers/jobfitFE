import type { EntityId, EntityState } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { applications, type Application } from "./applicationsData"

const applicationsAdapter = createEntityAdapter<Application>()

export interface ApplicationsState extends EntityState<Application, EntityId> {
  loading: "idle" | "pending" | "succeeded" | "failed"
  error: string | undefined | null
}

const initialState: ApplicationsState = applicationsAdapter.getInitialState(
  { loading: "idle", error: null },
  applications,
)

export const applicationsSlice = createAppSlice({
  name: "applications",
  initialState,
  reducers: {},
})

export const selectAllApplications = (state: { applications: ApplicationsState }) => applicationsAdapter.getSelectors().selectAll(state.applications)
export const selectApplicationById = (
  state: { applications: ApplicationsState },
  id: string | number,
) => applicationsAdapter.getSelectors().selectById(state.applications, id)

export default applicationsSlice.reducer
