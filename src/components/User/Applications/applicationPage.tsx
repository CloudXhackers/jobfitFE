import { Card, CardContent, Box, Typography, IconButton, Button } from "@mui/material";
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

import { jobs } from "../Jobs/Jobs";
import { BaseButton } from "../../../common/buttonStyles";

export default function ApplicationPage({ applicationId, closePage }) {
  const job = jobs[applicationId]
  // select application by id 
  return (
    <Box width={"60%"}>
      <p>This is the Application Page for Application Id: {applicationId}</p>
      <BaseButton  onClick={closePage}>Close</BaseButton>
      <Card
        key={applicationId}
        class="hover:shadow-lg hover:shadow-gray-600 shadow-gray-400 transition-shadow cursor-pointer rounded-3xl border-[#D8D8D7] border-solid border-[0.06rem] shadow-md w-[366px] h-[190px] overflow-hidden"
        onClick={() => {}}
      >
        <CardContent class="pl-4 pt-3 h-[148px]">
          <Box class="flex-col flex">
            <Box class="flex-row flex h-[45%]">
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
              <Box class="flex-col flex pl-2 ">
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
              <IconButton class="h-1 pl-5">
                <FavoriteBorderIcon fontSize="medium" color="disabled" />
              </IconButton>
            </Box>
            <Box class="flex-row flex h-[65%] ">
              <Box class="flex-row flex w-[70%] ">
                <Box class="flex-row flex w-[55%] ">
                  <Box class="flex-col flex w-[100%]">
                    <Box class="flex-row flex pt-2 gap-1">
                      <PlaceIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.location}
                      </Typography>
                    </Box>
                    <Box class="flex-row flex pt-1 gap-1">
                      {" "}
                      <PersonIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.level}
                      </Typography>
                    </Box>
                    <Box class="flex-row flex pt-1 pb-2 gap-1">
                      <HomeIcon fontSize="1rem" />
                      <Typography class="text-[0.6rem] text-gray-700">
                        {job.workType}
                      </Typography>{" "}
                    </Box>
                  </Box>
                </Box>
                <Box class="flex-col flex w-[50%]">
                  <Box class="flex-row flex pt-2 gap-1">
                    {" "}
                    <ContactPageIcon fontSize="1rem" />
                    <Typography class="text-[0.6rem] text-gray-700">
                      {job.sponsorship}
                    </Typography>
                  </Box>
                  <Box class="flex-row flex pt-1 gap-1">
                    <CreateIcon fontSize="1rem" />
                  </Box>
                </Box>
              </Box>
              <Box class="bg-black w-[30%] rounded-tl-[1.5rem] bg-gradient-to-b from-[#4780FF] to-[#27468C]">
                <Typography class="pt-2  font-medium text-white text-xs ">
                  Strong Match
                </Typography>
                <Typography class="pt-2 font-bold text-white text-3xl text-center">
                  {job.matchPercentage}%
                </Typography>
              </Box>
            </Box>
          </Box>
          {/*<div class="flex justify-between items-start">
            <div class="flex gap-4">
              <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <HomeWorkIcon class="w-6 h-6 text-gray-500" />
              </div>
              <div>
                <h3 class="font-semibold text-lg">{job.title}</h3>
                <p class="text-gray-600">{job.company}</p>
                <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <FmdGoodIcon class="w-4 h-4" />
                  <span>{job.location}</span>
                  <span>•</span>
                  <AccessTimeIcon class="w-4 h-4" />
                  <span>{job.posted}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="text-right">
                <div class="text-blue-600 font-semibold">
                  {job.matchPercentage}% Match
                </div>
                <div class="text-sm text-gray-500">{job.salary}</div>
              </div>
              <Button variant="ghost" size="icon">
                <FavoriteIcon class="w-5 h-5 text-gray-400" />
              </Button>
            </div>
          </div>
          <div class="mt-4 flex gap-2 flex-wrap">
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="secondary">{job.sponsorship}</Badge>
            {job.skills.map(skill => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <div class="mt-4 flex justify-between">
            <Button variant="outline">ResumePro</Button>
            <Button>Auto-Apply</Button>
          </div>
          
          <Box class=" bg-red-light ">C</Box>*/}
        </CardContent>
        <Box className="bg-[#D9D9D9] h-[42px] w-full flex px-5 items-center justify-between border-y-[0.1rem]  border-[#C1C1C0] ">
          <Button
            variant="contained"
            class="bg-white flex-row flex shadow-none  px-10 py-1 text-[0.6rem] border-[0.1rem] border-gray-400 rounded-full "
          >
            <Typography class="font-bold text-black text-xs">
              ResumePro
            </Typography>
            <ArrowRightIcon sx={{ width: "1rem", height: "1rem" }} />
          </Button>
          <Button
            variant="contained"
            class="bg-blue-500 flex-row flex  text-white px-10 py-1 text-[0.6rem] rounded-full"
          >
            <AutoAwesomeIcon
              sx={{
                width: "0.5rem",
                height: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <Typography class="font-bold text-white text-xs">
              Auto-Apply
            </Typography>
          </Button>
        </Box>
      </Card>
    </Box>
  )
}
FavoriteBorderIcon