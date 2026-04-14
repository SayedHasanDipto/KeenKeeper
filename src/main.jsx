import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Timeline from './component/timeline/Timeline.jsx';
import Stats from './component/stats/Stats.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "home",
    Component: App
  },
  {
    path: "timeline",
    Component: Timeline
  },
  {
    path: "stats",
    Component: Stats
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
