import { Box } from "@mui/material"
import type {
  GridColDef,
  GridRowSelectionModel,
  GridRowsProp
, GridColumnVisibilityModel } from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import JobPage from "../../../pages/jobPage"
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
  const [ showJobPage, setShowJobPage ] = useState(false)
  const [ rowSelectionModel, setRowSelectionModel ] =
    useState<GridRowSelectionModel>([])
  const [ columnVisibilityModel, setColumnVisibityModel ] =
    useState<GridColumnVisibilityModel>({})
  const [ jobs, setJobs ] = useState(rows)

  const ChangeRowSelectionModel = (
    newRowSelectionModel: GridRowSelectionModel,
  ) => {
    // select wrapper. fix type casting
    const gridWrapper: HTMLElement = document.getElementById("grid-wrapper")
    // define open behavior
    const openJobPage = () => {
      // select jobData from state? dataTable? async?
      setShowJobPage(true)

      //gridWrapper.style.width = "40%" // This is wrong. I want the dataGrid width to be 40% 
      setColumnVisibityModel({
        source: false,
        resume: false,
      })
      
      console.log("gridWrapper :>> ", gridWrapper)
      // Show/hide Job component
    }

    const closeJobPage = () => {
      setShowJobPage(false)
      gridWrapper.style.width = "100%"
      setColumnVisibityModel({
        source: true,
        resume: true,
      })
    }

    newRowSelectionModel[0] ? openJobPage() : closeJobPage()
    // show jobDetailsPage
    // include a 'close' but to reset rowSelectionModel to [] and make table width 100%
    console.log("newRowSelectionModel :>> ", newRowSelectionModel)
    setRowSelectionModel(newRowSelectionModel)
  }

  return (
    <Box id="grid-wrapper" py={2} display="flex">
      <DataGrid
        rows={rows}
        columns={columns}
        disableColumnMenu
        rowSelectionModel={rowSelectionModel}
        onRowSelectionModelChange={ChangeRowSelectionModel}
        columnVisibilityModel={columnVisibilityModel}
        sx={{
          border: 0,
          borderRadius: 8,
          bgcolor: "#EEE",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold !important",
          },
        }}
      />
      {showJobPage ? <JobPage /> : null}
    </Box>
  )
}
