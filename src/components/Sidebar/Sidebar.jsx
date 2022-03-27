import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="wrapper">
      <aside>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/label"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <i className="fa-solid fa-tags"></i> Labels
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/archive"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <i className="fa-solid fa-box-archive"></i> Archive
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trash"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <i className="fa-solid fa-trash-can"></i> Trash
            </NavLink>
          </li>
          <li>
            <button className="btn btn-primary">
              <i className="fa-solid fa-plus"></i> Add Note
            </button>
          </li>
        </ul>

        <div className="profile">
          <div className="username">
            <i className="fa-solid fa-circle-user"></i> Admin
          </div>
        </div>
      </aside>
    </section>
  );
};

export { Sidebar };
