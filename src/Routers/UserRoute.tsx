import React from "react"
import Navbar from "../components/User/Navbar/Navbar-User"
import { Route, Routes } from "react-router-dom"
import Home from "../components/User/Home/Home"
import ApplicationTracker from "../components/User/ApplicationTracker/ApplicationTracker"

const UserRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/applications" element={<ApplicationTracker />} />
      </Routes>
    </div>
  )
}

export default UserRoute
