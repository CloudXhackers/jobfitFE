import React from "react"
import Navbar from "../components/User/Navbar/Navbar-User"
import { Route, Routes } from "react-router-dom"
import Home from "../components/User/Home/Home"
import ApplicationTrackerPage from "../components/User/Applications/applicationTrackerPage"
import SubscriptionPage from "../components/User/Subscription/subscriptionPage"

const UserRoute = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="application-tracker" element={<ApplicationTrackerPage />} />
        <Route path="jobs" element={<Home />} />
        <Route path="subscription" element={<SubscriptionPage />} />
      </Routes>
    </div>
  )
}

export default UserRoute
