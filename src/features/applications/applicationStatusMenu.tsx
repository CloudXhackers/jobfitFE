import type { SelectChangeEvent } from "@mui/material"
import { FormControl, MenuItem, Select } from "@mui/material"
import { useState } from "react"

export default function ApplicationStatusMenu({ applicationStatus }) {
  const [status, setStatus] = useState(applicationStatus)
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
    setStatus(e.target.value as string)
  }

  return (
    <FormControl size="small" sx={{ verticalAlign: "baseline" }}>
      <Select
        value={status}
        sx={{
          backgroundColor: menuItemColor[status as keyof MenuItemColor],
          borderRadius: 8,
          fontSize: "1rem",
          width: 130,
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
