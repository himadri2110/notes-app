import { NoteList, NoteInput } from "components";
import { useNotes } from "contexts";
import "./Home.css";

const Home = () => {
  const {
    noteState: { notes },
    showInput,
    setShowInput,
    setIsEditing,
    setInput,
    formInputs,
  } = useNotes();

  return (
    <div className="component-container home-container">
      <button
        className="btn btn-primary"
        onClick={() => {
          setShowInput(true);
          setIsEditing(true);
          setInput(formInputs);
        }}
      >
        <i className="fa-solid fa-plus"></i> Add Note
      </button>

      {showInput ? <NoteInput /> : null}

      <NoteList notes={notes} />
    </div>
  );
};

export { Home };
