import Mockman from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoutes";
import { useAuth } from "../contexts";
import { Archive, Login, Home, Label, Trash } from "pages";
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
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      ) : (
        <div className="page-wrapper">
          <Navbar />

          <section className="main-section">
            <Sidebar />

            <Routes>
              <Route path="*" element={<Navigate to="/" replace />} />
              <Route
                path="/"
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
              <Route
                path="/archive"
                element={
                  <PrivateRoute>
                    <Archive />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/trash"
                element={
                  <PrivateRoute>
                    <Trash />
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
