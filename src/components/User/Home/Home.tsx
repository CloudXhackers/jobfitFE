import React, { useEffect, useState } from "react"

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
import SearchBox from "../Search/SearchBox"
import Filters from "../Filters/Filters"

const filterList = {
  "Job Type": ["Full-time", "Part-time", "Internship"],
  "Job Title": ["Software Engineer", "ML Engineer", "Data Scientist"],
  Location: ["California", "Chicago", "Dallas"],
  "Salary Range": [
    "< $50K",
    "$50K-100K",
    "$100k-150K",
    "$150k-200K",
    "$200k-250K",
    "$250k-300K",
  ],
  Sponsorship: ["H1B Sponsor", "No Sponsorship", "L1 Sponsor", "Other Permit"],
  Company: ["Google", "Microsoft", "Tesla", "Meta"],
  "Match %": ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%"],
  "Job Role": [
    "Fresher",
    "< 1 Yr Exp.",
    "< 2 Yr Exp.",
    "< 3 Yr Exp.",
    "< 5 Yr Exp.",
    "< 10 Yr Exp.",
    "+ 10 Yr Exp.",
  ],
}

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
  const [isScaling, setIsScaling] = useState(false)

  const setScaling = () => {
    setIsScaling(prev => !prev)
    setTimeout(() => setIsScaling(prev => !prev), 400)
  }

  const handleCard = () => {
    setProfileCardOpen(prev => !prev)

    setScaling()
  }

  const [jobClick, setJobClick] = useState(false)

  return (
    <div className="flex flex-row transition-all duration-500 ease-in-out">
      <div className={`${jobClick ? "w-1/2" : "w-full"} p-10 mx-auto`}>
        <div className="flex-row flex">
          <div className="flex-row flex gap-x-1 bg-[#4379F2] text-white rounded-xl px-5 py-[0.1rem]">
            <Typography class="font-thin">All Jobs are</Typography>
            <Typography class="font-semibold">up-to-date</Typography>
          </div>
          <Typography class="pl-3 py-[0.2rem] font-thin text-[#3C3D37] text-sm text-center align-middle justify-center">
            Refreshed at {time}
          </Typography>
        </div>
        <div
          className={`transition-transform duration-500 ease-in-out transform ${
            isScaling ? "scale-95" : "scale-100"
          }`}
        >
          {profileCardOpen ? (
            <ProfileCard userData={userData} handleClose={handleCard} />
          ) : (
            <ProfileCardSummarized
              userData={userData}
              handleOpen={handleCard}
            />
          )}
        </div>
        <SearchBox />
        <Filters filterList={filterList} />
        <Jobs jobClick={jobClick} />
      </div>
      {jobClick ? (
        <div className={`${jobClick ? "w-1/2" : "w-0"} p-10 mx-auto`}></div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Home
