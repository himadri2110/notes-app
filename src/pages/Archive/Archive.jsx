import { NoteList } from "components/NoteList/NoteList";
import { useNotes } from "contexts";
import { NoteInput } from "components/";

const Archive = () => {
  const {
    showInput,
    noteState: { archives },
  } = useNotes();

  return (
    <div className="component-container rchive-container">
      <NoteList notes={archives} />
      {showInput ? <NoteInput /> : null}
    </div>
  );
};

export { Archive };
