import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Scribble
      </Link>
    </nav>
  );
};

export { Navbar };
