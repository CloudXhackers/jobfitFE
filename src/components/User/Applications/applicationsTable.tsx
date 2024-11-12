import { Box } from "@mui/material"
import type {
  GridColDef,
  GridColumnVisibilityModel,
  GridRenderCellParams,
  GridRowParams
} from "@mui/x-data-grid"
import { DataGrid } from "@mui/x-data-grid"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import type { Application } from "../../../features/dummyData/applications"
import ApplicationPage from "./applicationPage"
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
    renderCell: (params: GridRenderCellParams) => ApplicationStatusMenu({ applicationStatus: params.row.status }),
  },
]

export default function ApplicationsTable() {
  const [selected, setSelected] = useState< Application | null>(null)
  const [columnVisibilityModel, setColumnVisibityModel] =
    useState<GridColumnVisibilityModel>({})

  const applications = useAppSelector(state=>state.applications.applications)

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

  const handleClosePage = () => {
    setSelected(null)
  }

  const handleRowClick = (params: GridRowParams) => {
    setSelected(applications[params.row.id])
    console.log('inside handleRowClick - params.row :>> ', params.row);
  }

  return (
    <Box id="table-wrapper" py={2} display="flex" gap="1rem">
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
          minWidth: "35%",
          ".MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold !important",
          },
        }}
      />
      {selected ? (
        <ApplicationPage application={selected} closePage={handleClosePage} />
      ) : null}
    </Box>
  )
}
