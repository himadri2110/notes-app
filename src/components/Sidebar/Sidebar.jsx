import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="wrapper">
      <aside>
        <ul>
          <li>
            <Link to="/">
              <i class="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/label">
              <i class="fa-solid fa-tags"></i> Labels
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa-solid fa-box-archive"></i> Archive
            </Link>
          </li>
          <li>
            <Link to="/">
              <i class="fa-solid fa-trash-can"></i> Trash
            </Link>
          </li>
          <li>
            <button className="btn btn-primary">
              <i class="fa-solid fa-plus"></i> Add Note
            </button>
          </li>
        </ul>

        <div className="profile">
          <div className="username">
            <i class="fa-solid fa-circle-user"></i> Admin
          </div>
        </div>
      </aside>
    </section>
  );
};

export { Sidebar };
