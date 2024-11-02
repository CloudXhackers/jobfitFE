import React from "react"
import Navbar from "../components/User/Navbar/Navbar-User"
import { Route, Routes } from "react-router-dom"
import Home from "../components/User/Home/Home"

const UserRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default UserRoute
