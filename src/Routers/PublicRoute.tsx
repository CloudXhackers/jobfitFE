import React from "react"
import NavBar from "../components/Public/Navbar-Public"
import { Route, Routes } from "react-router-dom"
import HeroPage from "../components/Public/heroPage"

const PublicRoute = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HeroPage />} />
      </Routes>
    </div>
  )
}

export default PublicRoute
