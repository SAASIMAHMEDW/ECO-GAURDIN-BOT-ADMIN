import "./App.css";
import { Button } from "@/components/ui/button";
import Main from "./containers/Main";
import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/toaster"
function App() {
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
