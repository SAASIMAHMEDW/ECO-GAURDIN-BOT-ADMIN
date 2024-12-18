import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'
import './index.css'
import './utils.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Start from './Start.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <App />,
  }
]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
)
