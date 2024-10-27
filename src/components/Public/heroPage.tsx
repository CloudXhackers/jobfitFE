import Container from "@mui/material/Container"
import { Box, Typography } from "@mui/material"
import { BaseButton, StartButton } from "../../common/buttonStyles"
import LeftImage from "../../images/BgHomePage.jpeg"
import RightImage from "../../images/ai-research-scientist-abstract-concept-600nw-2368588939.webp"
export default function HeroPage() {
  return (
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
    </Container>
  )
}
