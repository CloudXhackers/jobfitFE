export type Application = {
  id: number | string
  date: string
  appNumber: string
  jobId: number
  jobRole: string
  company: string
  source: string
  resume?: string
  coverLetter?: string
  documents?: string[]
  status: string
  matchPercentage?: {
    exp: number
    skill: number
    req: number
    overall: number
  }
}

export const applications: Application[] = [
  {
    id: 1,
    date: "2024-10-26",
    appNumber: "69",
    jobId: 1,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    coverLetter: "SDECoverLetterV1.pdf",
    documents: ["additionalDocument1.pdf"],
    status: "applied",
    matchPercentage: {
      exp: 80,
      skill: 100,
      req: 100,
      overall: 95,
    },
  },
  {
    id: 2,
    date: "2024-10-26",
    appNumber: "70",
    jobId: 2,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    coverLetter: "SDECoverLetterV1.pdf",
    documents: ["additionalDocument1.pdf"],
    matchPercentage: {
      exp: 80,
      skill: 100,
      req: 100,
      overall: 95,
    },
    status: "waiting",
  },
  {
    id: 3,
    date: "2024-10-26",
    appNumber: "80",
    jobId: 3,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    coverLetter: "SDECoverLetterV1.pdf",
    documents: ["additionalDocument1.pdf"],
    matchPercentage: {
      exp: 80,
      skill: 100,
      req: 100,
      overall: 95,
    },
    status: "inteviewing",
  },
  {
    id: 4,
    date: "2024-10-26",
    appNumber: "90",
    jobId: 4,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    coverLetter: "SDECoverLetterV1.pdf",
    documents: ["additionalDocument1.pdf"],
    matchPercentage: {
      exp: 80,
      skill: 100,
      req: 100,
      overall: 95,
    },
    status: "declined",
  },
  {
    id: 5,
    date: "2024-10-26",
    appNumber: "90",
    jobId: 5,
    jobRole: "Software Engineer",
    company: "Google",
    source: "LinkedIn",
    resume: "SDEResumeV1.pdf",
    coverLetter: "SDECoverLetterV1.pdf",
    documents: ["additionalDocument1.pdf"],
    matchPercentage: {
      exp: 80,
      skill: 100,
      req: 100,
      overall: 95,
    },
    status: "offer",
  },
]
