import "./App.css";
import { Toaster } from "react-hot-toast";
import { AppRoutes } from "./routes/AppRoutes";
import { useNotes } from "contexts";

function App() {
  const { showInput } = useNotes();

  return (
    <div className={`App ${showInput ? "bg-overlay" : null}`}>
      <AppRoutes />
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{
          top: "4rem",
        }}
      />
    </div>
  );
}

export default App;
