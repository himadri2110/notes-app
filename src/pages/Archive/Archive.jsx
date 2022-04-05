import { NoteList, NoteInput } from "components";
import { useNotes } from "contexts";

const Archive = () => {
  const {
    showInput,
    noteState: { archives },
  } = useNotes();

  return (
    <div className="component-container archive-container">
      <NoteList notes={archives} />
      {showInput ? <NoteInput /> : null}
    </div>
  );
};

export { Archive };
