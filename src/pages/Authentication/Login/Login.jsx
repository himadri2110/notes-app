import { useState } from "react";
import "../styles.css";
import { useAuth } from "../../../contexts/authContext";
import { loginService } from "../../../services";
import { Link } from "react-router-dom";

const Login = () => {
  const { setIsAuth, setToken, navigate } = useAuth();

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

      navigate("/home");
    } catch (err) {
      setLogin({ ...login, error: err.response.data.errors[0] });
    }
  };

  return (
    <div className="page-wrapper page-login">
      <section className="login-container">
        <div className="card-wrapper basic-card card-text-only">
          <div className="text-center text-danger">{login.error}</div>
          <div>
            <div className="card-heading">Log In</div>
          </div>

          <div className="card-content">
            <form className="form-group" onSubmit={loginHandler}>
              <div className="input-group input input-primary">
                <label className="input-label">
                  Email<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Type here..."
                  name="email"
                  value={login.input.email || ""}
                  onChange={loginInputHandler}
                  required
                />
              </div>
              <div className="input-group input input-primary">
                <label className="input-label">
                  Password<span>*</span>
                </label>
                <div className="toggle-pwd">
                  <input
                    type={`${login.hide.pwd ? "password" : "text"}`}
                    placeholder="Type here..."
                    name="password"
                    value={login.input.password || ""}
                    onChange={loginInputHandler}
                    required
                  />
                  <i
                    className={`fa-solid ${
                      login.hide.pwd ? "fa-eye" : "fa-eye-slash"
                    }`}
                    onClick={() =>
                      setLogin({
                        ...login,
                        hide: { pwd: !login.hide.pwd },
                      })
                    }
                  ></i>
                </div>
              </div>

              <div className="input-group input-checkbox checkbox-forgetpwd">
                <label className="input-label">
                  <input type="checkbox" /> Remember Me
                </label>
                <a
                  href="/pages/forget-pwd.html"
                  className="link-primary forgot-pwd"
                >
                  <span className="primary">Forgot Password?</span>
                </a>
              </div>

              <button className="btn btn-primary" type="submit">
                Log In
              </button>
              <button
                className="btn outline-primary"
                type="submit"
                onClick={() =>
                  setLogin({
                    ...login,
                    input: {
                      email: "adarshbalika@gmail.com",
                      password: "adarshBalika123",
                    },
                  })
                }
              >
                Guest Mode
              </button>
            </form>
          </div>

          <div className="card-action">
            <span>New to Scribble? </span>
            <Link to="/" className="link">
              SignUp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Login };