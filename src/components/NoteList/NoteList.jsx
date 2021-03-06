import { NoteCard } from "components";
import "./NoteList.css";
import { useNotes } from "contexts";
import {
  getNotesSortedByDate,
  getNotesSortedByPriority,
  getNotesFilteredByPriority,
} from "../../utils";
import { useSearchedNotes } from "customHooks/useSearchedNotes";

const NoteList = ({ notes }) => {
  const { notesOrder, searchVal } = useNotes();

  const searhedNotes = useSearchedNotes(notes, searchVal);

  const sortedByDate = getNotesSortedByDate(searhedNotes, notesOrder.sort);
  const sortedByPriority = getNotesSortedByPriority(
    sortedByDate,
    notesOrder.sort
  );
  const filterByPriority = getNotesFilteredByPriority(
    sortedByPriority,
    notesOrder.filter
  );
  const filteredNotes = filterByPriority;

  return (
    <div>
      <div className="notes-wrapper">
        {filteredNotes?.length > 0 ? (
          filteredNotes?.map((unPinnedNote) => {
            return <NoteCard note={unPinnedNote} key={unPinnedNote._id} />;
          })
        ) : (
          <p className="text-center">We don't have any notes to show here.</p>
        )}
      </div>
    </div>
  );
};

export { NoteList };
