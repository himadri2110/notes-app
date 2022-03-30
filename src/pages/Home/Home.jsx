import { NoteList } from "components/NoteList/NoteList";
import { NoteInput } from "components/";
import { useNotes } from "contexts";
import "./Home.css";

const Home = () => {
  const {
    noteState: { notes },
    showInput,
    setShowInput,
  } = useNotes();

  return (
    <div className="component-container home-container">
      <button className="btn btn-primary" onClick={() => setShowInput(true)}>
        <i className="fa-solid fa-plus"></i> Add Note
      </button>

      {showInput ? <NoteInput /> : null}

      <NoteList notes={notes} />
    </div>
  );
};

export { Home };
