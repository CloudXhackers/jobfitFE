import React, { useState } from "react"

import Button from "@mui/material/Button"
import { Card, CardContent, Grid, Typography } from "@mui/material"
import Badge from "@mui/material/Badge"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FmdGoodIcon from "@mui/icons-material/FmdGood"
import HomeWorkIcon from "@mui/icons-material/HomeWork"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import Jobs from "../Jobs/Jobs"
import ProfileCard from "../ProfileCard/ProfileCard"
import ProfileCardSummarized from "../ProfileCard/ProfileCardSummarized"

const userData = {
  name: "Praneeth",
  preferredJobs: [
    "Data Scientist",
    "Software Engineer",
    "ML Engineer",
    "Frontend/Backend",
    "DevOps",
    "Data Scientist",
    "Software Engineer",
    "ML Engineer",
    "Frontend/Backend",
    "DevOps",
  ],
  preferredJobType: ["Full-Time", "H1B Sponsor", "Hybrid"],
  preferredLocations: [
    "Bay Area, SF",
    "New York",
    "Dallas, TX",
    "Seattle",
    "Remote",
  ],
  preferredPay: ["$120K - $180K"],
  skills: [
    "Data Science",
    "ML/AI",
    "Python",
    "SQL",
    "R",
    "ETL Pipelines",
    "Optimization",
    "Front-end",
    "Back-end",
    "Data Engineering",
    "CI/CD",
    "DevOps",
    "UI/UX",
  ],
  experience: [
    "Data Analyst (2 YR)",
    "Data Scientist (1 Yr)",
    "Software Engineer (1 Yr)",
  ],
}

const Home = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [profileCardOpen, setProfileCardOpen] = useState(false)
  const time = "9:00 AM PST"

  const handleCard = () => {
    setProfileCardOpen(prev => !prev)
  }

  return (
    <div className="w-full p-10 mx-auto ">
      <div className="flex-row flex">
        <div className="flex-row flex gap-x-1 bg-[#4379F2] text-white rounded-xl px-5 py-[0.1rem]">
          <Typography class="font-thin">All Jobs are</Typography>
          <Typography class="font-semibold">up-to-date</Typography>
        </div>
        <Typography class="pl-3 py-[0.2rem] font-thin text-[#3C3D37] text-sm text-center align-middle justify-center">
          Refreshed at {time}
        </Typography>
      </div>

      {profileCardOpen ? (
        <ProfileCard userData={userData} handleClose={handleCard} />
      ) : (
        <ProfileCardSummarized userData={userData} handleOpen={handleCard} />
      )}

      <Jobs />
    </div>
  )
}

export default Home
