import { Route, Routes } from "react-router-dom"
import PublicRoute from "./PublicRoute"
import UserRoute from "./UserRoute"

const isAuthenticated = false

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={isAuthenticated ? <UserRoute /> : <PublicRoute />}
        />
      </Routes>
    </div>
  )
}

export default Routers
