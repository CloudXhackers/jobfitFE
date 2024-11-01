import { Box } from "@mui/material"
import type { GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"
import ApplicationStatusMenu from "./applicationStatusMenu"

const columns: GridColDef[] = [
  {
    field: "date",
    headerName: "Date",
    flex: 0.75,
    headerAlign: "center",
    headerClassName: "text-white text-base",
  },
  {
    field: "appNumber",
    headerName: "App #",
    flex: 0.5,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
  },
  {
    field: "jobRole",
    headerName: "Job Role",
    flex: 1,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
  },
  {
    field: "source",
    headerName: "Source",
    flex: 0.75,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
  },
  {
    field: "resume",
    headerName: "Resume",
    flex: 1.5,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    headerAlign: "center",
    headerClassName: "text-white font-semi-bold text-sm",
    align: "center",
    renderCell: ApplicationStatusMenu,
  },
]

const rows: GridRowsProp = [
  {
    id: 1,
    date: "2024-10-26",
    appNumber: "69",
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "applied",
  },
  {
    id: 2,
    date: "2024-10-26",
    appNumber: "70",
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "waiting",
  },
  {
    id: 3,
    date: "2024-10-26",
    appNumber: "80",
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "inteviewing",
  },
  {
    id: 4,
    date: "2024-10-26",
    appNumber: "90",
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "declined",
  },
  {
    id: 5,
    date: "2024-10-26",
    appNumber: "90",
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "offer",
  },
]

export default function ApplicationsTable() {
  return (
    <Box py={2} display="flex">
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        sx={{
          border: 0,
          borderRadius: 8,
          bgcolor: "#EEE",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold !important",
          },
        }}
      />
    </Box>
  )
}
