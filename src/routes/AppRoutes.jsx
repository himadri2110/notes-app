import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { useAuth } from "../contexts";
import { Login, Home, Label } from "../pages";
import { Navbar, Sidebar } from "../components";

const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <div>
      {!isAuth ? (
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/mockman" element={<Mockman />} />
          </Routes>
        </div>
      ) : (
        <div className="page-wrapper">
          <Navbar />

          <section className="main-section">
            <Sidebar />

            <Routes>
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/label"
                element={
                  <PrivateRoute>
                    <Label />
                  </PrivateRoute>
                }
              ></Route>
            </Routes>
          </section>
        </div>
      )}
    </div>
  );
};

export { AppRoutes };
