import { Box } from "@mui/material";
import type { GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid"

const columns: GridColDef[] = [
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'appNumber', headerName: 'App #', width: 150 },
  { field: 'jobRole', headerName: 'Job Role', width: 150 },
  { field: 'company', headerName: 'Company', width: 150 },
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'resume', headerName: 'Resume', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
];

const rows: GridRowsProp = [
  { id: 1, date: '2024-10-26', appNumber: '69', jobRole: 'Software Engineer', company: "Google", source: "LinkedIn", resume: "SDEResumeV1.pdf", status: 'drop down menu' },
  { id: 2, date: '2024-10-26', appNumber: '70', jobRole: 'Software Engineer', company: "Google", source: "LinkedIn", resume: "SDEResumeV1.pdf", status: 'drop down menu' },
  { id: 3, date: '2024-10-26', appNumber: '80', jobRole: 'Software Engineer', company: "Google", source: "LinkedIn", resume: "SDEResumeV1.pdf", status: 'drop down menu' },
  { id: 4, date: '2024-10-26', appNumber: '90', jobRole: 'Software Engineer', company: "Google", source: "LinkedIn", resume: "SDEResumeV1.pdf", status: 'drop down menu' },
];


export default function ApplicationsList() {
  return(
    <Box sx={{ border: 2, borderRadius: 8, borderColor: 'primary' }}>
      <DataGrid rows={rows} columns={columns}/>
    </Box>
  )
};
