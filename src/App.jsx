import "./App.css";
import { Button } from "@/components/ui/button";
import Main from "./containers/Main";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
import Login from "./Login";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {/* <Main /> */}
        <Login/>
        <Toaster />
      </ThemeProvider>
    </>
  );
}

export default App;
