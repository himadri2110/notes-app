import { Routes, Route } from "react-router-dom";
import { Home, Label } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/label" element={<Label />} />
    </Routes>
  );
};

export { AppRoutes };
