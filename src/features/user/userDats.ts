type Education = {
  degree: string
  school: string
  dates?: string
}

type PrevPosition = {
  title: string
  company: string
  employmentDates?: string
  accomplishments?: string[]
}

export type User = {
  fName: string
  lName?: string
  email?: string
  avatar?: string
  website?: string
  linkedIn?: string
  skills?: string[]
  education?: Education[]
  experience: PrevPosition[]
  achievements?: string[]
  projects?: string[]
  licencesAndCerts?: string[]
  authorization?: string[]
  languages?: string[]
  preferredJobs?: string[]
  preferredJobType?: string[]
  preferredLocations?: string[]
  preferredPay?: string[]
  resumes?: string[]
  coverLetters?: string[]
  documents?: string[]
  subscription?: string
}

export const userData: User = {
  fName: "Praneeth",
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
  education: [
    {
      degree: "Masters of Science",
      school: "Texas A&M University",
      dates: "2021 - 2023",
    },
  ],
  experience: [
    {
      title: "Data Analyst",
      company: "Company X",
      employmentDates: "2023 - present",
      accomplishments: [
        "Mapped future state VSM strategically with team and quantified gains by Kanban Pull model in ARENA...",
        "Examined different kinds of wastes using Basic MOST and applied Lean tools: Kanban, FIFO, Line balancing...",
        "Reduced RM inventory by 1.84 days, WIP inventory by 2.35 days and FG inventory by 4.13 days with inventory...",
      ],
    },
    {
      title: "Data Scientist",
      company: "Company Y",
      employmentDates: "2022 - 2023",
      accomplishments: [
        "Mapped future state VSM strategically with team and quantified gains by Kanban Pull model in ARENA...",
        "Examined different kinds of wastes using Basic MOST and applied Lean tools: Kanban, FIFO, Line balancing...",
        "Reduced RM inventory by 1.84 days, WIP inventory by 2.35 days and FG inventory by 4.13 days with inventory...",
      ],
    },
    {
      title: "Software Engineer",
      company: "Company Z",
      employmentDates: "2021 - 2022",
      accomplishments: [
        "Mapped future state VSM strategically with team and quantified gains by Kanban Pull model in ARENA...",
        "Examined different kinds of wastes using Basic MOST and applied Lean tools: Kanban, FIFO, Line balancing...",
        "Reduced RM inventory by 1.84 days, WIP inventory by 2.35 days and FG inventory by 4.13 days with inventory...",
      ],
    },
  ],
  achievements: [],
  projects: [],
  licencesAndCerts: [],
  authorization: [],
  languages: [],
}



