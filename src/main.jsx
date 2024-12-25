import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader2 } from "./components/magics/Loader";
import NoPage from "./containers/NoPage";
import { AuthProvider } from "./context/auth/AuthProvider";

// Lazy loading for the components
const Start = React.lazy(() => import("./Start.jsx"));
const Login = React.lazy(() => import("./Login.jsx"));
const App = React.lazy(() => import("./App.jsx"));

// Centralized Error Boundary to catch errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    }

    return this.props.children;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader2 text={"Laoding.."} />}>
        <Start />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader2 text={"Laoding.."} />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<Loader2 text={"Laoding.."} />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "*", // 404 route
    element: <NoPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </AuthProvider>
  </StrictMode>,
);
