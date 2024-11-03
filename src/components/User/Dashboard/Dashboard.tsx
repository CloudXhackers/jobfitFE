import * as React from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import {
  Checkbox,
  Chip,
  FormControlLabel,
  MenuItem,
  Popover,
  Select,
} from "@mui/material"

interface Column {
  id: "date" | "appnum" | "jobrole" | "company" | "source" | "resume" | "status"
  label: string
  minWidth?: number
  align?: "center"
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: "date", label: "Date", minWidth: 170, align: "center" },
  {
    id: "appnum",
    label: "App\u00a0#",
    minWidth: 100,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "jobrole",
    label: "Job\u00a0Role",
    minWidth: 170,
    align: "center",
  },
  {
    id: "company",
    label: "Company",
    minWidth: 170,
    align: "center",
  },
  {
    id: "source",
    label: "Source",
    minWidth: 170,
    align: "center",
  },
  {
    id: "resume",
    label: "Resume",
    minWidth: 170,
    align: "center",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "center",
  },
]

interface Data {
  date: string
  appnum: number
  jobrole: string
  company: string
  source: string
  resume: string
  status: string
}

function createData(
  date: string,
  appnum: number,
  jobrole: string,
  company: string,
  source: string,
  resume: string,
  status: string,
): Data {
  return { date, appnum, jobrole, company, source, resume, status }
}

const rows = [
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-25",
    68,
    "Software Engineer",
    "Microsoft",
    "LinkedIn",
    "SDEResumeV2.pdf",
    "Applied",
  ),
  createData(
    "2024-10-24",
    67,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Interviewing",
  ),
  createData(
    "2024-10-23",
    66,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV3.pdf",
    "Waiting",
  ),
  createData(
    "2024-10-22",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Declined",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
  createData(
    "2024-10-26",
    69,
    "Software Engineer",
    "Google",
    "LinkedIn",
    "SDEResumeV1.pdf",
    "Offer",
  ),
]

export default function Dashboard() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <>
      <TableContainer sx={{ maxHeight: "full", borderRadius: 8 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              "& .MuiTableCell-head": {
                color: "white",
                backgroundColor: "#4379F2",
              },
            }}
          >
            <TableRow style={{ backgroundColor: "blue" }}>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-body": {
                backgroundColor: "#EAEAEA",
              },
            }}
          >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "resume" && (
                            <>
                              <AttachFileIcon
                                fontSize="small"
                                sx={{ border: 1, borderColor: "gray" }}
                              />
                              <a> </a>
                            </>
                          )}
                          {column.id === "status" && (
                            <>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                onChange={() => {}}
                              >
                                <MenuItem value={10}>Offer</MenuItem>
                                <MenuItem value={20}>Applied</MenuItem>
                                <MenuItem value={30}>Interviewing</MenuItem>
                                <MenuItem value={30}>Waiting</MenuItem>
                                <MenuItem value={30}>Declined</MenuItem>
                              </Select>
                            </>
                          )}
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : column.id !== "status" && value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  )
}
