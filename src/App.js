import "./App.css";
import { Navbar, Sidebar } from "./components";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <div className="page-wrapper">
        <Navbar />

        <section className="main-section">
          <Sidebar />

          <AppRoutes />
        </section>
      </div>
    </div>
  );
}

export default App;
