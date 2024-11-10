import React from "react"
import JobCard from "./JobCard"
import { Grid } from "@mui/material"

export const jobs = [
  {
    id: 1,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 2,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 3,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 4,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 5,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 5,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 6,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 7,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    type: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    posted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  // Add more jobs as needed
]

const Jobs = () => {
  return (
    <div className="space-y-8">
      <Grid container spacing={4}>
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </Grid>
    </div>
  )
}

export default Jobs
