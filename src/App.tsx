import { useLayoutEffect } from "react";
import { AppRoutes } from "./routes";

function App() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const vh = Math.max(root.clientHeight || 0, window.innerHeight || 0);
    root.style.setProperty("--app-root-winh", `${vh}px`);
  }, []);

  return <AppRoutes />;
}

export default App;
