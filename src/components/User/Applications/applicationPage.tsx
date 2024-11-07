import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton,
  Button,
  List,
  ListItem,
} from "@mui/material"
import GoogleIcon from "../../../images/pngimg.com - google_PNG19635.png"
import WorkIcon from "@mui/icons-material/Work"
import PlaceIcon from "@mui/icons-material/Place"
import PersonIcon from "@mui/icons-material/Person"
import HomeIcon from "@mui/icons-material/Home"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import CreateIcon from "@mui/icons-material/Create"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"

import { jobs } from "../Jobs/Jobs"
import ApplicationStatusMenu from "./applicationStatusMenu"
import { ChipSection } from "../ProfileCard/ProfileCard"

type Application = {
  id: number
  date: string
  appNumber: string
  jobId: number
  jobRole: string
  company: string
  source: string
  resume: string
  status: string
  match?: {
    exp: number
    skill: number
    req: number
    overall: number
  }
}

export default function ApplicationPage({ row, closePage }) {
  const job = jobs[row.jobId]
  const application: Application = row

  return (
    <Box flexGrow={1}>
      <Card
        key={application.id}
        class="cursor-pointer rounded-3xl border-[#D8D8D7] border-solid border-[0.06rem] shadow-md bg-[#EEE] overflow-hidden"
      >
        <CardContent class="px-4 pt-3">
          <Box class="flex-col flex">
            <Box class="flex-row flex " className="job-header">
              <Box
                component="img"
                src={GoogleIcon}
                sx={{
                  width: "65px", // Adjust width as needed
                  height: "65px",
                  border: 1,
                  borderRadius: 3,
                  borderColor: "#D8D8D7",
                  objectFit: "contain",
                }}
              />
              <Box class="flex-col grow pl-2 my-2">
                <Box class="flex-row flex gap-1">
                  <Typography class="font-semibold text-base text-gray-800">
                    {job.title}
                  </Typography>
                  <Typography class="text-sm text-gray-700">
                    {" "}
                    | {job.type}
                  </Typography>
                </Box>
                <Box class="flex-row flex items-center gap-1">
                  <Typography class="text-sm text-gray-800">
                    {job.company} <span />
                  </Typography>
                  <Typography class="text-xs text-gray-700">
                    | {job.posted}
                  </Typography>
                </Box>
                <Box class="flex-row flex items-center pl-0 gap-1 ">
                  <WorkIcon fontSize="1rem" />

                  <Typography class="text-xs text-gray-700">
                    {" "}
                    {job.salary}
                  </Typography>
                </Box>
              </Box>
              <ApplicationStatusMenu row={row} />
              <IconButton class="h-1 pl-5" onClick={closePage}>
                <CancelOutlinedIcon fontSize="medium" color="disabled" />
              </IconButton>
            </Box>
            <Box class="rounded-3xl border-[#D8D8D7] border-solid border-[0.06rem] shadow-md bg-white px-5 py-2">
              <Box class="flex-row flex">
                <Box class="flex-col flex w-[100%]">
                  <Box>
                    <Box class="flex-row flex py-1 pt-2 gap-1">
                      <PlaceIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box class="flex-row flex py-1 gap-1">
                      {" "}
                      <PersonIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.level}
                      </Typography>
                    </Box>
                    <Box class="flex-row flex py-1 gap-1">
                      <HomeIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.workType}
                      </Typography>{" "}
                    </Box>
                    <Box class="flex-row flex py-1 gap-1">
                      {" "}
                      <ContactPageIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.sponsorship}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box class="justify-items-end">
                  <Typography>
                    This is where the Skills ChipSection goes
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box className="rounded-lg bg-gradient-to-b from-[#4780FF] to-[#27468C] h-[42px] w-11/12 flex mx-4 my-2 items-center justify-between justify-items-stretch border-y-[0.1rem]  border-[#C1C1C0] ">
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Exp. Match:{" "}
                    {application.match ? application.match.exp + "%" : "60%"}
                  </Typography>
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Skill Match:{" "}
                    {application.match ? application.match.skill + "%" : "100%"}
                  </Typography>
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Req. Match:{" "}
                    {application.match ? application.match.req + "%" : "90%"}
                  </Typography>
                  <Box className="bg-blue-800 rounded-e-lg h-full w-1/4 content-center">
                    <Typography class="font-bold text-white text-xs">
                      Overall: {job.matchPercentage}%
                    </Typography>
                  </Box>
                </Box>
                <Box class="text-justify">
                  <Typography variant="h6">Job Description</Typography>
                  <Typography>
                    About Us: We are a dynamic team focused on delivering
                    high-quality software solutions that drive value for our
                    clients. Our team builds internal observation tools that
                    foster a culture of quality across mobile and backend teams.
                    We thrive on innovation, collaboration, and making a
                    significant impact through our work. If you are passionate
                    about solving complex challenges and working on tools that
                    improve engineering practices, we'd like to meet you!
                  </Typography>
                  <Typography>
                    Position Overview: We are looking for a Senior Software
                    Developer with strong full-stack capabilities to join our
                    growing team. As a key contributor, you will develop and
                    maintain tools that provide observability into key metrics,
                    helping our mobile and backend teams deliver with higher
                    quality and reliability. You will work with modern
                    technologies, primarily TypeScript, and leverage cloud
                    development practices, especially on AWS, to build scalable,
                    impactful solutions.
                  </Typography>
                  <Typography variant="h6">Requirements</Typography>
                  <List>
                    <ListItem>• 1-3 years of experience as a Full Stack Developer or similar role.</ListItem>
                    <ListItem>• Strong proficiency in TypeScript, including backend and frontend development.</ListItem>
                    <ListItem>• Experience with cloud platforms such as AWS or equivalent cloud-based development patterns.</ListItem>
                    <ListItem>• Solid understanding of RESTful APIs, microservices, and cloud infrastructure.</ListItem>
                    <ListItem>• Ability to write clean, maintainable, and well-tested code.</ListItem>
                    <ListItem>• Strong problem-solving skills, attention to detail, and ability to work both independently and as part of a team.</ListItem>
                    <ListItem>• Excellent communication skills.</ListItem>
                  </List>
                  
                  <Typography variant="h6">Qualifications</Typography>
                  <Typography variant="h6">Benefits</Typography>
                  <Typography variant="h6">Responsibilities</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
