import React from "react"
import JobCard from "./JobCard"
import { Grid } from "@mui/material"
import { jobs } from "../../../features/dummyData/jobs"

const Jobs = () => {
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
