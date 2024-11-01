import React from "react"
import NavBar from "../components/Public/Navbar-Public"
import { Route, Routes } from "react-router-dom"
import HeroPage from "../components/Public/heroPage"
import OAuthSignInPage from "../components/Public/OAuthSignInPage"

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
