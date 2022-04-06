import { NoteList, NoteInput } from "components";
import { useNotes } from "contexts";
import "./Home.css";

const Home = () => {
  const {
    noteState: { notes },
    showInput,
  } = useNotes();

  return (
    <div className="component-container home-container">
      {showInput ? <NoteInput /> : null}

      <NoteList notes={notes} />
    </div>
  );
};

export { Home };
