import { Outlet } from "react-router-dom"
import NavBar from "./components/Public/Navbar-Public"
import "./App.css"
import { createTheme, ThemeProvider, Typography } from "@mui/material"
import Routers from "./Routers/Routers"
const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "Inter"].join(","),
    button: {
      color: "black",
      textTransform: "none",
    },
  },
  components: {},
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routers />
      </div>
    </ThemeProvider>
  )
}

export default App
