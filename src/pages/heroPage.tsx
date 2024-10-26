import Container from "@mui/material/Container"
import { Box, Typography } from "@mui/material"
import { CustomButton } from "../common/buttonStyles"

export default function HeroPage() {
  return (
    <Container>
      <Box component="div" sx={{ py: 5 }}>
        <CustomButton>
          <Typography variant="inherit">Unlock Your Career Potential with AI</Typography>
          <Typography component="span" variant="inherit" color="primary" sx={{ pl: 3 }}>
            Discover More
          </Typography>
        </CustomButton>
        <Typography
          variant="h2"
          sx={{ fontWeight: "800", p: 4, lineHeight: 2 }}
        >
          Revolutionize Your Job Hunt <br />
          with{" "}
          <Typography component="span" variant="inherit" color="primary">
            AI Automation!
          </Typography>
        </Typography>
        <Typography color="primary">
          Streamline your job search, enhance your resume, and apply
          effortlessly with our powerful tools.
        </Typography>
        <Box sx={{ p: 5 }}>
          <CustomButton>Learn More</CustomButton>
          <CustomButton>Start Your Journey</CustomButton>
        </Box>
      </Box>
    </Container>
  )
}
