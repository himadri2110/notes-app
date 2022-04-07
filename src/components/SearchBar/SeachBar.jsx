import { useLocation } from "react-router-dom";
import { useAuth } from "contexts/authContext";
import { useNotes } from "contexts";

const SearchBar = () => {
  const { searchVal, setSearchVal, setNotesOrder } = useNotes();
  const { navigate } = useAuth();
  const location = useLocation();

  const navigateToNotes = () => {
    if (searchVal.trim() !== "" && location.pathname !== "/") {
      navigate("/");
    }
  };

  return (
    <input
      type="text"
      placeholder="Search"
      value={searchVal}
      onChange={(e) => {
        setNotesOrder(() => ({ sort: "", filter: "" }));
        setSearchVal(e.target.value);
      }}
      onKeyUp={navigateToNotes}
    />
  );
};

export { SearchBar };
