export type Job = {
  id: number
  title: string
  company: string
  companyLogo?: string
  location: string
  jobType: string
  workType: string
  level: string
  salary: string
  skills: string[]
  sponsorship?: string
  datePosted: string
  description?: string
  requirements?: string[]
  qualifications?: string[]
  benefits?: string[]
  responsibilities?: string[]
  matchPercentage?: number
}

export type Jobs = Job[]

export const jobs: Jobs = [
  {
    id: 1,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    companyLogo: "../../../images/pngimg.com - google_PNG19635.png",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
    description:
      "About Us: We are a dynamic team focused on delivering high-quality software solutions that drive value for ourclients. Our team builds internal observation tools that foster a culture of quality across mobile and backend teams. We thrive on innovation, collaboration, and making asignificant impact through our work. If you are passionate about solving complex challenges and working on tools that improve engineering practices, we'd like to meet you!\n Position Overview: We are looking for a Senior Software Developer with strong full-stack capabilities to join our growing team. As a key contributor, you will develop and maintain tools that provide observability into key metrics, helping our mobile and backend teams deliver with higher quality and reliability. You will work with modern technologies, primarily TypeScript, and leverage cloud  development practices, especially on AWS, to build scalable, impactful solutions.",
    requirements: [
      "1-3 years of experience as a Full Stack Developer or similar role.",
      "Strong proficiency in TypeScript, including backend and frontend development.",
      "Experience with cloud platforms such as AWS or equivalent cloud-based development patterns.",
      "Solid understanding of RESTful APIs, microservices, and cloud infrastructure.",
      "Ability to write clean, maintainable, and well-tested code.",
      "Strong problem-solving skills, attention to detail, and ability to work both independently and as part of a team.",
      "Excellent communication skills.",
    ],
    qualifications: [
      "Position Overview: We are looking for a Senior Software Developer with strong full-stack capabilities to join our growing team",
      "1-3 years of experience as a Full Stack Developer or similar role",
      "Strong proficiency in TypeScript, including backend and frontend development",
      "Experience with cloud platforms such as AWS or equivalent cloud-based development patterns",
      "Solid understanding of RESTful APIs, microservices, and cloud infrastructure",
      "Ability to write clean, maintainable, and well-tested code",
      "Strong problem-solving skills, attention to detail, and ability to work both independently and as part of a team",
      "Excellent communication skills",
      "Familiarity with serverless architecture",
      "Experience with databases (SQL/NoSQL) and data modeling",
      "Experience with GraphQL",
      "Previous experience working in an agile environment",
      "Must currently reside in the US",
      "Must be available to begin work no later than December 31, 2024",
    ],
    benefits: [
      "PayPal is committed to fair and equitable compensations practices",
      "Actual compensation is based on various factors including but not limited to work location, and relevant skills and experience",
      "The total compensation for this position may include an annual performance bonus (or other incentive compensation, as applicable), equity, and medical, dental, vision, and other benefits",
      "The U.S national annual pay range for this role is: $84,000 to $135,000",
      "For the majority of employees, PayPal's balanced hybrid work model offers 3 days in the office for effective in-person collaboration and 2 days at your choice of either the PayPal office or your home workspace, ensuring that you equally have the benefits and conveniences of both locations",
      "We champion your financial, physical, and mental health by offering valuable benefits and resources to help you care for the whole you",
      "We have great benefits including a flexible work environment, employee shares options, health and life insurance and more",
    ],
    responsibilities: [
      "We offer our customers the flexibility to use their accounts to purchase and receive payments for goods and services, as well as the ability to transfer and withdraw funds",
      "We enable consumers to exchange funds more safely with merchants using a variety of funding sources, which may include a bank account, a PayPal or Venmo account balance, PayPal and Venmo branded credit products, a credit card, a debit card, certain cryptocurrencies, or other stored value products such as gift cards, and eligible credit card rewards",
      "We also help merchants connect with their customers, process exchanges and returns, and manage risk",
      "We enable consumers to engage in cross-border shopping and merchants to extend their global reach while reducing the complexity and friction involved in enabling cross-border trade",
      "As a key contributor, you will develop and maintain tools that provide observability into key metrics, helping our mobile and backend teams deliver with higher quality and reliability",
      "You will work with modern technologies, primarily TypeScript, and leverage cloud development practices, especially on AWS, to build scalable, impactful solutions",
      "Design, develop, and maintain full-stack internal observation tools using TypeScript",
      "Implement backend services and APIs, as well as front-end components, ensuring seamless user experiences",
      "Use AWS or other cloud services to architect scalable, reliable systems that improve visibility into engineering practices",
      "Collaborate with mobile and backend teams to define, design, and deliver new features that enhance quality",
      "Participate in code reviews, mentor junior developers, and contribute to best practices",
      "Troubleshoot, debug and upgrade existing software",
    ],
  },
  {
    id: 2,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 3,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 4,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 5,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 6,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 7,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  {
    id: 8,
    title: "Software Engineer II",
    company: "TechCorp Inc.",
    location: "Mountain View, CA",
    jobType: "Full-Time",
    salary: "$97.5K/yr - $206.8K/yr",
    level: "Beginner Level",
    sponsorship: "H1B Sponsor",
    skills: ["Python", "React", "Unit Testing"],
    datePosted: "2 weeks ago",
    matchPercentage: 95,
    workType: "Hybrid, Remote",
  },
  // Add more jobs as needed
]