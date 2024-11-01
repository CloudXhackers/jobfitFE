import type { SelectChangeEvent } from "@mui/material";
import { Box, FormControl, MenuItem, Select } from "@mui/material";
import type {
  GridColDef,
  GridRenderCellParams,
  GridRowsProp,
} from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";


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
    renderCell: StatusMenu
  }
]

function StatusMenu(params: GridRenderCellParams<String>) {

  const [value, setValue] = useState(params.value)

type MenuItemColor = {
  applied: string;
  waiting: string;
  inteviewing: string;
  offer: string;
  declined: string;
}

  const menuItemColor: MenuItemColor = {
    applied: "#78B7D0",
    waiting: "#FABC3F",
    inteviewing: "#FFAD60",
    offer: "#9CDBA6",
    declined: "#FF6969"
  }

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as string)
  }

  return (
    <FormControl size="small" sx={{ verticalAlign: 'middle' }}>
    <Select
      value={value}
      sx={{ backgroundColor: menuItemColor[value],borderRadius: 8, fontSize: "1rem", width: 150, lineHeight: 1 }}
      onChange={handleChange}
    >
      <MenuItem value="applied">Applied</MenuItem>
      <MenuItem value="waiting">Waiting</MenuItem>
      <MenuItem value="inteviewing">Inteviewing</MenuItem>
      <MenuItem value="offer">Offer</MenuItem>
      <MenuItem value="declined">Declined</MenuItem>
    </Select>
  </FormControl>
  )
}

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
