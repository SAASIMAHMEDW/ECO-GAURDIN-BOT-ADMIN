import "./App.css";
import { Button } from "@/components/ui/button";
import Main from "./containers/Main";
import { ThemeProvider } from "@/components/ThemeProvider"
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
