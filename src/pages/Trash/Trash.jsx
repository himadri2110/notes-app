import { NoteList } from "components";
import { useNotes } from "contexts";

const Trash = () => {
  const {
    noteState: { trash },
  } = useNotes();

  return (
    <div className="component-container trash-container">
      <NoteList notes={trash} />
    </div>
  );
};

export { Trash };
