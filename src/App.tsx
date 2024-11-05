import { createTheme, ThemeProvider } from "@mui/material"
import type {} from '@mui/x-data-grid/themeAugmentation';
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
  mixins: {
    MuiDataGrid: {
      // Headers, and top & bottom fixed rows
      containerBackground: '#4379F2',
    },
  },
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
