import AddIcon from "@mui/icons-material/Add"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import CancelIcon from "@mui/icons-material/Cancel"
import EditIcon from "@mui/icons-material/Edit"
import {
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"

const ChipSection = ({
  title,
  items,
  onAdd,
  onDelete,
  onEdit,
  editingflag,
  editing,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState("")
  const [editingItem, setEditingItem] = useState({ index: -1, value: "" })
  const [editmode, setEditMode] = useState(false)

  const handleAdd = () => {
    if (newItem.trim()) {
      onAdd(newItem.trim())
      setNewItem("")
      setIsDialogOpen(false)
    }
  }

  const handleEdit = () => {
    if (editingItem.value.trim()) {
      onEdit(editingItem.index, editingItem.value.trim())
      setEditingItem({ index: -1, value: "" })
    }
  }

  return (
    <div className=" flex-row flex w-full overflow-hidden  items-start ">
      <h3 className="text-sm font-semibold w-[20%] text-left  whitespace-nowrap overflow-hidden">
        {title}:
      </h3>

      <div className="flex flex-wrap gap-2 w-[70%] ">
        {items.map((item, index) =>
          editmode & editingflag ? (
            <Chip
              key={index}
              size="small"
              label={item}
              onDelete={() => onDelete(index)}
              onClick={() => setEditingItem({ index, value: item })}
              className="text-xs font-semibold "
              deleteIcon={<CancelIcon fontSize="0.1rem" />}
              sx={{
                margin: 0,
                backgroundColor: "rgba(59, 130, 246, 0.5)",
                color: "white",
                borderRadius: "0.6rem",
                "&:hover": {
                  backgroundColor: "rgba(59, 130, 246, 0.7)",
                },
              }}
            />
          ) : (
            <div className="py-0">
              <Chip
                key={index}
                label={item}
                size="small"
                className="text-xs font-semibold"
                sx={{
                  margin: 0,
                  backgroundColor: "#DFF2EB",
                  borderRadius: "0.6rem",
                  color: "#3C3D37",
                }}
              />
            </div>
          ),
        )}
      </div>
      <div className="gap-0 px-1">
        {editmode & editingflag ? (
          <IconButton
            size="small"
            onClick={() => setIsDialogOpen(true)}
            sx={{ color: "white", width: "10%" }}
          >
            <AddIcon fontSize="0.1rem" />
          </IconButton>
        ) : (
          <IconButton
            size="small"
            onClick={() => {
              setEditMode(true)
              !editingflag && editing()
            }}
            sx={{ color: "white", width: "10%" }}
          >
            <EditIcon fontSize="0.1rem" />
          </IconButton>
        )}
      </div>

      {/* Add Dialog */}
      <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogTitle>Add New {title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={`New ${title}`}
            fullWidth
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            onKeyPress={e => e.key === "Enter" && handleAdd()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog
        open={editingItem.index !== -1}
        onClose={() => setEditingItem({ index: -1, value: "" })}
      >
        <DialogTitle>Edit {title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label={`Edit ${title}`}
            fullWidth
            value={editingItem.value}
            onChange={e =>
              setEditingItem({ ...editingItem, value: e.target.value })
            }
            onKeyPress={e => e.key === "Enter" && handleEdit()}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditingItem({ index: -1, value: "" })}>
            Cancel
          </Button>
          <Button onClick={handleEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const ProfileCard = ({ userData, handleClose }) => {
  const [data, setData] = useState(userData)
  const [editting, setEditting] = useState(false)

  const handleAdd = section => newItem => {
    setData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }))
  }

  const handleDelete = section => index => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }))
  }

  const handleEdit = section => (index, newValue) => {
    setData(prev => ({
      ...prev,
      [section]: prev[section].map((item, i) =>
        i === index ? newValue : item,
      ),
    }))
  }

  const handleEditing = () => {
    setEditting(prev => !prev)
  }

  return (
    <Card class="w-full overflow-hidden mt-2 mb-5 rounded-3xl">
      <div class="bg-gradient-to-r from-[#27468C] to-[#4780FF] text-white px-6 py-2">
        <CardContent>
          <div className="flex-row flex gap-3 align-middle items-center mb-4">
            <h2 className="text-3xl font-semibold">Hi, {data.name}</h2>
            <div className="flex-row flex gap-1">
              <p className="text-white text-sm font-thin">- Summarizing your</p>
              <p className="text-white text-sm font-semibold">Requirements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6 items-start">
            <ChipSection
              title="Preferred Job"
              items={data.preferredJobs}
              onAdd={handleAdd("preferredJobs")}
              onDelete={handleDelete("preferredJobs")}
              onEdit={handleEdit("preferredJobs")}
              editingflag={editting}
              editing={handleEditing}
            />
            <div className="hidden md:block w-px h-full bg-white/50 mx-4"></div>
            <ChipSection
              title="Preferred Location"
              items={data.preferredLocations}
              onAdd={handleAdd("preferredLocations")}
              onDelete={handleDelete("preferredLocations")}
              onEdit={handleEdit("preferredLocations")}
              editingflag={editting}
              editing={handleEditing}
            />
            <ChipSection
              title="Preferred Job Type"
              items={data.preferredJobType}
              onAdd={handleAdd("preferredJobType")}
              onDelete={handleDelete("preferredJobType")}
              onEdit={handleEdit("preferredJobType")}
              editingflag={editting}
              editing={handleEditing}
            />
            <div className="hidden md:block w-px h-full bg-white/50 mx-4"></div>
            <ChipSection
              title="Preferred Pay"
              items={data.preferredPay}
              onAdd={handleAdd("preferredPay")}
              onDelete={handleDelete("preferredPay")}
              onEdit={handleEdit("preferredPay")}
              editingflag={editting}
              editing={handleEditing}
            />
          </div>
        </CardContent>
      </div>
      <div className="bg-[#1C2E56] px-10 py-6  text-white">
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-6  items-start">
          <ChipSection
            title="Skills"
            items={data.skills}
            onAdd={handleAdd("skills")}
            onDelete={handleDelete("skills")}
            onEdit={handleEdit("skills")}
            editingflag={editting}
            editing={handleEditing}
          />
          <div className="hidden md:block w-px h-full bg-white/50 mx-4"></div>
          <ChipSection
            title="Experience"
            items={data.experience}
            onAdd={handleAdd("experience")}
            onDelete={handleDelete("experience")}
            onEdit={handleEdit("experience")}
            editingflag={editting}
            editing={handleEditing}
          />
        </div>
        <div
          onClick={() => {}}
          className=" flex-row flex justify-end align-middle text-right pt-4"
        >
          {editting && (
            <>
              <Button
                variant="contained"
                class=" text-white  py-1 text-[0.6rem] rounded-full"
                onClick={() => {
                  setData(userData)
                  setEditting(false)
                }}
              >
                <Typography class="font-bold text-white text-xs">
                  Cancel
                </Typography>
              </Button>
              <Button
                variant="contained"
                class="bg-blue-500 text-white px-10 py-1 mx-2 text-[0.6rem] rounded-full space-x-4"
                onClick={() => setEditting(false)}
              >
                <Typography class="font-bold text-white text-xs">
                  Save
                </Typography>
              </Button>
            </>
          )}

          <Button
            sx={{ padding: 0, margin: 0, width: "1px" }}
            color="white"
            onClick={handleClose}
          >
            <ArrowDropUpIcon />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default ProfileCard
