import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Popover,
} from "@mui/material"
import React, { useState } from "react"

const FilterComp = ({ title, contents }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <div>
      <Chip
        label={title}
        onClick={handleClick}
        className=" border border-gray-300 text-gray-500 px-3 py-1 rounded-full cursor-pointer hover:shadow-md font-normal text-[#3C3D37] text-sm"
        style={{ fontSize: "0.875rem" }} // Tailwind's `text-sm` equivalent
      />
      <Popover
        id={title}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        PaperProps={{
          style: {
            padding: "8px",
            borderRadius: "8px",
            paddingLeft: "12px",
            maxWidth: "200px",
          },
        }}
      >
        <div className="flex flex-col ">
          {contents.map(ele => (
            <FormControlLabel
              control={<Checkbox color="primary" size="small" />}
              label={
                <div className="text-gray-500 font-normal text-[#3C3D37] text-xs">
                  {ele}
                </div>
              }
              className="text-xs"
            />
          ))}

          <div className="mt-3 flex justify-end space-x-2">
            <Button onClick={handleClose} color="primary" size="small">
              Apply
            </Button>
            <Button onClick={handleClose} color="#3C3D37" size="xs">
              Clear
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default FilterComp
