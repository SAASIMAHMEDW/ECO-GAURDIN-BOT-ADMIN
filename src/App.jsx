import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@/context/auth/useAuthContext";

function App() {
  let navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();
  useEffect(() => {
    if (isAuthenticated === null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Main />
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
