import { createTheme, ThemeProvider } from "@mui/material"
import "./App.css"
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
