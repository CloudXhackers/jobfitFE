import { useState } from "react"

import { Typography } from "@mui/material"
import Jobs from "../jobs/Jobs"
import ProfileCard from "./ProfileCard"
import ProfileCardSummarized from "./ProfileCardSummarized"
import { useAppSelector } from "../../app/hooks"

const Home = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [profileCardOpen, setProfileCardOpen] = useState(false)
  const time = "9:00 AM PST"
  const user = useAppSelector(state => state.user.user)

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
        <ProfileCard userData={user} handleClose={handleCard} />
      ) : (
        <ProfileCardSummarized userData={user} handleOpen={handleCard} />
      )}

      <Jobs />
    </div>
  )
}

export default Home
