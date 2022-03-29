import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, setIsAuth, token, setToken, navigate, logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
