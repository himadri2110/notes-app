import { useState } from "react";

import { useAuth, useNotes } from "../../contexts";
import { addNoteService } from "../../services";
import "./NoteInput.css";

const NoteInput = () => {
  const [showTextarea, setShowTextarea] = useState(false);
  const { token } = useAuth();

  const { input, setInput, formInputs, dispatchNote } = useNotes();

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const { data, status } = await addNoteService(
        { ...input, isPinned: false, createdTime: new Date().toLocaleString() },
        token
      );
      if (status === 201) {
        dispatchNote({ type: "ADD_NOTE", payload: { notes: data.notes } });
      }
    } catch (err) {
      console.error(err);
    }

    closeNote();
  };

  const closeNote = () => {
    setInput(formInputs);
    setShowTextarea(false);
  };

  return (
    <form className="form-group note-form" onSubmit={submitForm}>
      <div className=" input input-primary">
        <input
          type="text"
          placeholder={showTextarea ? "Title" : "Take a note..."}
          value={input.title}
          onClick={() => setShowTextarea(true)}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
      </div>

      <div
        className=" input input-primary"
        style={{ display: showTextarea ? "flex" : "none" }}
      >
        <textarea
          type="text"
          placeholder="Take a note..."
          value={input.content}
          onChange={(e) => setInput({ ...input, content: e.target.value })}
        />
      </div>

      <div
        className="form-action"
        style={{ display: showTextarea ? "flex" : "none" }}
      >
        <button type="button" className="close-btn" onClick={closeNote}>
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
};

export { NoteInput };
