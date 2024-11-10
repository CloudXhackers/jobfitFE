import { useState } from "react"

import { Typography } from "@mui/material"
import Jobs from "../Jobs/Jobs"
import ProfileCard from "../ProfileCard/ProfileCard"
import ProfileCardSummarized from "../ProfileCard/ProfileCardSummarized"
import { userData } from "../../../features/dummyData/user"

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
