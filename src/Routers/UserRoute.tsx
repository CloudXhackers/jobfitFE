import React from "react"
import Navbar from "../features/user/Navbar-User"
import { Route, Routes } from "react-router-dom"
import Home from "../features/user/Home"
import ApplicationTrackerPage from "../features/applications/applicationTrackerPage"
import SubscriptionPage from "../features/user/subscriptionPage"

const UserRoute = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="application-tracker"
          element={<ApplicationTrackerPage />}
        />
        <Route path="jobs" element={<Home />} />
        <Route path="subscription" element={<SubscriptionPage />} />
      </Routes>
    </div>
  )
}

export default UserRoute
