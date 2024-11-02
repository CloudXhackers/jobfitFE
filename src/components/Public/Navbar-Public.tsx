import { Link as RouterLink } from "react-router-dom"

import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import { StartButton } from "../../common/buttonStyles"

const pages = [
  "Application Tracker",
  "ResumePro",
  "Jobs",
  "AutomateAssist",
  "Subscription",
]
const routes: { [key: string]: string } = {
  "Application Tracker": "applications",
  ResumePro: "resume",
  Jobs: "jobs",
  AutomateAssist: "assist",
  Subscription: "subscription",
}
const settings = ["Profile", "Account", "Dashboard", "Logout"]

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ------------- DESKTOP LOGO ------------ */}
          <Typography
            variant="h4"
            noWrap
            component={RouterLink}
            to={"./"}
            className="w-[20%] justify-center"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito Sans",
              fontWeight: 900,
              color: "black",
              textDecoration: "none",
            }}
          >
            Job
            <Typography color="primary" variant="inherit">
              Fit.
            </Typography>
            AI
          </Typography>

          {/* ------------ DESKTOP LINKS ------------ */}
          <Box className="flex justify-start w-[60%] space-x-8 ">
            {pages.map(page => (
              <Button
                key={page}
                component={RouterLink}
                to={`/${routes[page]}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black" }}
                class="text-gray-800 text-[0.9rem] font-medium"
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* --------------- PROFILE --------------- */}
          <Box sx={{ flexGrow: 0 }} className="w-[20%] justify-end">
            <Button
              key="signin"
              component={RouterLink}
              to="signin"
              class="text-gray-800 text-[0.9rem] font-semibold"
            >
              Sign In
            </Button>
            <Box component={RouterLink} to="signup">
              <StartButton key="signup">
                <Typography class="text-white text-base font-semibold">
                  Get Started
                </Typography>
              </StartButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
