import { NoteCard } from "../NoteCard/NoteCard";
import "./NoteList.css";

const NoteList = ({ notes }) => {
  return (
    <div>
      <div className="notes-wrapper">
        {notes.length > 0 ? (
          notes.map((unPinnedNote) => {
            return <NoteCard note={unPinnedNote} key={unPinnedNote._id} />;
          })
        ) : (
          <p className="text-center">
            No notes to display. Start taking notes!
          </p>
        )}
      </div>
    </div>
  );
};

export { NoteList };
