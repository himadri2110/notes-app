import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "services";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const guestUser = {
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
  };

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );

  const [login, setLogin] = useState({
    input: {},
    error: "",
    hide: { pwd: true },
  });

  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, input: { ...login.input, [name]: value } });
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginService(login.input);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("token", data.encodedToken);
      setToken(data.encodedToken);

      setLogin({ ...login, input: { email: "", password: "" } });
      setIsAuth(true);

      navigate("/");
    } catch (err) {
      setLogin({ ...login, error: err.response.data.errors[0] });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.setItem("isAuth", false);
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        token,
        setToken,
        navigate,
        login,
        setLogin,
        loginInputHandler,
        loginHandler,
        logoutHandler,
        guestUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
