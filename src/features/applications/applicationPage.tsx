import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import PlaceIcon from "@mui/icons-material/Place"
import WorkIcon from "@mui/icons-material/Work"
import {
  Box,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material"

import ApplicationStatusMenu from "./applicationStatusMenu"
import { useAppSelector } from "../../app/hooks"
import { selectApplicationById } from "./applicationsSlice"
import { selectJobById } from "../jobs/jobsSlice"

type ApplicationPageProps = {
  applicationId: string | number
  closePage: () => void
}

export default function ApplicationPage({ applicationId, closePage }: ApplicationPageProps) {
  const application = useAppSelector((state) => selectApplicationById(state, applicationId))
  const job = useAppSelector((state)=>selectJobById(state, application.jobId))

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
                src={job.companyLogo}
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
                    | {job.jobType}
                  </Typography>
                </Box>
                <Box class="flex-row flex items-center gap-1">
                  <Typography class="text-sm text-gray-800">
                    {job.company} <span />
                  </Typography>
                  <Typography class="text-xs text-gray-700">
                    | {job.datePosted}
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
              <ApplicationStatusMenu applicationStatus={application.status} />
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
                  <Typography>
                    Application number: {application.appNumber}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box className="rounded-lg bg-gradient-to-b from-[#4780FF] to-[#27468C] h-[42px] w-11/12 flex mx-4 my-2 items-center justify-between justify-items-stretch border-y-[0.1rem]  border-[#C1C1C0] ">
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Exp. Match:{" "}
                    {application.matchPercentage
                      ? application.matchPercentage.exp + "%"
                      : "n/a"}
                  </Typography>
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Skill Match:{" "}
                    {application.matchPercentage
                      ? application.matchPercentage.skill + "%"
                      : "n/a"}
                  </Typography>
                  <Typography class="font-bold text-white text-xs w-1/4">
                    Req. Match:{" "}
                    {application.matchPercentage
                      ? application.matchPercentage.req + "%"
                      : "n/a"}
                  </Typography>
                  <Box className="bg-blue-800 rounded-e-lg h-full w-1/4 content-center">
                    <Typography class="font-bold text-white text-xs">
                      Overall: {application.matchPercentage.overall}%
                    </Typography>
                  </Box>
                </Box>
                <Box class="text-justify">
                  <Typography variant="h6">Job Description</Typography>
                  {job.description?.map((item, index) => (
                    <Typography key={index + item[0]}>{item}</Typography>
                  ))}
                  <Typography variant="h6">Requirements</Typography>
                  <List>
                    {job.requirements?.map((item, index) => (
                      <ListItem key={index + item[0]}>{item}</ListItem>
                    ))}
                  </List>
                  <Typography variant="h6">Qualifications</Typography>
                  <List>
                    {job.qualifications?.map((item, index) => (
                      <ListItem key={index + item[0]}>{item}</ListItem>
                    ))}
                  </List>
                  <Typography variant="h6">Benefits</Typography>
                  <List>
                    {job.benefits?.map((item, index) => (
                      <ListItem key={index + item[0]}>{item}</ListItem>
                    ))}
                  </List>
                  <Typography variant="h6">Responsibilities</Typography>
                  <List>
                    {job.responsibilities?.map((item, index) => (
                      <ListItem key={index + item[0]}>{item}</ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
