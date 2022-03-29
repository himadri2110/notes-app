import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { useNotes } from "contexts";

function App() {
  const { showInput } = useNotes();

  return (
    <div className={`App ${showInput ? "bg-overlay" : null}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
