import { Box, Typography } from "@mui/material"
import { BaseButton } from "../../common/buttonStyles"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';

export default function SecondSection() {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, p: 2 }}>
        Transform Your Job Application Experience
      </Typography>
      <Box display="flex" my={2}>
        <Box minWidth={"50%"} textAlign={"left"} alignContent={"center"} p={2}>
          <BaseButton>Unlock Your Career Potential Today!</BaseButton>
          <Typography variant="h4" fontWeight="700" py={3}>
            Automate Your Job Application Process with Ease.
          </Typography>
          <Typography variant="h6" mb={4}>
            Navigate the job market effortlessly with our AI-driven application
            that simplifies job searching, resume crafting, and cover letter
            writing.
          </Typography>
          <BaseButton><PlayCircleOutlinedIcon sx={{ pr: 1 }}/>Watch Our Demo Video</BaseButton>
        </Box>
        <Box
          component="img"
          src="/src/assets/images/m_image.png"
          alt="hands typing on a laptop"
          p={2}
          width="auto"
        />
      </Box>
    </Box>
  )
}
