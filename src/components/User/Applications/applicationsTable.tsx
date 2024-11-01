import { Box } from "@mui/material"
import type {
  GridCallbackDetails,
  GridColDef,
  GridRowParams,
  GridRowSelectionModel,
  GridRowsProp,
  MuiEvent,
} from "@mui/x-data-grid"
import { DataGrid, GridColumnVisibilityModel } from "@mui/x-data-grid"
import ApplicationStatusMenu from "./applicationStatusMenu"
import { useState } from "react"
import React from "react"

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
  const [rowSelectionModel, setRowSelectionModel] =
    useState<GridRowSelectionModel>([])
  const [columnVisibilityModel, setColumnVisibityModel] =
    useState<GridColumnVisibilityModel>({})

  const ChangeRowSelectionModel = (
    newRowSelectionModel: GridRowSelectionModel,
  ) => {
    const gridWrapper: HTMLElement = document.getElementById("grid-wrapper")
    const showJob = () => {
      gridWrapper.style.width = "40%"
      setColumnVisibityModel({
        source: false,
        resume: false,
      })
      console.log('gridWrapper :>> ', gridWrapper);
      // Show/hide Job component
      //gridWrapper.appendChild(React.createElement('div', { value: "Job component" }))
    }
    
    const hideJob = () => {
      gridWrapper.style.width = "100%"
      setColumnVisibityModel({
        source: true,
        resume: true,
      })
    }

    newRowSelectionModel[0] ? showJob() : hideJob()

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
    </Box>
  )
}
