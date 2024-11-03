// ProfilePage.js
import React from "react"
import {
  Button,
  Chip,
  Box,
  Typography,
  Card,
  IconButton,
  Tooltip,
} from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import RefreshIcon from "@mui/icons-material/Refresh"
import WorkIcon from "@mui/icons-material/Work"

const ProfilePage = () => {
  return (
    <div className="p-12 bg-gray-100">
      {/* Profile Header */}
      <div className="flex flex-row w-full justify-between">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-row items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl">
              PC
            </div>
            <div className="flex flex-col space-x-4">
              <Typography variant="h5">Praneeth Chitturi</Typography>
              <Typography variant="body2" color="textSecondary">
                Company | Education | Location
              </Typography>
              <Button variant="outlined" startIcon={<EditIcon />}>
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
        <Card className="mb-6 p-4">
          <div className="grid grid-cols-3 gap-4">
            <Statistic
              icon={<MailOutlineIcon />}
              label="Total Applications"
              value="X"
            />
            <Statistic
              icon={<RefreshIcon />}
              label="Resume Revamps"
              value="Y"
            />
            <Statistic
              icon={<WorkIcon />}
              label="Preferred Job"
              value="Software Developer, Data Scientist"
            />
          </div>
        </Card>
      </div>

      {/* Preferred Roles and Skills */}
      <div className="mb-6">
        <Typography variant="h6">Preferred Roles:</Typography>
        <Box className="flex flex-wrap gap-2 mt-2">
          {["Data Scientist", "Software Engineer", "ML Engineer"].map(role => (
            <Chip
              key={role}
              label={role}
              variant="outlined"
              className="hover:bg-blue-100"
            />
          ))}
        </Box>
      </div>

      <div className="mb-6">
        <Typography variant="h6">Skills:</Typography>
        <Box className="flex flex-wrap gap-2 mt-2">
          {["Python", "SQL", "R", "Optimization", "Machine Learning"].map(
            skill => (
              <Chip
                key={skill}
                label={skill}
                variant="outlined"
                className="hover:bg-green-100"
              />
            ),
          )}
          <Chip label="..." variant="outlined" />
        </Box>
      </div>

      {/* Education */}
      <div className="mb-6">
        <Typography variant="h6">Education:</Typography>
        <Typography variant="body2" color="textSecondary">
          Masters of Science
          <br />
          Texas A&M University, TX
          <br />
          2021-2023
        </Typography>
      </div>

      {/* Work History */}
      <div className="mb-6">
        <Typography variant="h6">Work History:</Typography>
        <Typography variant="body2">
          Data Scientist
          <br />
          CompanyX
          <br />
          2023-Present
        </Typography>
        <ul className="list-disc ml-6 text-sm">
          <li>
            Mapped future state VSM strategically with team and quantified gains
            by Kanban Pull model in ARENA...
          </li>
          <li>
            Reduced RM inventory by 184 days, WIP inventory by 23.5 days, and FG
            inventory by 413 days with inventory...
          </li>
        </ul>
      </div>

      {/* Documents */}
      <div className="mb-6">
        <Typography variant="h6">Documents</Typography>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <DocumentCard
            title="Resume"
            files={[
              "DataScienceResume.pdf",
              "DataAnalystV1.pdf",
              "DataAnalystV2.pdf",
            ]}
          />
          <DocumentCard
            title="Cover Letter"
            files={["Company1CV.pdf", "CV2.pdf"]}
          />
        </div>
      </div>
    </div>
  )
}

const Statistic = ({ icon, label, value }) => (
  <div className="flex items-center space-x-2">
    <IconButton>{icon}</IconButton>
    <div>
      <Typography variant="body2" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </div>
  </div>
)

const DocumentCard = ({ title, files }) => (
  <Card className="p-4">
    <Typography variant="subtitle1">{title}</Typography>
    {files.map((file, index) => (
      <Typography
        key={index}
        variant="body2"
        color="primary"
        className="cursor-pointer hover:underline"
      >
        {file}
      </Typography>
    ))}
  </Card>
)

export default ProfilePage
