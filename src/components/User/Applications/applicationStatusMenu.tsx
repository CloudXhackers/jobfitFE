import type { SelectChangeEvent} from "@mui/material";
import { FormControl, Select, MenuItem } from "@mui/material"
import type { GridRenderCellParams } from "@mui/x-data-grid"
import { useState } from "react"

export default function ApplicationStatusMenu(
  params: GridRenderCellParams<String>,
) {
  const [value, setValue] = useState(params.value)

  type MenuItemColor = {
    applied: string
    waiting: string
    inteviewing: string
    offer: string
    declined: string
  }

  const menuItemColor: MenuItemColor = {
    applied: "#78B7D0",
    waiting: "#f3d83c",
    inteviewing: "#FFAD60",
    offer: "#9CDBA6",
    declined: "#FF6969",
  }

  const handleChange = (e: SelectChangeEvent) => {
    setValue(e.target.value as string)
  }

  return (
    <FormControl size="small" sx={{ verticalAlign: "baseline" }}>
      <Select
        value={value}
        sx={{
          backgroundColor: menuItemColor[value as keyof MenuItemColor],
          borderRadius: 8,
          fontSize: "1rem",
          width: 150,
        }}
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
