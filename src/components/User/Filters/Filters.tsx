import React from "react"
import FilterComp from "./FilterComp"

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

const Filters = () => {
  return (
    <div className="flex-row flex px-4 justify-start pb-6">
      <div className="text-base font-bold text-[#3C3D37] pt-1">Filters</div>
      <div className="flex-row flex px-12 justify-start space-x-12">
        {Object.entries(filterList).map(([filter, filtercontents]) => (
          <FilterComp title={filter} contents={filtercontents} />
        ))}
      </div>
    </div>
  )
}

export default Filters
