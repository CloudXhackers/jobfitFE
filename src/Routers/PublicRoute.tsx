import React from "react"
import NavBar from "../publicPages/Navbar-Public"
import { Route, Routes } from "react-router-dom"
import HeroPage from "../publicPages/heroPage"
import OAuthSignInPage from "../publicPages/OAuthSignInPage"

const PublicRoute = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/*" element={<HeroPage />} />
        <Route path="signin" element={<OAuthSignInPage/>} />
      </Routes>
    </div>
  )
}

export default PublicRoute
