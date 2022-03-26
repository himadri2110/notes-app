import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import { Home, Label } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Navbar />

        <section className="main-section">
          <Sidebar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/label" element={<Label />} />
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default App;
