import React from "react"
import SearchBox from "../Search/SearchBox"
import Filters from "../Filters/Filters"
import Dashboard from "../Dashboard/Dashboard"

const filterList = {
  "Applied Date": [],
  Source: ["LinkedIn", "Glassdoor", "CompanyWebsite", "Monster.com"],
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

const ApplicationTracker = () => {
  return (
    <div className="p-10">
      <SearchBox />
      <Filters filterList={filterList} />
      <Dashboard />
    </div>
  )
}

export default ApplicationTracker
