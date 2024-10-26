import { Outlet } from "react-router-dom"
import NavBar from "./common/navbar"
import "./App.css"
import { createTheme, ThemeProvider } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito Sans", "Inter"].join(","),
    button: {
      color: "black",
      textTransform: "none",
    },
  },
  components: {
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default App
