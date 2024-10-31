import React, { useState } from "react"
import {
  Card,
  CardContent,
  Chip,
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import AddIcon from "@mui/icons-material/Add"
import CloseIcon from "@mui/icons-material/Close"

const ChipSection = ({ title, items, onAdd, onDelete, onEdit }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [newItem, setNewItem] = useState("")
  const [editingItem, setEditingItem] = useState({ index: -1, value: "" })

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
    <div className="space-y-2">
      <div className="flex-row flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <IconButton
          size="small"
          onClick={() => setIsDialogOpen(true)}
          sx={{ color: "white" }}
        >
          <AddIcon />
        </IconButton>
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <Chip
            key={index}
            label={item}
            onDelete={() => onDelete(index)}
            onClick={() => setEditingItem({ index, value: item })}
            sx={{
              backgroundColor: "rgba(59, 130, 246, 0.5)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(59, 130, 246, 0.7)",
              },
            }}
          />
        ))}
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

const ProfileCard = ({ userData }) => {
  const [data, setData] = useState(userData)

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

  return (
    <Card class="w-full overflow-hidden mt-2 mb-5 rounded-3xl">
      <div class="bg-gradient-to-r from-[#27468C] to-[#4780FF] text-white px-6 py-2">
        <CardContent>
          <div className="flex-row flex gap-3 align-middle items-center mb-4">
            <h2 className="text-3xl font-semibold">Hi, {data.name}</h2>
            <p className="flex-row flex gap-1">
              <p className="text-white text-sm">- Summarizing your</p>
              <p className="text-white text-sm font-bold">Requirements</p>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <ChipSection
                title="Preferred Jobs"
                items={data.preferredJobs}
                onAdd={handleAdd("preferredJobs")}
                onDelete={handleDelete("preferredJobs")}
                onEdit={handleEdit("preferredJobs")}
              />

              <ChipSection
                title="Preferred Job Type"
                items={data.preferredJobType}
                onAdd={handleAdd("preferredJobType")}
                onDelete={handleDelete("preferredJobType")}
                onEdit={handleEdit("preferredJobType")}
              />

              <ChipSection
                title="Skills"
                items={data.skills}
                onAdd={handleAdd("skills")}
                onDelete={handleDelete("skills")}
                onEdit={handleEdit("skills")}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ChipSection
                title="Preferred Locations"
                items={data.preferredLocations}
                onAdd={handleAdd("preferredLocations")}
                onDelete={handleDelete("preferredLocations")}
                onEdit={handleEdit("preferredLocations")}
              />

              <ChipSection
                title="Experience"
                items={data.experience}
                onAdd={handleAdd("experience")}
                onDelete={handleDelete("experience")}
                onEdit={handleEdit("experience")}
              />
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default ProfileCard
