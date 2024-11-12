import { Box, Typography } from "@mui/material"
import { BaseButton, StartButton } from "../../components/common/buttonStyles"

export default function MainSection() {
  return (
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
      <Typography variant="h2" sx={{ fontWeight: "800", p: 4, lineHeight: 2 }}>
        Revolutionize Your Job Hunt <br />
        with{" "}
        <Typography component="span" variant="inherit" color="primary">
          AI Automation
        </Typography>
        !
      </Typography>
      <Typography color="primary">
        Streamline your job search, enhance your resume, and apply effortlessly
        with our powerful tools.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Box
          component="img"
          src="/src/assets/images/BgHomePage 1.png"
          alt="business people"
          sx={{ display: { xs: "none", md: "flex", width: "30%" } }}
        />
        <Box sx={{ p: 5, display: "flex", flexGrow: 0 }}>
          <BaseButton sx={{ flexShrink: 0, mr: 2 }}>Learn More</BaseButton>
          <StartButton sx={{ flexShrink: 0 }}>Start Your Journey</StartButton>
        </Box>
        <Box
          component="img"
          src="/src/assets/images/ai-research-scientist-abstract-concept-600nw-2368588939 1.png"
          alt="ai research scientist"
          sx={{ display: { xs: "none", md: "flex", width: "30%" } }}
        />
      </Box>
    </Box>
  )
}
