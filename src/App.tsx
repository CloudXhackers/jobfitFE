import { Outlet } from "react-router-dom"
import NavBar from "./common/navbar"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
