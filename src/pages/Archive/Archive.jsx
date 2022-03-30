import { NoteList } from "components/NoteList/NoteList";
import { useNotes } from "contexts";

const Archive = () => {
  const {
    noteState: { archives },
  } = useNotes();

  return (
    <div className="component-container rchive-container">
      <NoteList notes={archives} />
    </div>
  );
};

export { Archive };
