import React from "react"
import JobCard from "./JobCard"
import { Grid } from "@mui/material"
import { useAppSelector } from "../../app/hooks"
import { selectAllJobs } from "./jobsSlice"


const Jobs = () => {
  const jobs = useAppSelector(selectAllJobs, { devModeChecks: { stabilityCheck: "never" } })

  return (
    <div className="space-y-8">
      <Grid container spacing={4}>
        {jobs.map(job => (
          <JobCard key={"job" + job.id} job={job} />
        ))}
      </Grid>
    </div>
  )
}

export default Jobs