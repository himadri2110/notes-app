import { NoteCard } from "../NoteCard/NoteCard";
import { useNotes } from "contexts";
import "./NoteList.css";
const NoteList = () => {
  const { noteState } = useNotes();

  return (
    <div>
      <div className="notes-wrapper">
        {noteState?.map((unPinnedNote) => {
          return <NoteCard note={unPinnedNote} key={unPinnedNote._id} />;
        })}
      </div>
    </div>
  );
};

export { NoteList };
