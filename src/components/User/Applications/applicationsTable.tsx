import { Box } from "@mui/material"
import type {
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp,
  GridColumnVisibilityModel,
  GridRowParams,
  MuiEvent,
  GridRowId,
} from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import JobPage from "./applicationPage"
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
    jobId: 1,
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
    jobId: 2,
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
    jobId: 3,
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
    jobId: 4,
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
    jobId: 5,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    status: "offer",
  },
]

export default function ApplicationsTable() {
  const [applications, setApplications] = useState([])
  const [selected, setSelected] = useState<GridRowId | null>(null)
  const [columnVisibilityModel, setColumnVisibityModel] =
    useState<GridColumnVisibilityModel>({})

  // fetch data on initialization
  useEffect(() => {
    setApplications(rows)
  }, [])
// resize table when an application is selected
  useEffect(() => {
    selected
      ? setColumnVisibityModel({
          source: false,
          resume: false,
        })
      : setColumnVisibityModel({
          source: true,
          resume: true,
        })
  }, [selected])

  // close jobPage and resize dataGrid when JobPage closeIcon is clicked
  const handleCloseJobPage = () => {
    setSelected(null)
  }

  // fires when user clicks on a new row
  // get jobData - pass down jobId in props to be fetched from JobPage
  // resize dataGrid
  // show jobPage for seleceted job

  const handleRowClick = (params: GridRowParams) => {
    setSelected(params.id)
  }

  return (
    <Box id="table-wrapper" py={2} display="flex">
      <DataGrid
        rows={applications}
        columns={columns}
        disableColumnMenu
        columnVisibilityModel={columnVisibilityModel}
        onRowClick={handleRowClick}
        sx={{
          border: 0,
          borderRadius: 8,
          bgcolor: "#EEE",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold !important",
          },
        }}
      />
      {selected ? <JobPage applicationId={selected} closePage={handleCloseJobPage} /> : null}
    </Box>
  )
}