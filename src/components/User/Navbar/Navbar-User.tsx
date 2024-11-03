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
import { StartButton } from "../../../common/buttonStyles"

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
const settings = [
  "View Profile",
  "Documents",
  "Help",
  "Subscription",
  "Sign Out",
]

export default function UserNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  )
  const [settingMenu, setSettingMenu] = React.useState(null)

  const handleOpenMenu = setting => {
    setSettingMenu(setting)
    handleCloseUserMenu()
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "white",
        paddingTop: 0.5,
        paddingBottom: 0.5,
        alignItems: "start",
        justifyContent: "start",
      }}
    >
      <Container maxWidth="full">
        <Toolbar disableGutters>
          {/* ------------- DESKTOP LOGO ------------ */}
          <Typography
            variant="h4"
            noWrap
            component={RouterLink}
            to={"./"}
            className="w-[20%] text-start justify-center"
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
          <Box class="flex justify-start w-[60%] space-x-8 ">
            {pages.map(page => (
              <Button
                key={page}
                component={RouterLink}
                to={`/${routes[page]}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black" }}
                class="text-gray-800 text-[0.9rem] font-medium px-2"
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* --------------- PROFILE --------------- */}
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              PaperProps={{
                sx: {
                  mt: "45px",
                  width: "200px",
                  borderRadius: 6, // Use values like 2 to achieve 16px, as MUI uses a scale
                  backgroundColor: "#D9D9D9",
                },
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <>
                  {setting === "Sign Out" && (
                    <div className="flex justify-center items-center">
                      <div className="border-t-2 border-[#464741] w-3/4"></div>
                    </div>
                  )}
                  <MenuItem
                    key={setting}
                    onClick={setting => handleOpenMenu(setting)}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#D9D9D9",
                    }}
                  >
                    <Typography class="text-sm font-medium">
                      {setting}
                    </Typography>
                  </MenuItem>
                </>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
