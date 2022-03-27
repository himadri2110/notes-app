import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Scribble
      </Link>

      <div className="nav-action">
        <Link to="/">
          <button className="btn btn-primary">Logout</button>
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
