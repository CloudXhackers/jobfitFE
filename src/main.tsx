import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import HeroPage from "./pages/hero/heroPage"
import SignUpPage from "./pages/signUpPage"
import SignInPage from "./pages/signInPage"
import UserPage from "./pages/userPage"
import JobsPage from "./pages/jobsPage"
import ApplicationTrackerPage from "./pages/applicationTrackerPage"
import AutomateAssistPage from "./pages/automateAssistPage"
import ResumeProPage from "./pages/resumeProPage"
import SubscriptionPage from "./pages/subscriptionPage"
import { store } from "./app/store"
import "./index.css"

const container = document.getElementById("root")

if (container) {
  const root = createRoot(container)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>an error occured in the BrowserRouter</div>,
      children: [
        { index: true, element: <HeroPage /> },
        { path: "signin", element: <SignInPage /> },
        { path: "signup", element: <SignUpPage /> },
        { path: "user", element: <UserPage /> },
        { path: "jobs", element: <JobsPage /> },
        { path: "subscription", element: <SubscriptionPage /> },
        { path: "resume", element: <ResumeProPage /> },
        { path: "applications", element: <ApplicationTrackerPage /> },
        { path: "assist", element: <AutomateAssistPage /> },
      ],
    },
  ])

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
