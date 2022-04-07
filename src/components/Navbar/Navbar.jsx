import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNotes } from "contexts";
import { FilterModal, SortModal, SearchBar } from "components";
import { TuneIcon } from "assets";

const Navbar = () => {
  const { setShowInput, setIsEditing, setInput, formInputs, setNotesOrder } =
    useNotes();
  const [showFilterModal, setShowFilterModal] = useState(false);

  const location = useLocation();

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-brand">
        Scribble
      </Link>

      <div className="nav-search input input-primary">
        <SearchBar />
      </div>

      {location.pathname === "/" ? (
        <div className="nav-actions">
          <div className="nav-action-one">
            <button
              onClick={() => {
                setShowFilterModal((show) => !show);
              }}
            >
              <TuneIcon />
            </button>
            {showFilterModal ? (
              <div className="nav-modal">
                <button
                  onClick={() =>
                    setNotesOrder(() => ({ sort: "", filter: "" }))
                  }
                >
                  Clear
                </button>
                <p>Sort By</p>
                <SortModal />
                <p>Filter By</p>
                <FilterModal />
              </div>
            ) : null}
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              setShowInput(true);
              setIsEditing(true);
              setShowFilterModal(false);
              setInput(formInputs);
            }}
          >
            <i className="fa-solid fa-plus"></i> Add Note
          </button>
        </div>
      ) : null}
    </nav>
  );
};

export { Navbar };
