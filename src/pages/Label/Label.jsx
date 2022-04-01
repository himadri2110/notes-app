import "./Label.css";
import { useNotes } from "contexts";
import { NoteInput, NoteList } from "components";
import { useEffect } from "react";

const Label = () => {
  const {
    showInput,
    noteState: { notes },
    tagsArray,
    setTagsArray,
  } = useNotes();

  useEffect(() => {
    setTagsArray(() => {
      const tags = notes.map((note) => note.tags[0] || null);

      return notes
        .map((note) => note.tags[0])
        .filter((tag, index) => tags.indexOf(tag) === index);
    });
  }, [notes]);

  return (
    <div className="component-container">
      {tagsArray.length > 0 ? (
        tagsArray?.map((tag) => {
          return (
            <div className="label-wrapper">
              <h2>{tag}</h2>
              <NoteList notes={notes.filter((note) => note.tags[0] === tag)} />
            </div>
          );
        })
      ) : (
        <p className="text-center">No labels added!</p>
      )}

      {showInput ? <NoteInput /> : null}
    </div>
  );
};

export { Label };
