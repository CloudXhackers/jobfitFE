import Container from "@mui/material/Container"
import { Box, IconButton, Typography } from "@mui/material"
import { BaseButton, StartButton } from "../../common/buttonStyles"
import LeftImage from "../../images/BgHomePage.jpeg"
import RightImage from "../../images/ai-research-scientist-abstract-concept-600nw-2368588939.webp"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import TypeImg from "../../images/m_image.png"

export default function HeroPage() {
  return (
    <>
      <Container>
        <Box component="div">
          <BaseButton className="h-[2rem]">
            <Typography variant="inherit" class="text-sm">
              Unlock Your Career Potential with AI
            </Typography>
            <Typography
              component="span"
              variant="inherit"
              color="primary"
              sx={{ pl: 3 }}
              class="text-sm font-bold pl-3 text-blue-500"
            >
              Discover More
            </Typography>
          </BaseButton>
          <Typography
            variant="h2"
            sx={{ fontWeight: "800", p: 4, lineHeight: 2 }}
          >
            Revolutionize Your Job Hunt <br />
            with{" "}
            <Typography component="span" variant="inherit" color="primary">
              AI Automation
            </Typography>
            !
          </Typography>
          <Typography color="primary">
            Streamline your job search, enhance your resume, and apply
            effortlessly with our powerful tools.
          </Typography>
          <Box sx={{ p: 5 }}>
            <BaseButton>
              <Typography class="text-base font-black text-gray-700">
                Learn More
              </Typography>
            </BaseButton>
            <StartButton>
              <Typography class="text-lg text-white font-bold">
                Start Your Journey
              </Typography>
            </StartButton>
          </Box>
          <Box
            component="img"
            src={LeftImage}
            alt="Bottom Left"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 80,
              width: "600px", // Adjust width as needed
              height: "auto",
            }}
          />
          <Box
            component="img"
            src={RightImage}
            alt="Bottom Right"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 100,
              width: "500px", // Adjust width as needed
              height: "auto",
            }}
          />
        </Box>
        <Box className="h-72"></Box>
      </Container>
      <Typography variant="h4" sx={{ fontWeight: "750", p: 4 }}>
        Transform Your Job Application Experience
      </Typography>
      <Container class="h-[700px] w-full flex justify-between px-32">
        <Box component="div" className="w-1/2">
          <BaseButton
            className="h-[3rem] flex items-start justify-start text-left"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              p: 1,
            }}
          >
            <Typography variant="inherit" class="text-base font-bold">
              Unlock Your Career Potential Today!
            </Typography>
          </BaseButton>
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              fontWeight: "800",
              paddingLeft: 2,
              paddingBottom: 4,
              paddingTop: 5,
              lineHeight: 1.5,
            }}
          >
            Automate Your Job Application <br />
            Process with Ease.
          </Typography>
          <Typography
            class="font-normal text-xl text-left px-4"
            sx={{ textAlign: "left", lineHeight: 2 }}
          >
            Navigate the job market effortlessly with our AI-driven <br />
            application that simplifies job searching, resume crafting, <br />
            and cover letter writing.
          </Typography>
          <Box sx={{ paddingTop: 8 }}>
            <BaseButton
              className="h-[3rem] flex items-center"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <IconButton class="flex pr-2">
                <PlayCircleOutlineIcon />
              </IconButton>
              <Typography class="text-base font-black text-gray-700">
                Watch Our Demo Video
              </Typography>
            </BaseButton>
          </Box>
        </Box>
        <Box
          component="img"
          className="w-[600px] h-[624px] object-cover"
          src={TypeImg}
          alt="Bottom Right"
        />
      </Container>
    </>
  )
}
