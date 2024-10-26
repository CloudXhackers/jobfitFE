import Container from "@mui/material/Container"
import { Box, Typography } from "@mui/material"
import { BaseButton, StartButton } from "../common/buttonStyles"

export default function HeroPage() {
  return (
    <Container>
      <Box component="div" sx={{ py: 1 }}>
        <BaseButton>
          <Typography variant="inherit">
            Unlock Your Career Potential with AI
          </Typography>
          <Typography
            component="span"
            variant="inherit"
            color="primary"
            sx={{ pl: 3 }}
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
          <BaseButton>Learn More</BaseButton>
          <StartButton>Start Your Journey</StartButton>
        </Box>
      </Box>
    </Container>
  )
}
